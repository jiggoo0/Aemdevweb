#!/bin/bash
echo "🔄 Synchronizing Global Intelligence Hub..."

# Find all projects with package.json
PROJECTS=$(find /data/data/com.termux/files/home -maxdepth 2 -name "package.json" -not -path "*/node_modules/*" -exec dirname {} \;)

for PROJECT in $PROJECTS; do
    echo "⚓ Initializing: $(basename "$PROJECT")"
    cd "$PROJECT" && /data/data/com.termux/files/home/.gemini/commands/init-ai.sh
done

echo "✅ Global Intelligence Synchronized."
