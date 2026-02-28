#!/bin/bash
echo "🩺 [HOME AI] Scanning Project Health & Errors..."
PROJECTS=$(find /data/data/com.termux/files/home -maxdepth 2 -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;)

for PROJECT in $PROJECTS; do
    NAME=$(basename "$PROJECT")
    echo "📂 Checking: $NAME"
    cd "$PROJECT"
    
    # Check for MISSION.md status
    if [ -f "MISSION.md" ]; then
        STATUS=$(grep -i "Status" MISSION.md | head -1 | sed -E 's/.*Status[*:]*[[:space:]]*//i' | xargs || echo "Unknown")
        echo "   📍 Status: $STATUS"
    else
        echo "   ⚠️ MISSION.md Missing"
    fi

    # Check for Next.js Cache size
    if [ -d ".next" ]; then
        SIZE=$(du -sh ".next" 2>/dev/null | cut -f1 || echo "0B")
        echo "   ⚡ NextCache: $SIZE"
    fi
    
    # Check for build errors (Quick tsc check if node_modules exist)
    if [ -d "node_modules" ]; then
        echo "   🔍 Running Type-Check..."
        npx tsc --noEmit > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            echo "   ✅ Types: OK"
        else
            echo "   ❌ Types: ERRORS FOUND"
        fi
    else
        echo "   📦 Dependencies: NOT INSTALLED"
    fi
    echo ""
done
