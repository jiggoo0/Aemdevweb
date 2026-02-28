#!/bin/bash
# Initialize Industrial AI-Ready Intelligence for a project
PROJECT_NAME=$(basename "$PWD")
echo "🛠️  Initializing Industrial AI-Ready Intelligence for: $PROJECT_NAME"

# 1. Link Global Assets
ln -sf ~/.geminiignore_master ./.geminiignore
mkdir -p .gemini

# 2. Create Identity & Tone DNA
if [ ! -f .gemini/IDENTITY.md ]; then
    case "$PROJECT_NAME" in
        "UnlinkTH")
            TYPE="Online Reputation Management (Content Removal)"
            CLASS="Elite, Public Figures, HNWIs"
            TONE="Professional, Authoritative, Private"
            DESIGN="Security Lab, Clean, Emerald Success"
            ;;
        "www.aemdevweb.com")
            TYPE="Technical Infrastructure & SEO Specialist Hub"
            CLASS="CTOs, Business Owners, Technical Leads"
            TONE="High-Tech, Expert, Industrial"
            DESIGN="Modern Industrial, Performance-Focused"
            ;;
        "me.aemdevweb")
            TYPE="Senior Architect Portfolio"
            CLASS="Recruiters, Global Tech Partners"
            TONE="Sophisticated, Personal, Visionary"
            DESIGN="Minimalist, Quiet Luxury, Bold Typography"
            ;;
        "DestinyOracle")
            TYPE="Advanced Destiny & Astrology Intelligence Platform"
            CLASS="Modern Spiritual Seekers, High-Level Strategists"
            TONE="Mystical, Wise, Precise, Scientific"
            DESIGN="Celestial Industrial, Deep Space, Sacred Geometry"
            ;;
        *)
            TYPE="General Industrial Project"
            CLASS="Standard Business Segment"
            TONE="Professional"
            DESIGN="Aemza Standard"
            ;;
    esac

    cat <<EOF > .gemini/IDENTITY.md
# 🎭 Project Identity & Communication DNA: $PROJECT_NAME
> **Note:** AI will read this file to control the communication behavior of this project specifically.

## 1. Target Audience Segment
*   **Customer Type:** $TYPE
*   **Social Class:** $CLASS
*   **Pain Points:** Image risks or the need for stable infrastructure.

## 2. Communication Tone
*   **Language Level:** $TONE
*   **Target Emotion:** Professionalism at the Senior Architect level.
*   **Words to Avoid:** Generic terms, unnecessary emojis.

## 3. Visual Perspective
*   **Concept:** $DESIGN
*   **Feeling:** Powerful, systematic, and reliable.
*   **Layout:** Follows Tailwind 4 Industrial Kit standards.

---
**Protocol:** All work in the project $PROJECT_NAME must adhere to this identity only.
EOF
    echo "✅ Created Project-Specific Identity DNA for: $PROJECT_NAME"
fi

# 3. Create Mission Tracker
if [ ! -f MISSION.md ]; then
    cat <<EOF > MISSION.md
# 🎯 Active Mission: $PROJECT_NAME
> **Status:** [Ready / In-Progress / Completed]
> **Last Update:** $(date)

## 1. Current Command Status
*   **Command:** Initial Setup
*   **Progress:** 100%
*   **Current Step:** Initialized

## 2. Analysis & Issues
*   **Findings:** Project structure initialized with AEMZA standards.
*   **Issues:** Dependencies might be missing.

## 3. Solutions & Roadmaps
*   **Fix Plan:** Run pnpm install if node_modules is missing.
*   **Pending Tasks:**
    - [ ] Run pnpm install

## 4. AI-Self Instructions
*   Maintain strict architectural integrity.

---
**Protocol:** If there are items in Pending Tasks, the AI must proceed immediately upon running a command.
EOF
    echo "✅ Created Mission Tracker (MISSION.md)"
fi

# 4. Symlink Global Knowledge Base
ln -snf "$HOME/.gemini/skills" "./.gemini/skills"
ln -snf "$HOME/.gemini/commands" "./.gemini/commands"
ln -sf "$HOME/.gemini/GEMINI.md" "./.gemini/GLOBAL_MANIFESTO.md"

# 5. Create Project DNA (GEMINI.md)
if [ ! -f GEMINI.md ]; then
    cat <<EOF > GEMINI.md
# 🧬 Project DNA: $PROJECT_NAME (AEMZA Standard)
- **Primary Source of Truth:** Linked via `./.gemini/` (Derived from `\$HOME/.gemini`)
- **Role:** Senior Architect & Full-Stack Specialist
- **Architecture:** Next.js 16 (App Router), pnpm, TypeScript, Tailwind 4 (Native Utility)

## 🎯 Intelligence Protocol
1. **GLOBAL SKILLS FIRST:** AI MUST consult `./.gemini/skills/**` before implementing any logic.
2. **STRICT TRUTH:** Refer to `./.gemini/GLOBAL_MANIFESTO.md` for master behavioral standards.
3. **SURGICAL UPDATES:** Use `replace` tool exclusively. No file overwrites.

## 🛠 Active Shared Resources
- **Skills:** Shared Intelligence from \$HOME/.gemini/skills
- **Commands:** Industrial Workflows from \$HOME/.gemini/commands
EOF
    echo "✅ Created Project DNA (GEMINI.md) and linked Global Intelligence."
fi

# 6. Update .gitignore
touch .gitignore
grep -qxF ".gemini/" .gitignore || echo ".gemini/" >> .gitignore
grep -qxF ".geminiignore" .gitignore || echo ".geminiignore" >> .gitignore

echo "🚀 Project '$PROJECT_NAME' is now synchronized with AEMZA Global Intelligence."
