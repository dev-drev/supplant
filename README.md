# SYNTHWAVE Band Website

A modern, responsive single-page website for the SYNTHWAVE electronic music band. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎵 **Interactive Playlist** - Clickable music player with track selection
- 🎨 **Cyberpunk Design** - Neon gradients, glass morphism, and animated elements
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS
- 🎭 **Band Information** - Member profiles, band description, and contact details
- ✨ **Smooth Animations** - Floating elements, glowing effects, and hover animations

## Design Elements

- **Color Scheme**: Purple, pink, and cyan gradients with dark backgrounds
- **Typography**: Modern sans-serif fonts with gradient text effects
- **Layout**: Two-column responsive grid (band info + playlist)
- **Interactions**: Hover effects, clickable playlist, smooth scrolling
- **Visual Effects**: Glass morphism, neon glows, floating animations

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Band Information
Edit the following in `src/app/page.tsx`:
- Band name and description
- Member names and roles
- Contact information
- Social media links

### Playlist
Update the `playlist` array in `src/app/page.tsx`:
```typescript
const playlist = [
  { title: "Your Song Title", duration: "3:45", year: "2024" },
  // Add more tracks...
];
```

### Styling
Modify `src/app/globals.css` for:
- Color schemes
- Animations
- Custom fonts
- Additional effects

### Images
Replace placeholder images in `public/images/`:
- `band-hero.svg` - Main hero image
- Add member photos
- Album artwork

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Animations**: CSS keyframes and Tailwind utilities

## Deployment

Deploy easily on Vercel:
```bash
npm run build
```

Or use the Vercel CLI:
```bash
npx vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own band or music project!
