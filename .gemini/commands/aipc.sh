#!/bin/bash
echo "🚀 Starting AEMZA Industrial Execution Trigger (aipc)..."

# 1. Verification
echo "🔍 Verifying context with skills..."
if [ -d ".gemini/skills" ]; then
    ls .gemini/skills
fi

# 2. Toolchain
echo "🛠️  Running Toolchain: format -> lint -> check -> knip"
pnpm format && pnpm lint && pnpm check && pnpm knip
if [ $? -ne 0 ]; then
    echo "❌ Toolchain failed. Aborting."
    exit 1
fi

# 3. Build Check
echo "🏗️  Executing Industrial Build..."
pnpm build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Aborting."
    exit 1
fi

# 4. Start & Cleanup
echo "⚡ Starting Production Server for Verification..."
pnpm start

# After start is closed
echo "🧹 Post-execution cleanup: rm -rf .next"
rm -rf .next
echo "✅ aipc sequence complete."
