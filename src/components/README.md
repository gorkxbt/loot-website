# Component Architecture

This document explains the organized component structure of the LootAI website to help developers understand and modify the codebase efficiently.

## Directory Structure

```
src/components/
├── layout/                  # Layout-level components
│   ├── MainNavigation.tsx  # Site navigation header
│   ├── MainFooter.tsx      # Site footer
│   ├── PageLayout.tsx      # Reusable page wrapper with consistent structure
│   └── index.ts            # Barrel exports
├── ui/                     # Reusable UI components
│   ├── Button.tsx          # Configurable button component
│   ├── Card.tsx            # Flexible card component with variants
│   ├── HeroSection.tsx     # Page hero section wrapper
│   ├── StatsCard.tsx       # Specialized component for displaying statistics
│   ├── SplineAnimation.tsx # 3D animation component wrapper
│   └── index.ts            # Barrel exports
└── sections/               # Page-specific section components
    ├── BackgroundElements.tsx       # Animated background elements for landing
    ├── LandingHero.tsx             # Home page hero section
    ├── learn/                      # Learn page sections
    │   ├── HeroIntroduction.tsx    # Two-column intro section
    │   ├── HowItWorks.tsx          # Process steps with alternating layout
    │   └── TargetAudience.tsx      # Asymmetrical audience cards
    ├── loot/                       # $LOOT token page sections
    │   ├── TokenStats.tsx          # Hero statistics grid
    │   ├── HowToEarn.tsx           # Earning methods with large cards
    │   ├── TokenUtility.tsx        # Token utility features
    │   └── BlockchainInfo.tsx      # Solana & tokenomics info
    ├── lootai/                     # LootAI assistant page sections
    │   ├── ChatInterface.tsx       # Interactive chat component
    │   └── AIFeatures.tsx          # AI feature showcase
    ├── app/                        # App download page sections
    │   ├── PhoneMockup.tsx         # Mobile app mockup
    │   ├── DownloadButtons.tsx     # App store download buttons
    │   └── ComingSoonNotice.tsx    # Waitlist signup section
    └── index.ts                    # Barrel exports
```

## Component Types

### 1. Layout Components (`layout/`)
Components that provide the overall structure and navigation of the site.

- **PageLayout**: Reusable wrapper that provides consistent page structure, background elements, and optional title/subtitle rendering
- **MainNavigation**: Site header with logo, navigation links, and responsive mobile menu  
- **MainFooter**: Site footer with copyright, social links, and app store buttons

### 2. UI Components (`ui/`)
Reusable, configurable components used throughout the site.

- **Button**: Flexible button with multiple variants (primary, secondary, outline) and sizes
- **Card**: Versatile card component with different styles, hover effects, and positioning options
- **StatsCard**: Specialized card for displaying key metrics and statistics
- **HeroSection**: Wrapper for page titles, subtitles, and descriptions
- **SplineAnimation**: Client-side 3D animation component

### 3. Section Components (`sections/`)
Page-specific components that combine UI elements into complete sections.

Each page has its own subdirectory containing focused, single-responsibility components that handle specific content areas.

## Usage Patterns

### Importing Components

Use barrel exports for cleaner imports:

```tsx
// Instead of multiple imports
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Use barrel export
import { Button, Card } from '@/components/ui';
```

### Page Structure

Most pages follow this pattern:

```tsx
import { PageLayout } from '@/components/layout';
import { SectionOne, SectionTwo } from '@/components/sections/pagename';

export default function PageName() {
  return (
    <PageLayout title="Page Title" subtitle="Page subtitle">
      <SectionOne />
      <SectionTwo />
    </PageLayout>
  );
}
```

### Component Configuration

Components are designed to be highly configurable through props:

```tsx
// Button variants
<Button variant="primary" size="large">Primary Action</Button>
<Button variant="outline" size="small">Secondary Action</Button>

// Card variants with positioning
<Card variant="green" translate="up" className="lg:col-span-2">
  Content here
</Card>

// Stats with different styling
<StatsCard 
  value="1B" 
  label="Total Supply" 
  variant="green" 
  size="large" 
/>
```

## Design System Integration

### Color Variants
Components support the site's color system:
- `green`: Primary green (#b2e24f)
- `purple`: Secondary purple (#8f7cd2)  
- `gradient`: Green gradient effects
- `yellow`: Used for shadows and hover effects

### Responsive Design
All components are built with mobile-first responsive design using Tailwind CSS breakpoints.

### Animation & Interactions
Components include subtle animations and hover effects that maintain consistency across the site.

## Best Practices

### 1. Single Responsibility
Each component should have one clear purpose and be focused on that functionality.

### 2. Prop-Driven Flexibility
Components should be configurable through props rather than having multiple similar components.

### 3. Consistent Naming
- Use descriptive names that indicate the component's purpose
- Layout components: prefix with "Main" (MainNavigation, MainFooter)
- Page components: suffix with "Page" (HomePage, LearnPage)
- Section components: describe their content (HeroIntroduction, TokenStats)

### 4. Barrel Exports
Use index.ts files to create clean import paths and better developer experience.

### 5. TypeScript Interfaces
All components use proper TypeScript interfaces for props to ensure type safety and better IDE support.

## Making Changes

### Adding New Components
1. Create the component in the appropriate directory
2. Add it to the relevant index.ts barrel export
3. Follow the existing patterns for props and styling

### Modifying Existing Components
1. Check if other components depend on the changes
2. Update TypeScript interfaces if props change
3. Test across all pages that use the component

### Page Modifications
Pages are now composed of smaller, focused components. To modify a page:
1. Identify which section component needs changes
2. Modify the specific section component
3. The page will automatically reflect the changes

This architecture makes the codebase more maintainable, testable, and allows for better code reuse across the application. 