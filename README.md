# LootAI Website

A modern, responsive website for LootAI built with Next.js, React, and TypeScript.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Multiple Pages**: Homepage, Learn, $LOOT, LootAI, and App pages
- **Interactive Elements**: Spline 3D animations and interactive components
- **Mobile Screenshots**: iOS app mockups for demonstration
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for styling

## 📁 Project Structure

```
loot-website/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── app/               # App page
│   │   ├── learn/             # Learn page
│   │   ├── loot/              # $LOOT page
│   │   ├── lootai/            # LootAI page
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page-specific sections
│   │   └── ui/                # UI components
│   └── styles/                # Global styles
├── screenshots/               # iOS app mockup screenshots
├── public/                    # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd loot-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### GitHub Pages

This project is ready for GitHub Pages deployment:

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source: "GitHub Actions"
4. The site will be deployed automatically

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<repository-url>)

1. Connect your GitHub repository to Vercel
2. Deploy with default settings
3. Your site will be live with automatic deployments on push

### Other Platforms

The project works with any static hosting platform:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🧩 Components

### UI Components
- `Button` - Configurable buttons with multiple variants
- `Card` - Flexible cards with hover effects
- `HeroSection` - Reusable page headers
- `StatsCard` - Statistics display cards

### Layout Components
- `PageLayout` - Consistent page wrapper
- `MainNavigation` - Site navigation
- `MainFooter` - Site footer

### Section Components
Organized by page for easy maintenance and updates.

## 📱 Screenshots

The `screenshots/` directory contains iOS app mockups that demonstrate the LootAI mobile experience. These are HTML files that can be rendered as images for marketing materials.

## 🎨 Design System

- **Colors**: Custom brand colors with gradients
- **Typography**: Quicksand font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable, composable components

## 📄 License

This project is proprietary software for LootAI.

## 🤝 Contributing

This is a private project. For internal development:

1. Create feature branches from `main`
2. Make changes with clear commit messages
3. Submit pull requests for review
4. Ensure all checks pass before merging

## 🔧 Technologies Used

- **Framework**: Next.js 15.3.4
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Spline
- **Development**: ESLint, TypeScript compiler

## 📞 Support

For questions or issues, contact the development team. 