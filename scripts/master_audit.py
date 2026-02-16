import os
import re
import sys
import math

# ==========================================
# ⚙️ GLOBAL CONFIGURATION
# ==========================================
PROJECT_ROOT = "."

# Paths Configuration
PATHS = {
    "GLOBAL_CSS": os.path.join(PROJECT_ROOT, "app/globals.css"),
    "RENDERER": os.path.join(PROJECT_ROOT, "components/templates/TemplateRenderer.tsx"),
    "TEMPLATES_DIR": os.path.join(PROJECT_ROOT, "components/templates"),
    "SERVICES_DIR": os.path.join(PROJECT_ROOT, "constants/services"),
    "NODES_DIR": os.path.join(PROJECT_ROOT, "constants/area-nodes"),
    "COLOR_TARGETS": [
        os.path.join(PROJECT_ROOT, "app"),
        os.path.join(PROJECT_ROOT, "constants/services"),
        os.path.join(PROJECT_ROOT, "constants/area-nodes")
    ]
}

# Color Settings
MIN_CONTRAST_RATIO = 4.5
SYSTEM_DEFAULTS = {
    "light": {"bg": "#ffffff", "text": "#0f172a"},
    "dark":  {"bg": "#020617", "text": "#f8fafc"}
}

# CLI Colors
class Colors:
    HEADER = '\033[95m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

# ==========================================
# 🧠 MODULE 1: STRUCTURAL AUDITOR (TS-PATCHED)
# ==========================================
class StructuralAuditor:
    def __init__(self):
        self.registered_slugs = {}
        self.issues = []
        self.warnings = []

    def log_issue(self, context, message):
        self.issues.append(f"{Colors.FAIL}[STRUCT-ERR] {context}:{Colors.ENDC} {message}")

    def log_warning(self, context, message):
        self.warnings.append(f"{Colors.WARNING}[STRUCT-WARN] {context}:{Colors.ENDC} {message}")

    def scan_renderer(self):
        """Phase 1: Scan Renderer with robust TS Regex"""
        if not os.path.exists(PATHS["RENDERER"]):
            self.log_issue("RENDERER", "File TemplateRenderer.tsx not found!")
            return False

        with open(PATHS["RENDERER"], 'r', encoding='utf-8') as f:
            content = f.read()

        # [FIX]: Regex รองรับ Type Definition (: Record<...>)
        registry_block = re.search(r'const TEMPLATE_REGISTRY[\s\S]*?=\s*\{([\s\S]*?)\};', content)
        
        if registry_block:
            matches = re.findall(r'["\']?([\w-]+)["\']?\s*:\s*(\w+)', registry_block.group(1))
            for slug, component in matches:
                self.registered_slugs[slug] = component
            return True
        else:
            self.log_issue("RENDERER", "Could not parse TEMPLATE_REGISTRY. Regex mismatch.")
            return False

    def scan_templates(self):
        """Phase 2: Check Template Integrity & Orphans"""
        ignored = ['sections', 'ui', '_components']
        if not os.path.exists(PATHS["TEMPLATES_DIR"]): return

        for item in os.listdir(PATHS["TEMPLATES_DIR"]):
            folder_path = os.path.join(PATHS["TEMPLATES_DIR"], item)
            if os.path.isdir(folder_path) and item not in ignored:
                # Check Index.tsx
                index_path = os.path.join(folder_path, "Index.tsx")
                if not os.path.exists(index_path): index_path = os.path.join(folder_path, "index.tsx")
                
                if not os.path.exists(index_path):
                    self.log_warning(f"TEMPLATE/{item}", "Folder exists but no 'Index.tsx' found.")
                    continue

                # Check Orphan Components
                components_path = os.path.join(folder_path, "_components")
                if os.path.exists(components_path):
                    with open(index_path, 'r', encoding='utf-8') as f: index_content = f.read()
                    for sub in [f for f in os.listdir(components_path) if f.endswith('.tsx')]:
                        component_name = sub.replace('.tsx', '')
                        if component_name not in index_content:
                            self.log_issue(f"TEMPLATE/{item}", f"Orphan Component: {sub} in _components but unused.")

    def scan_bindings(self, dir_path, context):
        """Phase 3: Verify Data Bindings"""
        if not os.path.exists(dir_path): return
        for root, _, files in os.walk(dir_path):
            for file in files:
                if file.endswith('.ts') and file != 'index.ts':
                    with open(os.path.join(root, file), 'r', encoding='utf-8') as f: content = f.read()
                    
                    match = re.search(r'templateSlug\s*:\s*["\']([\w-]+)["\']', content)
                    if match:
                        slug = match.group(1)
                        # Check against registry ONLY if registry was successfully loaded
                        if self.registered_slugs and slug not in self.registered_slugs:
                            self.log_issue(f"{context}/{file}", f"Invalid templateSlug: '{slug}' (Not in Registry)")
                    else:
                        # Only warn if it looks like a data node
                        if "export const" in content and "Node" in content:
                            self.log_warning(f"{context}/{file}", "No 'templateSlug' definition found.")

    def run(self):
        print(f"\n{Colors.HEADER}🏗️  PHASE 1: STRUCTURAL INTEGRITY SCAN{Colors.ENDC}")
        if self.scan_renderer():
            print(f"   ✅ Switchboard Loaded: {len(self.registered_slugs)} routes active.")
            self.scan_templates()
            self.scan_bindings(PATHS["SERVICES_DIR"], "SERVICES")
            self.scan_bindings(PATHS["NODES_DIR"], "NODES")
        
        return len(self.issues)

