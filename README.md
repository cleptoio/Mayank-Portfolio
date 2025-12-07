# Mayank Khanvilkar - Portfolio

A modern, interactive portfolio website showcasing expertise in AI automation, workflow engineering, and data analytics. Built with cutting-edge web technologies and featuring advanced animations, interactive maps, and a sophisticated design system.

**Live Site:** [mayank.clepto.io](https://mayank.clepto.io)

---

## Tech Stack

### Frontend Framework
- **Next.js 15.5.7** - React framework with App Router and Server-Side Rendering
- **React 18.3.1** - UI library with React Server Components
- **TypeScript 5** - Type-safe JavaScript for robust development

### Styling & Design System
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
  - Built on Radix UI primitives
  - Customizable with Tailwind CSS
  - Components: Button, Card, Badge, Dialog
- **Custom Brand Theme**:
  - Clepto Red: `#FF3131`
  - Clepto Cyan: `#0BD7D4`
  - Clepto Navy: `#0E172F`
- **PostCSS** - CSS processing with autoprefixer

### UI Components & Icons
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-slot` - Component composition
- **Lucide React 0.554.0** - Primary icon library (600+ icons)
- **React Icons 5.5.0** - Additional brand and social icons
- **Simple Icons 15.22.0** - Brand logos

### Animation & Interactivity
- **Framer Motion 12.23.24** - Production-ready animation library
  - Page transitions
  - Scroll-triggered animations
  - Hover effects and micro-interactions
  - Parallax effects
- **Custom Animations**:
  - `spin-slow` - Rotating border rings
  - `float` - Gentle floating motion
  - `glow` - Pulsing glow effects
  - `gradient-shift` - Animated gradients
  - `slide-in-up` / `fade-in` - Entry animations

### Interactive Features
- **React Simple Maps 3.0.0** - Interactive European map
  - World Atlas TopoJSON data
  - Animated zoom from global to Europe
  - Dublin highlighted with 17 European cities
  - Pulsing markers and connection lines
- **Custom Particle System** - Neuron network background
  - 45 particles (20 on mobile) with dynamic connections
  - Mouse/touch interaction (particles respond to cursor)
  - Canvas-based rendering with performance optimization
  - Responsive to viewport changes

### Theme System
- **next-themes 0.4.6** - Dark/light mode support
  - Dark mode by default
  - System preference detection
  - CSS variable-based theming
  - Smooth transitions

### Utilities
- **class-variance-authority** - Component variant styling
- **clsx** - Conditional class names
- **tailwind-merge** - Intelligent Tailwind class merging
- **mini-svg-data-uri** - SVG optimization

### Development Tools
- **ESLint 8.57.1** - Code linting with Next.js config
- **TypeScript** - Full type coverage
- **npm** - Package management

---

## Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage (main portfolio)
│   ├── layout.tsx               # Root layout with fonts & theme
│   └── globals.css              # Global styles & CSS variables
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   ├── Hero.tsx                 # Hero section with profile photo
│   ├── WorldMap.tsx             # Interactive European map
│   ├── NeuronBackground.tsx     # Animated particle background
│   ├── ProjectsGrid.tsx         # Case studies grid
│   ├── ProjectCard.tsx          # Individual project card
│   ├── ExperienceTimeline.tsx   # Work experience timeline
│   ├── SkillsGrid.tsx          # Skills categorized display
│   ├── CTASection.tsx          # Call-to-action section
│   ├── SocialLinks.tsx         # Social media links
│   ├── ThemeToggle.tsx         # Dark/light mode toggle
│   └── theme-provider.tsx      # Theme context provider
│
├── lib/                         # Utilities & data
│   ├── data.ts                 # Portfolio content (all data)
│   └── utils.ts                # cn() utility for class merging
│
├── public/                      # Static assets
│   ├── images/
│   │   └── Mayank Professional.jpg
│   └── *.svg                   # Icon files
│
└── Configuration files
    ├── next.config.mjs         # Next.js configuration
    ├── tailwind.config.ts      # Tailwind CSS configuration
    ├── postcss.config.mjs      # PostCSS configuration
    ├── tsconfig.json           # TypeScript configuration
    ├── components.json         # shadcn/ui configuration
    └── .eslintrc.json         # ESLint configuration
```

---

## Key Features

### 1. Interactive European Map
- Built with `react-simple-maps`
- Displays 17 European cities with animated markers
- Dublin highlighted as primary location
- Animated connection lines radiating from Dublin
- Smooth zoom animation from world view to Europe
- Responsive design (fewer cities on mobile)

### 2. Neuron Network Background
- Custom canvas-based particle system
- Interactive particles that respond to mouse/touch
- Dynamic connections between nearby particles
- Optimized performance with device pixel ratio capping
- Reduced particle count on mobile devices

### 3. Professional Profile Photo
- Circular format with rotating border ring
- Cyan glow effect matching brand colors
- Hover scale animation with spring physics
- Strategically positioned on the right side

### 4. Animated Hero Section
- Large typography with smooth fade-in
- Stats display (7+ years, 100+ workflows)
- Availability badge with pulsing indicator
- Social links with hover effects

### 5. Case Studies Showcase
- 6 detailed project cards with metrics
- Categories: AI Automation, Data Engineering, Compliance
- Gradient backgrounds and custom icons
- Modal dialogs for full project details

### 6. Timeline Experience Section
- Visual timeline of work history
- 3 positions with detailed highlights
- Company logos and period indicators
- Color-coded by company branding

### 7. Skills Grid
- 6 skill categories with 70+ technologies
- Icons for each category
- Organized by expertise area
- Badge-style tags for each skill

### 8. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px max)
- Optimized layouts for all screen sizes
- Touch-friendly interactions

---

## Architecture

### Data Management
- **No Backend/Database** - Static site with SSR
- All content stored in `/lib/data.ts` as TypeScript constants
- Content includes:
  - Personal information
  - 6 case studies
  - 3 work experiences
  - 2 education entries
  - 7 certifications
  - 70+ skills across 6 categories
  - Languages and achievements

### Rendering Strategy
- **Server-Side Rendering (SSR)** - Fast initial page load
- **React Server Components (RSC)** - Optimized performance
- **Static Generation** - Pre-rendered at build time

### Font Optimization
- Uses `next/font` for automatic font optimization
- Google Fonts: Inter (sans-serif) and JetBrains Mono (monospace)
- Self-hosted fonts with optimal loading

### SEO & Metadata
- Configured metadata in root layout
- Open Graph tags for social sharing
- Semantic HTML structure
- Accessible ARIA labels

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/cleptoio/Mayank-Portfolio.git

# Navigate to project directory
cd Mayank-Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

The page auto-updates as you edit files.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## Deployment

This portfolio is optimized for deployment on **Vercel**.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cleptoio/Mayank-Portfolio)

