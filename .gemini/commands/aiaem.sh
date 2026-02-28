#!/bin/bash
# ==============================================================================
# [AEMZA HOME AI]: aiaem - INTEGRATED SYSTEM AUDIT & CACHE PURGE
# [VERSION]: 1.0.0 (Unified aistatus + aipurge)
# ==============================================================================

echo -e "\033[0;34m\033[1m🩺 [AEMZA] Initiating System Audit & Quick Purge Sequence...\033[0m"

# --- PHASE 1: SOFT PURGE (From aipurge) ---
echo -e "
\033[1;33m[PHASE 1]: SOFT PURGE (Infrastructure & Cache Optimization)\033[0m"

echo -e "\033[0;34m📦 Pruning pnpm store and global caches...\033[0m"
pnpm store prune 2>/dev/null
rm -rf "$HOME/.cache/pnpm/dlx" "$HOME/.cache/tsx" "$HOME/.cache/next-swc" 2>/dev/null
rm -rf "$HOME/.npm/_logs" "$HOME/.gemini/tmp/*" 2>/dev/null

# --- PHASE 2: SYSTEM AUDIT (From aistatus) ---
echo -e "
\033[1;36m[PHASE 2]: SYSTEM HEALTH AUDIT (Project Status)\033[0m"

PROJECTS=$(find "$HOME" -maxdepth 2 -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;)

for PROJECT in $PROJECTS; do
    PROJECT_NAME=$(basename "$PROJECT")
    echo -e "\033[1;37m📂 Project: $PROJECT_NAME\033[0m"
    
    # 1. Mission Status
    if [ -f "$PROJECT/MISSION.md" ]; then
        STATUS=$(grep -i "Status" "$PROJECT/MISSION.md" | head -1 | sed -E 's/.*Status[*:]*[[:space:]]*//i' | xargs || echo "Unknown")
        echo -e "   📍 Status: \033[0;32m$STATUS\033[0m"
    else
        echo -e "   ⚠️ \033[0;31mMISSION.md Missing\033[0m"
    fi

    # 2. Next.js Cache & Auto-Purge Soft
    if [ -d "$PROJECT/.next" ]; then
        SIZE=$(du -sh "$PROJECT/.next" 2>/dev/null | cut -f1 || echo "0B")
        echo -e "   ⚡ NextCache Size: $SIZE (Purging...)"
        rm -rf "$PROJECT/.next" 2>/dev/null
    else
        echo -e "   ⚡ NextCache: \033[0;34mClean\033[0m"
    fi
    
    # 3. Type-Check Integrity
    if [ -d "$PROJECT/node_modules" ]; then
        echo -e "   🔍 Integrity Check: \c"
        cd "$PROJECT"
        # Run a quick check without full log output
        npx tsc --noEmit > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            echo -e "\033[0;32m✅ Types OK\033[0m"
        else
            echo -e "\033[0;31m❌ Errors Found\033[0m"
        fi
    else
        echo -e "   📦 Dependencies: \033[0;33mNot Installed (Skipping Check)\033[0m"
    fi
    echo ""
done

# --- Finalization ---
echo -e "
\033[0;32m\033[1m✨ [AEMZA] Audit Complete & Cache Optimized. System Healthy.\033[0m"
