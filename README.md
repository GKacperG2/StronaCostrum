# COSTRUM - Mars & AI dla pozaziemskich zastosowań 🚀

Zaawansowana strona internetowa dla misji kolonizacji Marsa - Miasto 14K do 2053 roku.

## Autorzy

- **Kacper** - komponenty interaktywne, 3D animacje, particle effects, video backgrounds, state management
- **Michał** - layout, sekcje, style, integracja obrazków i filmów, typing animations

## Stack Technologiczny

- **Next.js 15.5.4** - framework React z App Router i Turbopack
- **TypeScript 5** - typowanie statyczne
- **Tailwind CSS 4** - utility-first CSS framework
- **Framer Motion 12** - zaawansowane animacje i przejścia 3D
- **Lucide React** - piękne ikony
- **React Type Animation** - efekt pisania na maszynie
- **TSParticles** - particle effects i interactive background

## 🎬 Najnowsze Funkcje (Wersja 2.0)

### Video Backgrounds

- ✨ **Hero Section** - astronaut video background z parallax scrolling
- ✨ **Sekcja "Jak to osiągniemy"** - start rakiety jako tło

### Zaawansowane Animacje

- 🎭 **3D Card Effects** - karty reagują na ruch myszy (mouse tracking)
- 🎭 **Parallax Scrolling** - wielopoziomowe efekty głębi
- 🎭 **Typing Animation** - efekt pisania w hero section
- 🎭 **CountUp Numbers** - animowane liczniki w statystykach
- 🎭 **Particle Background** - interaktywne cząsteczki reagujące na mysz
- 🎭 **Floating Elements** - unoszące się ikony i elementy
- 🎭 **Gradient Animations** - animowane gradienty w tle
- 🎭 **Scale & Rotation** - elementy powiększają się i obracają przy hover
- 🎭 **Smooth Spring Animations** - fizyka sprężyny dla naturalnych ruchów

### Interactive Features

- 🎯 **Mouse Follower** - custom cursor śledzi mysz
- 🎯 **Audio Player** - ambient space sounds (gotowy na dźwięki kosmiczne)
- 🎯 **3D Card Tilt** - karty przechylają się za myszą
- 🎯 **Interactive Progress Bar** - auto-animowany z shimmer effect
- 🎯 **Hover Transformations** - obrazy zoom, brightness, rotate
- 🎯 **Timeline Animation** - animated timeline z color gradients
- 🎯 **Scroll-triggered Animations** - elementy animują się przy scrollowaniu

### Visual Effects

- ⚡ **Video Backgrounds** - 2 filmy jako tło sekcji
- ⚡ **Particle System** - interconnected particles
- ⚡ **Gradient Overlays** - animowane nakładki kolorów
- ⚡ **Blur Effects** - glassmorphism i backdrop-blur
- ⚡ **Glow Effects** - świecące elementy i cienie
- ⚡ **Perspective Effects** - 3D transforms i depth
- ⚡ **Custom Scrollbar** - pomarańczowo-czerwony gradient

## Struktura Projektu

```
mars-costrum/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Nawigacja z scroll progress (Kacper + Michał)
│   │   ├── AudioPlayer.tsx      # Ambient sound player (Kacper)
│   │   ├── MouseFollower.tsx    # Custom cursor (Michał)
│   │   ├── VideoBackground.tsx  # Video background component (Michał)
│   │   ├── ParticleBackground.tsx # Particle effects (Kacper)
│   │   └── CountUp.tsx          # Animated counter (Kacper + Michał)
│   ├── page.tsx                 # Główna strona (Kacper + Michał)
│   ├── layout.tsx               # Layout (Kacper)
│   └── globals.css              # Style (Kacper + Michał)
├── public/
│   ├── images/                  # 7 zdjęć Mars
│   └── videos/                  # 2 filmy (astronaut, rakieta)
├── package.json
├── README.md
└── INSTRUKCJA.md
```

## Sekcje Strony

### 1. 🎬 Hero Section (z VIDEO)

- Video background - astronaut na Marsie
- Particle effects overlay
- Typing animation dla tytułu
- Auto-animowany progress bar (0-100%)
- Parallax scrolling
- Floating icons (rakieta, gwiazdy)