Or manually:

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Vercel will detect Next.js and configure automatically
4. Deploy!

**Environment Variables:** None required (static content)

**Custom Domain:** Configured at `mayank.clepto.io`

---

## Customization

### Update Portfolio Content

Edit `/lib/data.ts` to update:
- Personal information (name, bio, location)
- Case studies and projects
- Work experience
- Education
- Skills and certifications
- Social links

### Change Brand Colors

Edit `/app/globals.css` CSS variables:

```css
:root {
  --clepto-red: #FF3131;
  --clepto-cyan: #0BD7D4;
  --clepto-navy: #0E172F;
}
```

### Add Components

Use shadcn/ui to add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Modify Map Cities

Edit the `EUROPEAN_CITIES` array in `/components/WorldMap.tsx`

---

## Performance Optimizations

- **Image Optimization**: Next.js Image component with automatic WebP
- **Font Optimization**: Self-hosted fonts with `next/font`
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code automatically removed
- **Minification**: CSS and JS minified in production
- **Canvas Optimization**: Particle system with capped pixel ratio
- **Responsive Assets**: Reduced complexity on mobile devices

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Dependencies

### Production Dependencies (27 packages)

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.5.7 | React framework with SSR |
| react | 18.3.1 | UI library |
| react-dom | 18.3.1 | React renderer |
| framer-motion | 12.23.24 | Animation library |
| react-simple-maps | 3.0.0 | SVG mapping library |
| lucide-react | 0.554.0 | Icon library |
| tailwindcss | 3.4.18 | CSS framework |
| next-themes | 0.4.6 | Theme management |
| @radix-ui/react-dialog | 1.1.15 | Modal dialogs |
| class-variance-authority | 0.7.0 | Component variants |
| tailwind-merge | 3.4.0 | Class merging |
| clsx | 2.1.1 | Conditional classes |

[See package.json for complete list]

---

## Project Stats

- **Components**: 15+ custom React components
- **Lines of Code**: ~3,500 (excluding dependencies)
- **Page Load Time**: < 2s (First Contentful Paint)
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: Optimized with code splitting
- **Build Time**: ~30 seconds

---

## License

This project is private and proprietary to Mayank Khanvilkar / Clepto.io.

---

## Contact

**Mayank Khanvilkar**
- Email: [mayank.khanvilkar@clepto.io](mailto:mayank.khanvilkar@clepto.io)
- LinkedIn: [linkedin.com/in/mayankkhanvilkar](https://www.linkedin.com/in/mayankkhanvilkar)
- Website: [mayank.clepto.io](https://mayank.clepto.io)
- Company: [clepto.io](https://www.clepto.io)

---

## Acknowledgments

- **Next.js Team** - Amazing framework
- **Vercel** - Seamless deployment platform
- **shadcn** - Beautiful component system
- **Tailwind Labs** - Excellent CSS framework
- **Framer** - Powerful animation library

---

Built with ❤️ by Mayank Khanvilkar | © 2024 Clepto.io
