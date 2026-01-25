#!/bin/bash

# ==============================================================================
# PROJECT: aemdevweb.com / unlink-th.com
# DESCRIPTION: Pre-deployment Inspection with High Visibility Terminal Output
# VERSION: 2.3.1 (Fixed Typo on Build Output)
# ==============================================================================

# 1. COLOR CONFIGURATION
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
SEPARATOR="================================================================"

# 2. LOGGING HELPERS
log_header()  { printf "\n${CYAN}%s\n%s\n%s${NC}\n" "$SEPARATOR" "  $1" "$SEPARATOR"; }
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

log_header "INITIATING TECHNICAL INSPECTION: WWW.AEMWEBDEV.COM"

{
    echo "# Pre-deployment Inspection Report"
    echo "Generated: $TIMESTAMP"
    echo "Branch: $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'N/A')"
    echo ""
} > $REPORT_FILE

# 4. ENVIRONMENT CHECK
log_header "STEP 1: ENVIRONMENT CONFIGURATION"
log_working "Checking .env file integrity..."
echo "## 1. Environment Configuration" >> $REPORT_FILE

if [ ! -f .env ]; then
    log_error "Critical Error: .env file is missing!"
    echo "Status: CRITICAL FAILURE - .env file missing. Deployment halted." >> $REPORT_FILE
    exit 1
else
    log_success "Environment configuration verified."
    echo "Status: Environment configuration verified." >> $REPORT_FILE
fi
echo "" >> $REPORT_FILE

# 5. AUTO-FIX PROCEDURE
log_header "STEP 2: SMART REPAIR (ESLINT)"
log_working "Executing lint --fix..."
echo "## 2. Automated Fixes" >> $REPORT_FILE
pnpm lint --fix 2>&1 | tee -a lint_fix.log
log_success "Smart repair process completed."
echo "Status: Automatic hygiene improvements applied." >> $REPORT_FILE
rm -f lint_fix.log
echo "" >> $REPORT_FILE

# 6. STATIC ANALYSIS (LINT)
log_header "STEP 3: STATIC ANALYSIS"
log_working "Analyzing code hygiene..."
echo "## 3. Static Analysis (ESLint)" >> $REPORT_FILE

pnpm lint 2>&1 | tee lint_output.txt
LINT_EXIT_CODE=${PIPESTATUS[0]}

if [ $LINT_EXIT_CODE -eq 0 ]; then
    log_success "Static analysis passed."
    echo "Status: Passed. Code adheres to project standards." >> $REPORT_FILE
else
    log_error "Linting issues detected in the output above."
    echo "Status: Linting failed. Manual intervention required." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    cat lint_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm -f lint_output.txt
echo "" >> $REPORT_FILE

# 7. TYPE INTEGRITY
log_header "STEP 4: TYPE INTEGRITY"
log_working "Verifying TypeScript structures..."
echo "## 4. Type Integrity Check" >> $REPORT_FILE

pnpm exec tsc --noEmit 2>&1 | tee type_output.txt
TYPE_EXIT_CODE=${PIPESTATUS[0]}

if [ $TYPE_EXIT_CODE -eq 0 ]; then
    log_success "Type safety verified."
    echo "Status: Passed. Type safety verified." >> $REPORT_FILE
else
    log_error "TypeScript errors detected in the output above."
    echo "Status: TypeScript errors detected." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    cat type_output.txt >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm -f type_output.txt
echo "" >> $REPORT_FILE

# 8. PRODUCTION BUILD TEST
log_header "STEP 5: PRODUCTION BUILD TEST (NEXT.JS 16.1.3)"
log_working "Executing optimized build process..."
echo "## 5. Production Build Test" >> $REPORT_FILE

# FIXED: มั่นใจว่าไม่มีช่องว่างหรือการพิมพ์ผิดในชื่อไฟล์ output
BUILD_TEMP_LOG="build_output.txt"
pnpm run build 2>&1 | tee "$BUILD_TEMP_LOG"
BUILD_EXIT_CODE=${PIPESTATUS[0]}

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    log_success "Production build optimized successfully."
    echo "Status: Build optimized successfully." >> $REPORT_FILE
    echo "### Route Analysis and Bundle Sizes" >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    # ดึงข้อมูลสถิติ Route
    sed -n '/Route (app)/,$p' "$BUILD_TEMP_LOG" >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
else
    log_error "Production build process failed."
    echo "Status: Production build failed." >> $REPORT_FILE
    echo '```text' >> $REPORT_FILE
    tail -n 30 "$BUILD_TEMP_LOG" >> $REPORT_FILE
    echo '```' >> $REPORT_FILE
fi
rm -f "$BUILD_TEMP_LOG"

# 9. FINAL SUMMARY
log_header "FINAL INSPECTION SUMMARY"
echo "" >> $REPORT_FILE
echo "---" >> $REPORT_FILE
echo "## Summary Result" >> $REPORT_FILE

if [ $LINT_EXIT_CODE -eq 0 ] && [ $TYPE_EXIT_CODE -eq 0 ] && [ $BUILD_EXIT_CODE -eq 0 ]; then
    log_success "VERDICT: READY FOR DEPLOY"
    echo "Final Status: READY FOR DEPLOY" >> $REPORT_FILE
else
    log_error "VERDICT: FIX REQUIRED BEFORE DEPLOY"
    echo "Final Status: FIX REQUIRED BEFORE DEPLOY" >> $REPORT_FILE
fi

log_info "Audit report compiled at: $REPORT_FILE"