# ==========================================
# 🎨 MODULE 2: VISUAL AUDITOR (CONTRAST)
# ==========================================
class ColorAuditor:
    def __init__(self):
        self.css_vars = {}
        self.issues = []

    def load_css_variables(self):
        if not os.path.exists(PATHS["GLOBAL_CSS"]): return
        with open(PATHS["GLOBAL_CSS"], 'r', encoding='utf-8') as f:
            content = re.sub(r'/\*.*?\*/', '', f.read(), flags=re.DOTALL)
            for m in re.finditer(r'(--[\w-]+)\s*:\s*([^;]+);', content):
                val = m.group(2).strip()
                if '//' in val: val = val.split('//')[0].strip()
                self.css_vars[m.group(1)] = val

    def clean_float(self, val_str):
        if not val_str: return 0.0
        val_str = str(val_str).strip()
        if val_str.endswith('%'):
            return float(val_str.rstrip('%')) / 100.0
        return float(val_str)

    def oklch_to_rgb(self, l, c, h):
        h_rad = math.radians(h)
        L_, a_, b_ = l, c * math.cos(h_rad), c * math.sin(h_rad)
        l_ = L_ + 0.3963377774 * a_ + 0.2158037573 * b_
        m_ = L_ - 0.1055613458 * a_ - 0.0638541728 * b_
        s_ = L_ - 0.0894841775 * a_ - 1.2914855480 * b_
        l_lin, m_lin, s_lin = l_**3, m_**3, s_**3
        r = +4.0767416621 * l_lin - 3.3077115913 * m_lin + 0.2309699292 * s_lin
        g = -1.2684380046 * l_lin + 2.6097574011 * m_lin - 0.3413190965 * s_lin
        b = -0.0041960863 * l_lin - 0.7034186147 * m_lin + 1.7076147010 * s_lin
        def to_255(v): return int((1.055 * (v**(1.0/2.4)) - 0.055 if v >= 0.0031308 else 12.92 * v) * 255)
        return (to_255(max(0, min(1, r))), to_255(max(0, min(1, g))), to_255(max(0, min(1, b))))

    def parse_color(self, color_str):
        if not color_str: return None
        color_str = str(color_str).lower().strip()
        
        # OKLCH Parser (Tailwind 4 Style)
        # Matches: oklch(0.6 0.1 240) or 60% 0.1 240
        oklch_match = re.search(r'(?:oklch\()?\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)', color_str)
        if oklch_match:
            try:
                l_str, c_str, h_str = oklch_match.groups()
                l = self.clean_float(l_str)
                return self.oklch_to_rgb(l, float(c_str), float(h_str))
            except: pass
        
        # Hex Parser
        hex_match = re.search(r'#([0-9a-f]{3,6})', color_str)
        if hex_match:
            hex_code = hex_match.group(1)
            if len(hex_code) == 3: hex_code = ''.join([c*2 for c in hex_code])
            if len(hex_code) == 6:
                return tuple(int(hex_code[i:i+2], 16) for i in (0, 2, 4))
        return None

    def resolve_var(self, value, depth=0):
        if not value or depth > 5: return None
        value = str(value).strip()
        
        # 1. Direct Var
        if value.startswith('var('):
             match = re.search(r'var\((--[\w-]+)\)', value)
             if match: return self.resolve_var(self.css_vars.get(match.group(1)), depth + 1)

        # 2. Wrapped Var (e.g., oklch(var(--foo)))
        while 'var(--' in value and depth < 5:
            match = re.search(r'var\((--[\w-]+)\)', value)
            if not match: break
            value = value.replace(match.group(0), self.css_vars.get(match.group(1), ''))
            depth += 1
            
        return self.parse_color(value)

    def get_contrast(self, rgb1, rgb2):
        def lum(rgb):
            a = [x/255.0 for x in rgb]
            a = [((x+0.055)/1.055)**2.4 if x > 0.03928 else x/12.92 for x in a]
            return 0.2126*a[0] + 0.7152*a[1] + 0.0722*a[2]
        l1, l2 = lum(rgb1), lum(rgb2)
        return (max(l1, l2)+0.05) / (min(l1, l2)+0.05)

    def run(self):
        print(f"\n{Colors.HEADER}🎨  PHASE 2: VISUAL ACCESSIBILITY SCAN (WCAG AA){Colors.ENDC}")
        self.load_css_variables()
        print(f"   ✅ Global CSS Loaded: {len(self.css_vars)} variables.")

        for target in PATHS["COLOR_TARGETS"]:
            if not os.path.exists(target): continue
            for root, _, files in os.walk(target):
                for file in files:
                    if file.endswith('.ts') and 'node_modules' not in root:
                        with open(os.path.join(root, file), 'r', encoding='utf-8') as f: content = f.read()
                        
                        # Find Theme Objects using Regex
                        for block in re.findall(r'\{([^}]+)\}', content):
                            mode = re.search(r'mode\s*:\s*["\'](dark|light)["\']', block)
                            mode_key = mode.group(1) if mode else "light"
                            
                            primary = re.search(r'primary\s*:\s*["\']([^"\']+)["\']', block)
                            bg = re.search(r'background\s*:\s*["\']([^"\']+)["\']', block)
                            
                            p_val = primary.group(1) if primary else None
                            bg_val = bg.group(1) if bg else SYSTEM_DEFAULTS[mode_key]["bg"]

                            if p_val:
                                rgb_p, rgb_b = self.resolve_var(p_val), self.resolve_var(bg_val)
                                if rgb_p and rgb_b:
                                    ratio = self.get_contrast(rgb_p, rgb_b)
                                    if ratio < MIN_CONTRAST_RATIO:
                                        self.issues.append(f"{os.path.join(root, file)} ({mode_key}): {p_val} on {bg_val} -> Ratio {ratio:.2f}")

        return len(self.issues)

# ==========================================
# 🏁 MAIN EXECUTION
# ==========================================
def main():
    print(f"{Colors.BOLD}🚀 AEM MASTER AUDITOR v1.0.0 (Unified Architecture){Colors.ENDC}")
    print("==================================================")
    
    struct_audit = StructuralAuditor()
    struct_errors = struct_audit.run()
    
    for err in struct_audit.issues: print(err)
    for warn in struct_audit.warnings: print(warn)

    color_audit = ColorAuditor()
    color_errors = color_audit.run()
    
    for err in color_audit.issues:
        print(f"{Colors.FAIL}[COLOR-FAIL]{Colors.ENDC} {err}")

    print("\n==================================================")
    total_errors = struct_errors + color_errors
    
    if total_errors == 0:
        print(f"{Colors.OKGREEN}✨ ALL SYSTEMS GO: Project is Structurally & Visually Clean.{Colors.ENDC}")
        sys.exit(0)
    else:
        print(f"{Colors.FAIL}🚨 AUDIT FAILED: Found {total_errors} critical issues.{Colors.ENDC}")
        sys.exit(1)

if __name__ == "__main__":
    main()
