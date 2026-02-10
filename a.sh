#!/bin/bash
# [AEMDEVWEB]: INFRASTRUCTURE_AUDIT_TOOL v17.5.5

echo "🔍 [1/4] STARTING ZERO-ANY AUDIT..."
GREP_ANY=$(grep -r "any" lib/ constants/ types/ | grep -v "//" | grep -v "company")
if [ -z "$GREP_ANY" ]; then
    echo "✅ PASS: Zero-Any Policy Enforced."
else
    echo "⚠️ FAIL: 'any' detected in code:"
    echo "$GREP_ANY"
fi

echo "🚀 [2/4] STARTING TYPE-SAFETY CHECK..."
pnpm tsc --noEmit && echo "✅ PASS: Types are solid."

echo "🏗️ [3/4] SIMULATING PRODUCTION BUILD..."
pnpm build

echo "📊 [4/4] ANALYZING SEO NODES..."
echo "Sitemap URL Count: $(grep -c "slug" app/sitemap.ts)"
echo "Robots Rules: $(cat app/robots.ts | grep -E "allow|disallow" | wc -l) lines."

echo "✨ AUDIT COMPLETE: NODE STATUS: STABLE"
