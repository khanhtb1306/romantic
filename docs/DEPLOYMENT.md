# 🚀 Deployment Guide - GitHub Pages

## 1. Prerequisites

- [ ] GitHub account
- [ ] Repository created (romantic)
- [ ] Node.js & Yarn installed locally
- [ ] Git configured

---

## 2. Local Setup

### Step 1: Install Dependencies
```bash
cd d:\Individual\romantic
yarn install
```

### Step 2: Test Development Server
```bash
yarn dev
# Should start at http://localhost:5173
```

### Step 3: Test Production Build
```bash
yarn build      # Creates dist/ folder
yarn preview    # Preview production build at http://localhost:4173
```

---

## 3. GitHub Pages Configuration

### Step 1: Update `package.json`
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/romantic",
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "yarn build && gh-pages -d dist"
  }
}
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Update `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/romantic/',  // Add this line
})
```

The `base` path must match the repository name.

### Step 3: Update `tsconfig.app.json` (if needed)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 4. GitHub Repository Setup

### Step 1: Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/romantic.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

**Option A: Using GitHub CLI**
```bash
gh repo edit --enable-issues=false --enable-wiki=false
```

**Option B: Manual (Web UI)**
1. Go to repository → Settings
2. Scroll to "Pages" section
3. Source: Select "GitHub Actions" (recommended)
4. Or select "Deploy from a branch" and choose `gh-pages` branch

### Step 3: Install gh-pages Package
```bash
yarn add --dev gh-pages
```

---

## 5. Deployment Methods

### Method A: Using gh-pages (Simple, Recommended)

#### Step 1: Deploy
```bash
yarn deploy
```

This command:
1. Runs `yarn build` → creates optimized `dist/` folder
2. Runs `gh-pages -d dist` → pushes to `gh-pages` branch
3. GitHub Pages serves the `dist/` folder

#### Step 2: Verify
- Wait 1-2 minutes for GitHub to process
- Visit: `https://YOUR_USERNAME.github.io/romantic`
- Check repository → Deployments for status

---

### Method B: Using GitHub Actions (Advanced, Automated)

#### Step 1: Create Workflow File
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Build
        run: yarn build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Step 2: Push to Repository
```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

#### Step 3: Monitor
- Go to repository → Actions
- Workflow will auto-run on each push
- Check status there

---

## 6. Post-Deployment Checks

### Checklist
- [ ] Site loads without 404 errors
- [ ] All CSS/images load correctly
- [ ] Links work (relative paths)
- [ ] Animations work smoothly
- [ ] Mobile responsive OK
- [ ] Console has no errors
- [ ] Performance acceptable (Lighthouse)

### Debug Checklist
```bash
# If blank page:
- Check browser console (F12)
- Verify `base` in vite.config.ts matches repo name
- Check dist/ folder exists and has index.html

# If 404 on CSS/images:
- Check paths are relative, not absolute
- vite.config.ts `base` must include trailing slash

# If slow:
- Run Lighthouse audit
- Check image sizes
- Check bundle size: yarn build --analyze
```

---

## 7. Custom Domain (Optional)

### Step 1: Add CNAME Record
If you have a custom domain (e.g., romantic.yourname.com):

1. Go to your DNS provider
2. Add CNAME record:
   ```
   Name: romantic
   Type: CNAME
   Value: YOUR_USERNAME.github.io
   ```

### Step 2: Update GitHub Pages Settings
1. Repository → Settings → Pages
2. Under "Custom domain": Enter `romantic.yourname.com`
3. Check "Enforce HTTPS"

---

## 8. Troubleshooting

### Issue: Site shows 404
**Solution:**
- Check `vite.config.ts` has `base: '/romantic/'`
- Check repository name is lowercase
- Verify `package.json` `homepage` is correct

### Issue: Styles don't load
**Solution:**
- Browser DevTools → Network tab
- Check CSS URL paths
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images broken
**Solution:**
- Use relative paths only: `../public/image.png`
- Avoid absolute paths: `/image.png`
- Check files exist in `public/` folder

### Issue: Deployment stuck
**Solution:**
```bash
# Clear gh-pages cache
rm -rf node_modules/.cache

# Rebuild and redeploy
yarn deploy

# Or manually:
git push origin --delete gh-pages  # Delete old branch
yarn deploy                         # Redeploy fresh
```

---

## 9. Updating After Deployment

### Regular Updates
```bash
# Make changes, test locally
yarn dev

# Build & deploy
yarn deploy
```

### Auto-Deploy (with GitHub Actions)
```bash
# Just push to main
git add .
git commit -m "Update: fix typo"
git push
# CI/CD pipeline runs automatically!
```

---

## 10. Performance Monitoring

### Lighthouse Audit
1. Open site in Chrome
2. F12 → Lighthouse tab
3. Run audit
4. Target: Performance > 85, Accessibility > 95

### Bundle Analysis
```bash
yarn build
# Check dist/ folder size
# Total size should be < 500KB
```

### Real User Monitoring (Optional)
```typescript
// In main.tsx, add:
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(`Page loaded in ${pageLoadTime}ms`);
});
```

---

## 11. Backup & Rollback

### Backup Before Major Update
```bash
git tag -a v1.0 -m "Deployment version 1.0"
git push origin v1.0
```

### Rollback to Previous Version
```bash
git revert HEAD~1  # Undo last commit
git push           # Push revert commit
```

---

## 12. Security Checklist

- [ ] No sensitive data in code (API keys, passwords)
- [ ] HTTPS enabled (GitHub Pages default)
- [ ] No console errors revealing file paths
- [ ] Validate user inputs (if any)
- [ ] repository set to private (if not for public)

---

## 13. Final Before Sending Link

```bash
# Final verification
yarn build                    # No errors?
yarn preview                  # Works locally (prod build)?

# Link to send:
https://YOUR_USERNAME.github.io/romantic

# Test on mobile:
- QR code scanner (generate from link)
- Or share via WhatsApp/Messenger
- Test on real device, not just DevTools

# Before sending, personalize:
- [ ] Recipient name correct
- [ ] Dates accurate
- [ ] Photos uploaded
- [ ] Letter content finalized
- [ ] All typos fixed
```

---

## 14. Support & Troubleshooting URLs

- GitHub Pages Docs: https://docs.github.com/en/pages
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html#github-pages
- gh-pages npm: https://www.npmjs.com/package/gh-pages
