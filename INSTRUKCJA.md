# 🚀 Instrukcja Uruchomienia - COSTRUM 2.0 Premium

## Szybki Start

1. **Otwórz terminal w folderze projektu:**

   ```bash
   cd C:\Users\Kacper\Desktop\StronaCostrum\mars-costrum
   ```

2. **Zainstaluj zależności (jeśli jeszcze nie):**

   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski:**

   ```bash
   npm run dev
   ```

4. **Otwórz przeglądarkę:**
   - Przejdź do: [http://localhost:3000](http://localhost:3000)
   - Najlepiej w Chrome/Edge dla pełnej kompatybilności

## 🎬 Co Nowego w Wersji 2.0

### Video Backgrounds

- ✅ **Hero Section** - pełnoekranowe video astronauty na Marsie
- ✅ **Sekcja rakiety** - dynamiczne video startu rakiety

### Zaawansowane Animacje & Efekty

- ✅ **3D Card Tilt** - karty przechylają się za kursorem myszy
- ✅ **Particle System** - 80+ interaktywnych cząsteczek połączonych liniami
- ✅ **Mouse Follower** - custom cursor z zewnętrznym i wewnętrznym kołem
- ✅ **Audio Player** - button do włączania ambient sounds (ready dla pliku audio)
- ✅ **Typing Animation** - efekt maszyny do pisania w hero
- ✅ **CountUp Numbers** - animowane liczniki reagujące na scroll
- ✅ **Parallax Scrolling** - wielopoziomowe efekty głębi
- ✅ **Floating Icons** - unoszące się elementy z rotacją
- ✅ **Gradient Animations** - animowane tła i overlays
- ✅ **Timeline Animation** - kolorowa oś czasu z badges
- ✅ **Spring Physics** - naturalne animacje oparte na fizyce
- ✅ **Glassmorphism** - efekty blur i przezroczystości

## 📋 Pełna Lista Funkcji

### Nawigacja

- ✨ Sticky navbar z blur effect
- ✨ Scroll progress bar na górze (gradient)
- ✨ Smooth scroll do sekcji
- ✨ Logo z hover animation

### Hero Section

- 🎬 **Video background** - astronaut loop
- ⚡ **Particle effects** - interaktywne cząsteczki
- 💫 **Typing animation** - "Gra Długoterminowa..." effect
- 📊 **Progress bar** - auto-animowany 0-100% z shimmer
- 🎭 **Parallax scroll** - hero znika przy scrollowaniu
- ⭐ **Floating icons** - rakieta i gwiazdy unoszące się
- 👇 **Scroll indicator** - pulsujący chevron

### Sekcja: Miasto 14K

- 🔢 **CountUp animation** - licznik od 0 do 14000
- 🖼️ **3D image hover** - obrazek z zoom i glow
- 📦 **Slide-in boxes** - karty z iconami przesuwają się
- 🎨 **Gradient borders** - animowane obramowania

### Sekcja: Dlaczego to robimy

- 🃏 **3D Mouse Tracking Cards** - karty tilają się za myszą
- 🔄 **Rotating icons** - ikony obracają się 360° przy hover
- 📸 **Large quote** - wielki obrazek z quote overlay
- ⭐ **Pulsing star** - animowana gwiazdka

### Sekcja: Dlaczego teraz

- 📅 **Timeline** - oś czasu z 3 etapami (1960s, 2025, 2053)
- 🎨 **Color badges** - kolorowe badges z gradientami
- 🖼️ **Pulsing overlay** - Mars image z pulsującym overlayem
- 💬 **Quote box** - scale animation przy hover

### Sekcja: Jak to osiągniemy

- 🎬 **Video background** - start rakiety
- 🪟 **Glassmorphism cards** - przezroczyste karty z blur
- 🔄 **Rotating icons** - ikony obracają się przy hover
- 🖼️ **Image gallery** - 3 obrazy z zoom effects
- ➡️ **Slide animations** - elementy przesuwają się przy hover

### Sekcja: Wizja

- 🔢 **3 Stats Cards** - CountUp + 3D transforms
- 🎲 **3D Flip** - karty flip przy wejściu w viewport
- ✨ **Glow on hover** - świecące obramowanie
- 🔄 **Rotating icons** - users, rocket, sparkles

### CTA Section

- 🌈 **Animated gradient** - tło zmienia kolory
- 🔘 **Super button** - animowany button z particles
- ⭕ **Particle orbit** - 20 cząsteczek orbitujących
- 💫 **Shimmer effect** - światło przesuwa się przez button

### Globalne Efekty

- 🖱️ **Mouse Follower** - custom cursor (2 koła)
- 🔊 **Audio Player** - floating button w prawym dolnym rogu
- ⭐ **Stars Background** - animowane gwiazdki w tle
- 📜 **Custom Scrollbar** - gradient pomarańczowo-czerwony

## 🎮 Jak Korzystać

### Interactive Elements

1. **Hover over cards** - karty przechylają się 3D
2. **Move mouse** - custom cursor śledzi ruch
3. **Scroll down** - animacje uruchamiają się automatycznie
4. **Hover over images** - obrazy powiększają się i świecą
5. **Click navigation** - smooth scroll do sekcji
6. **Hover over buttons** - scale i glow effects

### Audio (Opcjonalne)

- Kliknij button w prawym dolnym rogu
- Włącza ambient space sounds
- Można dodać plik: `public/audio/space-ambient.mp4`
- Recommended: space ambient, Interstellar-style music

## 🎨 Tips dla Najlepszego Doświadczenia

1. **Używaj Chrome/Edge** - najlepsza kompatybilność
2. **Pełny ekran** - max immersion
3. **Wolno scrolluj** - zobacz wszystkie animacje
4. **Ruszaj myszą** - particle effects reagują
5. **Hover everywhere** - każdy element ma efekty
6. **Włącz dźwięk** - ambient atmosphere
7. **Desktop recommended** - pełne 3D effects

## 🔧 Troubleshooting

### Video nie gra

- Sprawdź czy pliki są w `public/videos/`
- Niektóre przeglądarki blokują autoplay - kliknij na stronie
- Safari może wymagać interakcji użytkownika

### Particles nie działają

- Wyczyść cache przeglądarki (Ctrl+Shift+Del)
- Sprawdź czy tsparticles się zainstalował (`npm install`)

### Animacje się ścinają

- Zamknij inne karty przeglądarki
- Sprawdź task manager - GPU usage
- Spróbuj Chrome zamiast Firefox

### Audio nie gra

- Dodaj plik audio do `public/audio/space-ambient.mp3`
- Sprawdź console (F12) czy są błędy
- Niektóre przeglądarki blokują autoplay audio

## 📂 Struktura Mediów

```
public/
├── images/                # 7 zdjęć Mars
│   ├── 1.png
│   ├── 20251009_1846_Mars na tle kosmosu...
│   ├── 20251009_1846_Marsjańska Kolonizacja...
│   ├── 20251009_1848_Kosmonauta na Marsie...
│   ├── 20251009_1849_Przyszłość Misji... (x2)
│   └── 20251009_1855_Futuristic Martian Colony...
├── videos/                # 2 filmy
│   ├── _title_astronaut_202510092057.mp4
│   └── Start_rakiety_na_202510092048.mp4
└── audio/ (optional)      # Ambient sounds
    └── space-ambient.mp3
```

## 🚀 Performance

- **FPS**: ~60fps (capped dla stabilności)
- **Particles**: 80 max
- **Video**: Optimized, muted, looped
- **Images**: Lazy loaded przez Next.js
- **Animations**: Hardware accelerated (GPU)

## 🎓 Komendy Dodatkowe

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build produkcyjny
npm start            # Uruchom build

# Clean install
rm -rf node_modules package-lock.json
npm install          # Fresh install
```

## 🐛 Known Issues

- Safari może mieć problemy z autoplay video
- Firefox może mieć niższą wydajność particles
- Mobile ma disabled mouse follower (touch devices)
- Audio wymaga dodania pliku ręcznie

## 🎉 Easter Eggs

- Try hover over stats cards - 3D flip!
- Timeline badges scale przy hover
- Icons rotate 360° when hovered
- Progress bar shows mission to 2053
- Particles connect when mouse close
- CTA button has orbit animation
- Gradient backgrounds pulse
- Mouse follower grows on interactive elements

---

## Autorzy

**Kacper & Michał** - Politechnika, 3 rok Informatyki

## Status

✅ **GOTOWE** - Premium Edition v2.0

**Features**:

- ✅ 2 Video Backgrounds
- ✅ Particle System
- ✅ 3D Animations
- ✅ Mouse Tracking
- ✅ Audio Player Ready
- ✅ CountUp Numbers
- ✅ Typing Effects
- ✅ Advanced Framer Motion
- ✅ Full Responsive
- ✅ Production Ready

🚀 **ENJOY THE MISSION TO MARS!** 🚀
