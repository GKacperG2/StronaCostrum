<div align="center">

# 🚀 COSTRUM - Mars Colonization Website

### _Accelerating humanity's evolution into a multiplanetary species_

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff69b4?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[View Demo](#) · [Report Bug](#) · [Documentation](INSTRUKCJA.md)

---

</div>

## 📖 About The Project

This website was developed as a collaborative project with **Costrum** startup, showcasing their vision for Mars colonization and the establishment of a 14,000-person city by 2053. The project demonstrates advanced web development techniques, cutting-edge animations, and interactive user experiences.

**Created by:**

- **Kacper Gorzkiewicz** - 3rd year Computer Science student at Rzeszów University of Technology
- **Michał Rydzik** - 3rd year Computer Science student at Rzeszów University of Technology

### 🎓 Academic Context

This project was developed as part of our academic curriculum at the **Rzeszów University of Technology** (Politechnika Rzeszowska), Faculty of Computer Science, showcasing practical application of modern web technologies and advanced programming concepts.

---

## ⚖️ Copyright & Usage Rights

**© 2025 Kacper Gorzkiewicz & Michał Rydzik. All Rights Reserved.**

This project is published **exclusively for portfolio and presentation purposes**.

### Important Notice:

- ✅ **All rights to this website belong to Kacper Gorzkiewicz and Michał Rydzik**
- ❌ **No permission is granted for use, modification, or distribution of this code**
- ❌ **No permission is granted for use of any graphical elements, designs, or assets**
- ⚠️ **Any commercial or non-commercial use requires explicit written permission from the authors**

This repository serves as a demonstration of our technical skills and is part of our professional portfolio. If you wish to use any part of this project, please contact us directly.

---

## 🛠️ Technology Stack

### Core Technologies

- **Next.js 15.5.4** - React framework with App Router and Turbopack
- **React 19.1.0** - UI library with latest features
- **TypeScript 5** - Static typing for enhanced code quality
- **Tailwind CSS 4** - Utility-first CSS framework

### Animation & Interaction

- **Framer Motion 12** - Advanced animations and 3D transitions
- **React Type Animation** - Typewriter effects
- **TSParticles** - Interactive particle systems

### UI Components

- **Lucide React** - Modern icon library
- **Next.js Image** - Optimized image loading

---

## ✨ Key Features

### 🎬 Video Integration

Our website features cinematic video backgrounds that immerse visitors in the Mars colonization experience:

- **Hero Section** - Full-screen astronaut footage with parallax scrolling
- **Launch Sequence** - Dynamic rocket launch video in mission section
- Optimized autoplay with smooth loops and gradient overlays

### 🎭 Advanced Animations

#### Interactive Elements

- **3D Card Tilt Effects** - Cards respond to mouse movement with realistic physics
- **Mouse Follower** - Custom cursor with dual-circle design
- **Particle System** - 80+ interconnected particles that react to user interaction
- **Typing Animation** - Typewriter effect in hero section
- **CountUp Numbers** - Animated statistics that trigger on scroll

#### Motion Design

- **Parallax Scrolling** - Multi-layer depth effects throughout the page
- **Spring Physics** - Natural, physics-based animations
- **Floating Elements** - Icons and objects with subtle hovering motion
- **Gradient Animations** - Dynamic color transitions
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Timeline Animation** - Colorful, interactive project timeline

### 🎯 User Experience

- **Audio Player** - Ambient space sounds (ready for integration)
- **Smooth Scrolling** - Seamless navigation between sections
- **Progress Bar** - Visual scroll indicator with gradient
- **Responsive Design** - Mobile-first approach for all devices
- **Performance Optimized** - Lazy loading, FPS limiting, viewport detection

---

## 📁 Project Structure

```
mars-costrum/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation with scroll progress
│   │   ├── AudioPlayer.tsx         # Ambient sound player
│   │   ├── MouseFollower.tsx       # Custom cursor component
│   │   ├── VideoBackground.tsx     # Video background wrapper
│   │   ├── ParticleBackground.tsx  # Particle effects system
│   │   └── CountUp.tsx             # Animated counter component
│   ├── page.tsx                    # Main landing page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── public/
│   ├── images/                     # Mars imagery (7 photos)
│   ├── videos/                     # Background videos (2 files)
│   └── audio/                      # Sound effects (optional)
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── README.md
└── INSTRUKCJA.md                   # Setup instructions (Polish)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GKacperG2/StronaCostrum.git
   cd mars-costrum
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📄 Page Sections

### 1. 🎬 Hero Section

- Cinematic video background featuring astronaut on Mars
- Interactive particle overlay system
- Typewriter animation for main headline
- Auto-animated progress bar (0-100%)
- Parallax scrolling effects
- Floating icons with rotation animations

### 2. 🏗️ City 14K

- Large-scale vision presentation
- Animated counter displaying 14,000 inhabitants goal
- 3D image with hover zoom effects
- Gradient-bordered information cards
- Slide-in animations on scroll

### 3. 🌍 Why We're Doing This

- Three interactive cards with 3D mouse tracking
- Rotating icon animations
- Large inspirational quote section
- Pulsing star icon effects

### 4. ⏰ Why Now

- Interactive timeline (1960s → 2025 → 2053)
- Colorful era badges with gradients
- Animated Mars imagery with pulsing overlay
- Scale animations on hover

### 5. 🚀 How We'll Achieve It

- Rocket launch video background
- Glassmorphism design cards
- Rotating mission icons
- Image gallery with zoom effects
- Slide animations for content

### 6. 🎯 Long-term Vision

- Three key statistics with CountUp animations
- 3D transform effects
- Icon rotation on hover
- Color glow effects
- Large, impactful typography

### 7. ✨ Call-to-Action

- Animated gradient background
- Interactive button with hover effects
- Particle orbit animation
- Pulsing glow effects

---

## 🎨 Design System

### Color Palette

- **Primary Orange**: `#f97316`
- **Primary Red**: `#ef4444`
- **Dark Orange**: `#ea580c`
- **Dark Red**: `#dc2626`
- **Black**: `#000000`
- **Gray Scale**: Multiple shades for UI elements

### Animation Philosophy

All animations are built with Framer Motion and follow these principles:

- **Duration**: Carefully tuned for natural feel (typically 0.3s - 0.8s)
- **Easing**: Spring physics for organic motion
- **Performance**: GPU-accelerated transforms only
- **Accessibility**: Respects prefers-reduced-motion settings

### Typography

- **Headers**: Bold, impactful sizing (up to 7xl)
- **Body**: Clean, readable 16px base
- **Gradients**: Text gradients for emphasis

---

## ⚡ Performance Features

- **Lazy Loading** - Images load on-demand
- **Video Optimization** - Compressed, muted, autoplay videos
- **Particle Limits** - Maximum 80 particles for smooth performance
- **FPS Limiting** - Capped at 60fps
- **Viewport Detection** - Animations only trigger when elements are visible
- **Next.js Image Optimization** - Automatic image compression and sizing
- **Code Splitting** - Automatic route-based code splitting

---

## 🌐 Browser Support

| Browser         | Support         |
| --------------- | --------------- |
| Chrome/Edge     | ✅ Recommended  |
| Firefox         | ✅ Full support |
| Safari          | ✅ Full support |
| Mobile Browsers | ✅ Optimized    |

---

## 📱 Media Assets

### Images (7 Files)

- Mars in space
- Futuristic colony renders
- Astronaut on Mars surface
- Mars colonization concepts
- Future mission visualizations
- Rover and infrastructure

### Videos (2 Files)

- `_title_astronaut_202510092057.mp4` - Hero section background
- `Start_rakiety_na_202510092048.mp4` - Launch sequence section

### Audio (Optional)

- Space ambient sounds - Ready for `public/audio/space-ambient.mp3`

---

## 🛠️ Customization Guide

### Modifying Colors

Edit color values in `app/globals.css` or directly in Tailwind classes.

### Adjusting Animations

All Framer Motion animations can be customized in `app/page.tsx`:

```tsx
// Example: Modify spring animation
const spring = {
  stiffness: 100, // Increase for snappier motion
  damping: 30, // Increase to reduce bounce
  restDelta: 0.001,
};
```

### Video Settings

Modify video behavior in `VideoBackground.tsx`:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  // Add controls, change opacity overlay, etc.
/>
```

---

## 👥 Team & Contributions

### Development Team

**Kacper Gorzkiewicz**

- Interactive components architecture
- 3D animations and transforms
- Particle effects system
- Video background integration
- State management
- Performance optimization

**Michał Rydzik**

- Page layout and structure
- Section design and styling
- Image and video integration
- Typing animations
- Responsive design
- Content organization

### Collaboration Model

This project was built using pair programming techniques and collaborative development practices, with both developers contributing to all aspects while focusing on their core strengths.

---

## 📚 Learning Resources

This project demonstrates practical implementation of:

- Modern React patterns (hooks, context, refs)
- TypeScript for type safety
- Advanced CSS with Tailwind
- Animation libraries (Framer Motion)
- Next.js App Router
- Performance optimization techniques
- Responsive design principles
- Video integration in web apps

---

## 🐛 Known Issues & Future Improvements

### Current Limitations

- Audio player requires manual audio file addition
- Some animations may lag on low-end devices
- Video files are relatively large (optimization ongoing)

### Planned Enhancements

- [ ] Add more language options (EN/PL toggle)
- [ ] Implement contact form
- [ ] Add blog section for mission updates
- [ ] Enhanced mobile gesture interactions
- [ ] Progressive Web App (PWA) features

---

## 📞 Contact & Support

**Authors:**

- **Kacper Gorzkiewicz** - [GitHub Profile](https://github.com/GKacperG2)
- **Michał Rydzik** - Computer Science Student

**Institution:**

- Rzeszów University of Technology (Politechnika Rzeszowska)
- Faculty of Computer Science
- 3rd Year, 2024/2025

For any inquiries regarding this project, collaboration opportunities, or permission requests, please reach out through our GitHub profiles.

---

## 🎓 Academic Information

**Course**: Advanced Web Development
**Year**: 2024/2025
**Semester**: Winter
**Project Type**: Collaborative startup website development

This project showcases the practical application of theoretical knowledge gained during our Computer Science studies, including:

- Software engineering principles
- User interface design
- Client-server architecture
- Performance optimization
- Version control with Git
- Agile development methodology

---

## 🙏 Acknowledgments

- **Costrum Startup** - For the opportunity to work on this exciting project
- **Rzeszów University of Technology** - For providing the educational foundation
- **Next.js Team** - For the excellent framework and documentation
- **Framer** - For the powerful animation library
- **Vercel** - For hosting and deployment platform

---

## 📜 License & Legal

**Copyright © 2025 Kacper Gorzkiewicz & Michał Rydzik**

### License Terms

This project is **proprietary** and **NOT open source**. It is shared publicly for:

- ✅ Portfolio demonstration purposes
- ✅ Educational reference
- ✅ Technical showcase

### Restrictions

- ❌ You may NOT use this code in any commercial projects
- ❌ You may NOT use this code in any personal projects
- ❌ You may NOT modify or distribute this code
- ❌ You may NOT use any graphical assets, designs, or branding
- ❌ You may NOT claim this work as your own

### Permissions

All rights are reserved by the original authors. Any use of this project, its code, designs, or assets requires **explicit written permission** from both Kacper Gorzkiewicz and Michał Rydzik.

For permission requests, please contact us via GitHub.

---

<div align="center">

### 🚀 Built with passion for Mars exploration

**COSTRUM** © 2025 - _Przyspieszamy ewolucję ludzkości w gatunek multiplanetarny_

Made with ❤️ by Computer Science students at Rzeszów University of Technology

[⬆ Back to Top](#-costrum---mars-colonization-website)

</div>
