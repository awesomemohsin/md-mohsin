# Premium Portfolio Website

A stunning, fully-animated premium portfolio website built with modern web technologies. Perfect for developers, designers, and digital professionals looking to showcase their work with elegance and sophistication.

## Features

- **Luxury Dark Theme** - Electric blue/purple gradient accents on deep black background
- **Smooth Scrolling** - Lenis smooth scroll library for buttery-smooth navigation
- **Advanced Animations** - Framer Motion for component animations and page transitions
- **Responsive Design** - Mobile-first approach with seamless responsive scaling
- **SEO Optimized** - Server-side rendering, metadata, and semantic HTML
- **Performance Optimized** - Next.js 15 with SWC minification and image optimization
- **Interactive Components** - Animated cards, buttons, timeline, and gradient text
- **Multiple Pages** - Home, About (with timeline), Projects (with filtering), and Contact pages

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Framer Motion, GSAP, Lenis
- **Language**: TypeScript
- **Fonts**: Geist (sans-serif) and Geist Mono

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles and design tokens
│   ├── about/
│   │   └── page.tsx         # About page with timeline
│   ├── projects/
│   │   └── page.tsx         # Projects page with filtering
│   └── contact/
│       └── page.tsx         # Contact page with form
├── components/
│   ├── navbar.tsx           # Navigation bar
│   ├── hero.tsx             # Hero section
│   ├── animated-button.tsx  # Animated button component
│   ├── animated-card.tsx    # Animated card component
│   ├── gradient-text.tsx    # Gradient text component
│   ├── mesh-gradient-bg.tsx # Animated mesh background
│   └── smooth-scroll.tsx    # Lenis smooth scroll
├── hooks/
│   └── use-gsap-animation.ts # Custom GSAP animation hooks
├── lib/
│   └── metadata.ts          # SEO metadata utilities
└── public/                  # Static assets
```

## Design System

### Colors
- **Primary**: Electric Blue (#55AAFF) - oklch(0.55 0.25 280)
- **Secondary**: Deep Purple (#6B2AC2) - oklch(0.4 0.2 300)
- **Accent**: Bright Cyan (#00C8FF) - oklch(0.65 0.2 200)
- **Background**: Deep Black (#0F0F0F) - oklch(0.06 0 0)

### Typography
- **Headings**: Geist (sans-serif)
- **Body**: Geist (sans-serif)
- **Monospace**: Geist Mono

### Spacing
Standard Tailwind spacing scale with consistent gap-based layouts

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the portfolio.

### Environment Setup

1. Update `lib/metadata.ts` with your domain and social links
2. Customize portfolio content in each page file
3. Replace profile image and project images in `/public`

## Customization

### Colors
Edit the design tokens in `app/globals.css`:
```css
:root {
  --primary: oklch(0.55 0.25 280);
  --accent: oklch(0.65 0.2 200);
  /* ... more tokens */
}
```

### Content
- **Home**: Edit `app/page.tsx` sections
- **About**: Modify timeline and achievements in `app/about/page.tsx`
- **Projects**: Update project data in `app/projects/page.tsx`
- **Contact**: Configure contact info in `app/contact/page.tsx`

### Animations
- Adjust Framer Motion variants in component files
- Modify GSAP settings in `hooks/use-gsap-animation.ts`
- Customize Lenis scroll behavior in `components/smooth-scroll.tsx`

## Performance Tips

- Images are optimized with Next.js Image component
- CSS animations use hardware acceleration
- Code splitting happens automatically
- Static assets are cached by default

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## License

MIT - Feel free to use this template for your portfolio

## Support

For questions or issues, please create an issue in the repository.
