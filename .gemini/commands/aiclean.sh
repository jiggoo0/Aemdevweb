#!/bin/bash
# ==============================================================================
# [AEMZA HOME AI]: aiclean - TOTAL INDUSTRIAL PURGE (SOFT + DEEP/HARD)
# [VERSION]: 4.0.0 (Unified All-in-One Clean)
# ==============================================================================

echo -e "\033[0;31m\033[1m☢️  [AEMZA] Initiating Total Industrial Clean Sequence...\033[0m"

# --- PHASE 1: GLOBAL INFRASTRUCTURE CLEAN (Soft) ---
echo -e "\n\033[1;33m[PHASE 1]: GLOBAL CACHE & INFRASTRUCTURE PURGE\033[0m"
echo -e "\033[0;34m📦 Pruning pnpm store and global caches...\033[0m"
pnpm store prune 2>/dev/null
rm -rf "$HOME/.cache/pnpm/dlx" "$HOME/.cache/tsx" "$HOME/.cache/next-swc" 2>/dev/null

echo -e "\033[0;34m🧹 Removing system temporary files and logs...\033[0m"
rm -rf "$HOME/.npm/_logs" "$HOME/.gemini/tmp/*" 2>/dev/null

# --- PHASE 2: DEEP PROJECT CLEAN (Hard) ---
echo -e "\n\033[1;31m[PHASE 2]: DEEP PROJECT PURGE (Node Modules & Build Artifacts)\033[0m"

PROJECTS=$(find "$HOME" -maxdepth 2 -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;)

for PROJECT in $PROJECTS; do
    PROJECT_NAME=$(basename "$PROJECT")
    echo -e "\033[0;34m🗑️  Deep Purging Project: $PROJECT_NAME\033[0m"
    
    # Remove everything: node_modules, build artifacts, locks, and caches
    rm -rf "$PROJECT/node_modules" \
           "$PROJECT/.next" \
           "$PROJECT/.turbo" \
           "$PROJECT/.cache" \
           "$PROJECT/dist" \
           "$PROJECT/build" \
           "$PROJECT/.pnpm-debug.log*" \
           "$PROJECT/pnpm-lock.yaml" 2>/dev/null
    
    echo -e "\033[0;32m✅ Total Cleaned: $PROJECT_NAME\033[0m"
done

# --- PHASE 3: ORPHAN CLEANUP ---
echo -e "\n\033[1;34m[PHASE 3]: ORPHAN ARTIFACT REMOVAL\033[0m"
find "$HOME" -maxdepth 2 -name ".next" -type d -exec rm -rf {} + 2>/dev/null

echo -e "\n\033[0;32m\033[1m✨ [AEMZA] System fully reset. All caches and project artifacts removed.\033[0m"
echo -e "\033[0;36m💡 System is now in a pristine state, ready for fresh installation.\033[0m"
