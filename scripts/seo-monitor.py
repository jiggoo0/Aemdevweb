import sys
import re
import requests
import datetime
from typing import List, Dict
from concurrent.futures import ThreadPoolExecutor

# --- [VISUAL SYSTEM] ---
class Colors:
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    END = '\033[0m'

# --- [SYSTEM CORE] ---
class SEOMonitor:
    def __init__(self):
        # [FIX]: Update URL to 'www' to prevent 307 Redirect Loop
        self.target_sitemap = "https://www.aemdevweb.com/sitemap.xml"
        self.headers = {
            'User-Agent': 'AEM-SEO-Monitor/1.2 (Internal Health Check)',
            'Accept': 'application/xml,text/xml,application/xhtml+xml'
        }
        self.report_date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        self.urls = self._load_urls()
        
    def _load_urls(self) -> List[str]:
        """ดึง URL จาก Live Sitemap พร้อมระบบป้องกัน Redirect Loop"""
        urls = []
        try:
            print(f"{Colors.YELLOW}📡 Fetching dynamic sitemap from: {self.target_sitemap}...{Colors.END}")
            
            # Request พร้อม Timeout และ Headers
            response = requests.get(self.target_sitemap, headers=self.headers, timeout=15)
            
            if response.status_code == 200:
                # ใช้ Regex สกัดค่าใน Tag <loc> (รองรับทั้ง http และ https)
                urls = re.findall(r'<loc>(.*?)</loc>', response.text)
                
                # กรองเฉพาะ URL ของเว็บเราเอง
                urls = [u for u in urls if "aemdevweb.com" in u]

                if not urls:
                    print(f"{Colors.RED}[ERROR] No URLs found in sitemap content.{Colors.END}")
                    sys.exit(1)
            else:
                print(f"{Colors.RED}[ERROR] Sitemap returned status {response.status_code}{Colors.END}")
                # Debug: ปริ้นท์ URL ที่มัน Redirect ไป (ถ้ามี)
                if response.history:
                    print(f"{Colors.YELLOW}   Redirect history: {[r.url for r in response.history]}{Colors.END}")
                sys.exit(1)

        except requests.exceptions.TooManyRedirects:
             print(f"{Colors.RED}[CRITICAL] Infinite Redirect Loop detected! Check your DNS/Vercel settings.{Colors.END}")
             sys.exit(1)     
        except requests.exceptions.RequestException as e:
            print(f"{Colors.RED}[ERROR] Could not connect to live sitemap: {e}{Colors.END}")
            sys.exit(1)
            
        return urls

    def check_health(self, url: str) -> Dict:
        """ตรวจสอบ HTTP Status และ Latency รายหน้า"""
        result = {
            "url": url,
            "status": "ERR",
            "latency": 0,
            "ok": False
        }
        try:
            start_time = datetime.datetime.now()
            response = requests.get(url, headers=self.headers, timeout=10, allow_redirects=True)
            duration = (datetime.datetime.now() - start_time).total_seconds()
            
            result["status"] = response.status_code
            result["latency"] = round(duration, 3)
            result["ok"] = response.status_code == 200
            
        except Exception as e:
            result["status"] = "TIMEOUT" if "timeout" in str(e).lower() else "FAIL"
            
        return result

    def run(self):
        print(f"\n{Colors.BOLD}{Colors.CYAN}🚀 AEM SEO MONITORING ENGINE v1.2{Colors.END}")
        print(f"📅 Report Date: {self.report_date}")
        print(f"📡 Monitoring {len(self.urls)} URLs (Target: WWW-Primary)...\n")

        # ใช้ ThreadPool สำหรับ Parallel Scanning (5 Workers กำลังดีสำหรับ Termux)
        with ThreadPoolExecutor(max_workers=5) as executor:
            results = list(executor.map(self.check_health, self.urls))

        # --- [REPORT GENERATION] ---
        # Header formatting
        print(f"{'URL Endpoint':<50} | {'STAT':<6} | {'TIME':<8}")
        print("-" * 70)
        
        success_count = 0
        total_latency = 0
        
        for r in results:
            status_color = Colors.GREEN if r['ok'] else Colors.RED
            
            # Latency Color Logic (0.8s rule)
            if r['latency'] < 0.8:
                lat_color = Colors.GREEN
            elif r['latency'] < 1.5:
                lat_color = Colors.YELLOW
            else:
                lat_color = Colors.RED

            # Clean URL for display (remove domain to save space)
            display_url = r['url'].replace("https://www.aemdevweb.com", "").replace("https://aemdevweb.com", "")
            if display_url == "": display_url = "/"
            
            print(f"{display_url[:50]:<50} | "
                  f"{status_color}{str(r['status']):<6}{Colors.END} | "
                  f"{lat_color}{r['latency']:.2f}s{Colors.END}")
            
            if r['ok']: 
                success_count += 1
                total_latency += r['latency']

        # --- [FINAL SUMMARY] ---
        print("-" * 70)
        avg_latency = total_latency / success_count if success_count > 0 else 0
        
        print(f"{Colors.BOLD}📊 SYSTEM HEALTH SUMMARY:{Colors.END}")
        print(f"✅ Success Rate : {success_count}/{len(self.urls)} Pages")
        print(f"⚡ Avg Latency  : {avg_latency:.2f}s (Target: < 0.8s)")
        
        if success_count == len(self.urls):
            print(f"\n{Colors.GREEN}✨ ALL SYSTEMS GREEN: SEO Infrastructure is Robust.{Colors.END}")
        else:
            print(f"\n{Colors.RED}⚠ WARNING: Network Instability Detected.{Colors.END}")

if __name__ == "__main__":
    monitor = SEOMonitor()
    monitor.run()
