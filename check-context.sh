#!/bin/bash

# check-context.sh - aemdevweb.com Context Auditor
echo "🔍 [Auditing Project Context for Gemini...]"
echo "------------------------------------------"

# 1. Check Gemini.md (System Instructions)
if [ -f "Gemini.md" ]; then
    echo "✅ Gemini.md: Found (Ready to control AI behavior)"
else
    echo "❌ Gemini.md: Not Found (AI might 'yap' or lose focus)"
fi

# 2. Check package.json (Infrastructure Spec)
if [ -f "package.json" ]; then
    VERSION=$(node -p "require('./package.json').version")
    NEXT_VER=$(node -p "require('./package.json').dependencies.next")
    echo "✅ package.json: Found (v$VERSION, Next.js $NEXT_VER)"
else
    echo "❌ package.json: Not Found"
fi

# 3. Check PNPM & Node Engine
if [ -f "pnpm-lock.yaml" ]; then
    echo "✅ PNPM Lock: Found (Ready for skill_infrastructure_audit)"
else
    echo "⚠️ PNPM Lock: Missing (Run 'pnpm install' first)"
fi

# 4. Gather Critical Files Summary for AI
echo ""
echo "📝 [Context Summary for AI Sync]"
echo "------------------------------------------"
echo "Project: $(basename "$PWD")"
echo "Node Version: $(node -v)"
echo "Files to Caching: Gemini.md, package.json, app/(main)/page.tsx"
echo "Active Skills: skill_bundle_master, skill_infrastructure_audit"
echo "------------------------------------------"
echo "🚀 Instructions: Copy the summary above and send it to Gemini to verify memory."
