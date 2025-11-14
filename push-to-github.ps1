# GitHub Push Helper Script
# This script will help you push your changes to GitHub

Write-Host "🚀 DriveNow - GitHub Push Helper" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

# Show current status
Write-Host "📊 Current Status:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Show last commit
Write-Host "📝 Last Commit:" -ForegroundColor Yellow
git log -1 --oneline
Write-Host ""

# Check remote
Write-Host "🔗 Remote Repository:" -ForegroundColor Yellow
git remote -v
Write-Host ""

Write-Host "💡 To push your changes, you need to authenticate with GitHub." -ForegroundColor Green
Write-Host ""
Write-Host "Option 1: Use Personal Access Token" -ForegroundColor Cyan
Write-Host "  1. Go to: https://github.com/settings/tokens/new" -ForegroundColor White
Write-Host "  2. Generate a token with 'repo' permissions" -ForegroundColor White
Write-Host "  3. Run: git push -u origin main" -ForegroundColor White
Write-Host "  4. When prompted for password, paste your token" -ForegroundColor White
Write-Host ""
Write-Host "Option 2: Use GitHub Desktop" -ForegroundColor Cyan
Write-Host "  1. Open GitHub Desktop" -ForegroundColor White
Write-Host "  2. File > Add Local Repository" -ForegroundColor White
Write-Host "  3. Select this folder and push" -ForegroundColor White
Write-Host ""
Write-Host "Option 3: Update remote URL with token" -ForegroundColor Cyan
Write-Host "  git remote set-url origin https://YOUR_TOKEN@github.com/vedant1234-ux/drivenow-chauffeur-service.git" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor White
Write-Host ""

# Ask if user wants to try pushing now
$response = Read-Host "Would you like to try pushing now? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host ""
    Write-Host "🔄 Attempting to push..." -ForegroundColor Yellow
    git push -u origin main
} else {
    Write-Host ""
    Write-Host "✅ Your changes are committed and ready to push!" -ForegroundColor Green
    Write-Host "   Run this script again when ready, or use one of the options above." -ForegroundColor White
}

