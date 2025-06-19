# Deployment Instructions

## Quick Start: Deploy to GitHub

### 1. Create GitHub Repository

```bash
# On GitHub.com, create a new repository named "lootai-website"
# Don't initialize with README, .gitignore, or license (we already have these)
```

### 2. Push to GitHub

```bash
# Add remote origin (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/lootai-website.git

# Push to GitHub
git push -u origin main

# Also push development branch
git push -u origin development
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy when you push to `main`

### 4. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/lootai-website/
```

## Alternative Deployment Options

### Vercel (Recommended for Production)

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Deploy with default settings
5. Get instant domain: `your-project.vercel.app`

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the built `out/` folder, OR
3. Connect GitHub repository for automatic deploys

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`

## Development Workflow

```bash
# Work on development branch
git checkout development

# Make changes, then commit
git add .
git commit -m "Your changes"
git push origin development

# When ready to deploy, merge to main
git checkout main
git merge development
git push origin main
```

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## Environment Setup

The project is configured for:
- ✅ Static export (GitHub Pages compatible)
- ✅ Image optimization disabled (for static hosting)
- ✅ Trailing slashes enabled
- ✅ GitHub Actions workflow included

## Troubleshooting

### Build Errors
- Ensure Node.js 18+ is installed
- Run `npm ci` instead of `npm install` for clean install
- Check TypeScript errors with `npm run lint`

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions tab for build status
- Ensure `main` branch has the latest commits

### Local Development
- Make sure you're in the `loot-website` directory
- Run `npm install` before first `npm run dev`
- Check console for any JavaScript errors 