### 2. 🏗️ Miasto 14K

- 3D image with hover effects
- Animated CountUp dla liczby 14000
- Slide-in animations
- Gradient boxes z icon

### 3. 🌍 Dlaczego to robimy

- 3 karty z 3D mouse tracking
- Rotating icons
- Large quote section z obrazem
- Pulsing star icon

### 4. ⏰ Dlaczego teraz

- Timeline z colorful badges (1960s, 2025, 2053)
- Animated Mars image z pulsing overlay
- Interactive hover effects
- Quote box z scale animation

### 5. 🚀 Jak to osiągniemy (z VIDEO)

- Video background - start rakiety
- Glassmorphism cards
- Rotating icons
- Image gallery z zoom effects
- Slide animations

### 6. 🎯 Długoterminowa Wizja

- 3 statystyki z CountUp i 3D transforms
- Rotating icons (users, rocket, sparkles)
- Scale on hover z color glow
- Large typography

### 7. ✨ CTA Section

- Animated gradient background
- Super interactive button
- Particle orbit animation
- Pulsing glow effects

## Instalacja i Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie wersji produkcyjnej
npm start
```

Aplikacja będzie dostępna pod adresem: [http://localhost:3000](http://localhost:3000)

## Media Assets

### Obrazy (7 zdjęć)

- Mars w kosmosie
- Futurystyczna kolonia
- Kosmonauta na Marsie
- Marsjańska kolonizacja
- Przyszłość misji (2 wersje)
- Rover i struktury

### Filmy (2 wideo)

- `_title_astronaut_202510092057.mp4` - astronaut (hero section)
- `Start_rakiety_na_202510092048.mp4` - start rakiety (sekcja "Jak to osiągniemy")

### Audio (opcjonalne)

- Ambient space sounds - można dodać plik `public/audio/space-ambient.mp3`

## Customizacja

### Kolory

Główne kolory używane w projekcie:

- Orange Primary: `#f97316`
- Red Primary: `#ef4444`
- Orange Dark: `#ea580c`
- Red Dark: `#dc2626`
- Black: `#000000`
- Gray variants dla UI

### Animacje

Wszystkie animacje w Framer Motion można modyfikować w `app/page.tsx`:

- Duration - czas trwania
- Delay - opóźnienie
- Type - typ animacji (spring, tween, etc.)
- Stiffness/Damping - dla spring animations

### Video Settings

W `VideoBackground.tsx` można kontrolować:

- Autoplay
- Loop
- Muted
- Overlay opacity

## Performance Tips

1. **Lazy Loading** - obrazy ładują się on-demand
2. **Video Optimization** - filmy są muted i optimized
3. **Particle Limits** - 80 particles max
4. **FPS Limit** - 60fps dla smooth performance
5. **Viewport Detection** - animacje tylko gdy element widoczny

## Notatki Techniczne

- Tailwind CSS v4 nowa składnia (`@import "tailwindcss"`)
- Next.js 15 z App Router i Server Components
- Framer Motion dla wszystkich animacji
- TSParticles dla particle effects
- Responsive design (mobile-first approach)
- Optymalizacja obrazów przez Next.js Image
- Video backgrounds z gradient overlays
- Custom cursor na desktop

## Browser Support

- Chrome/Edge (recommended) ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## Easter Eggs 🥚

- Progress bar auto-animuje się co 100ms
- Mouse cursor zmienia się nad interaktywními elementami
- Floating particles reagują na hover
- Karty 3D tilt za myszą
- Icons rotate 360° przy hover
- Gradient backgrounds pulsują
- Timeline badges scale przy hover
- Stats cards flip przy wejściu w viewport

## Rozwój

Projekt stworzony jako część pracy na 3 roku informatyki na Politechnice.
Demo zaawansowanych technik web development:

- Video integration
- Particle systems
- 3D CSS transforms
- Advanced Framer Motion
- TypeScript types
- Component architecture
- Performance optimization

---

**Costrum © 2025** - Przyspieszamy ewolucję ludzkości w gatunek multiplanetarny 🚀

**Wersja 2.0** - Premium Edition z Video Backgrounds & Advanced Animations
