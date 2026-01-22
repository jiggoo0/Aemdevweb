#!/bin/bash

# ==============================================================================
# PROJECT: aemdevweb.com / unlink-th.com
# DESCRIPTION: Pre-deployment Inspection with Colored Terminal Output
# VERSION: 2.2.0 (2026-01-22)
# ==============================================================================

# 1. COLOR CONFIGURATION
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 2. LOGGING HELPERS
log_info()    { printf "${BLUE}[INFO] %s${NC}\n" "$1"; }
log_success() { printf "${GREEN}[PASS] %s${NC}\n" "$1"; }
log_error()   { printf "${RED}[FAIL] %s${NC}\n" "$1"; }
log_working() { printf "${YELLOW}[WORKING] %s${NC}\n" "$1"; }

# 3. INITIALIZATION
REPORT_FILE="pre-deploy-report.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

if [ -f "$REPORT_FILE" ]; then
    rm "$REPORT_FILE"
    log_info "Previous report removed."
fi

log_working "Initiating Technical Inspection for UnlinkTH..."

{
    echo "# Pre-deployment Inspection Report"
    echo "Generated: $TIMESTAMP"
    echo "Branch: $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'N/A')"
    echo ""
} > $REPORT_FILE

# 4. ENVIRONMENT CHECK
log_working "Verifying Environment Configuration..."
echo "## 1. Environment Configuration" >> $REPORT_FILE
if [ ! -f .env ]; then
    log_error "Critical Error: .env file is missing!"
    echo "Status: CRITICAL FAILURE - .env file missing. Deployment halted." >> $REPORT_FILE
    exit 1
else
    log_success "Environment file found."
    echo "Status: Environment configuration verified." >> $REPORT_FILE
fi
echo "" >> $REPORT_FILE

# 5. AUTO-FIX PROCEDURE
log_working "Running ESLint Auto-fix..."
echo "## 2. Automated Fixes" >> $REPORT_FILE
pnpm lint --fix > /dev/null 2>&1
log_success "Smart repair completed."
echo "Status: Automatic hygiene improvements applied." >> $REPORT_FILE
echo "" >> $REPORT_FILE

# 6. STATIC ANALYSIS (LINT)
log_working "Executing Code Hygiene Check (Linting)..."
echo "## 3. Static Analysis (ESLint)" >> $REPORT_FILE
pnpm lint > lint_output.txt 2>&1
LINT_EXIT_CODE=$?

if [ $LINT_EXIT_CODE -eq 0 ]; then
    log_success "Linting passed."
    echo "Status: Passed. Code adheres to project standards." >> $REPORT_FILE
else
    log_error "Linting issues detected!"
    echo "Status: Linting failed. Manual intervention required." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    cat lint_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm lint_output.txt
echo "" >> $REPORT_FILE

# 7. TYPE INTEGRITY
log_working "Verifying TypeScript Integrity..."
echo "## 4. Type Integrity Check" >> $REPORT_FILE
pnpm exec tsc --noEmit > type_output.txt 2>&1
TYPE_EXIT_CODE=$?

if [ $TYPE_EXIT_CODE -eq 0 ]; then
    log_success "Type check passed."
    echo "Status: Passed. Type safety verified." >> $REPORT_FILE
else
    log_error "Type errors found!"
    echo "Status: TypeScript errors detected." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    cat type_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm type_output.txt
echo "" >> $REPORT_FILE

# 8. PRODUCTION BUILD TEST
log_working "Executing Optimized Production Build (Next.js 16)..."
echo "## 5. Production Build Test" >> $REPORT_FILE
pnpm run build > build_output.txt 2>&1
BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    log_success "Build successful."
    echo "Status: Build optimized successfully." >> $REPORT_FILE
    echo "### Route Analysis and Bundle Sizes" >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    sed -n '/Route (app)/,$p' build_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
else
    log_error "Build process failed!"
    echo "Status: Production build failed." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    tail -n 30 build_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm build_output.txt

# 9. FINAL SUMMARY
echo "" >> $REPORT_FILE
echo "---" >> $REPORT_FILE
echo "## Summary Result" >> $REPORT_FILE

printf "\n${YELLOW}========================================${NC}\n"
printf "           INSPECTION SUMMARY           \n"
printf "${YELLOW}========================================${NC}\n"

if [ $LINT_EXIT_CODE -eq 0 ] && [ $TYPE_EXIT_CODE -eq 0 ] && [ $BUILD_EXIT_CODE -eq 0 ]; then
    log_success "READY FOR DEPLOY: All protocols verified."
    echo "Final Status: READY FOR DEPLOY" >> $REPORT_FILE
else
    log_error "FIX REQUIRED: System contains errors."
    echo "Final Status: FIX REQUIRED BEFORE DEPLOY" >> $REPORT_FILE
fi

log_info "Full report available at: $REPORT_FILE"
