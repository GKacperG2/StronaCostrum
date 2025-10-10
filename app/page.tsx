'use client';

// Michał - import wszystkich bibliotek i komponentów
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Rocket, Users, Globe, Zap, ChevronDown, Target, Sparkles, Brain, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

// Kacper - import custom components
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import MouseFollower from './components/MouseFollower';
import VideoBackground from './components/VideoBackground';
import ParticleBackground from './components/ParticleBackground';
import CountUp from './components/CountUp';

export default function Home() {
  // Kacper - state do interaktywnych elementow
  const [missionProgress, setMissionProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Michał - smooth spring animation dla scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Kacper - parallax effects dla różnych sekcji
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  // Michał - auto scroll progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setMissionProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Kacper - track mouse for 3D card effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Michał - 3D card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleCardMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Michał - nawigacja */}
      <Navbar />
      
      {/* Kacper - mouse follower effect */}
      <MouseFollower />
      
      {/* Michał - audio player */}
      <AudioPlayer />
      
      {/* Kacper - Hero Section z VIDEO BACKGROUND */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Michał - VIDEO BACKGROUND - astronaut */}
        <VideoBackground 
          src="/videos/_title_astronaut_202510092057.mp4"
          overlay={true}
        />

        {/* Kacper - particle effect overlay */}
        <div className="absolute inset-0 z-[1]">
          <ParticleBackground />
        </div>

        {/* Michał - główny content hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient drop-shadow-2xl">
              COSTRUM
            </h1>
          </motion.div>
          
          {/* Kacper - typing animation */}
          <motion.div
            className="text-2xl md:text-4xl mb-8 text-gray-200 h-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Gra Długoterminowa...',
                1000,
                'Mars & AI dla pozaziemskich zastosowań',
                2000,
                'Miasto 14K do 2053 roku',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Naszą misją jest <span className="text-orange-400 font-bold">przyspieszenie ewolucji ludzkości</span> w gatunek multiplanetarny
          </motion.p>

          {/* Michał - interaktywny progress bar misji */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="max-w-md mx-auto backdrop-blur-md bg-black/40 p-6 rounded-xl border border-orange-500/30">
              <div className="flex justify-between mb-2 text-sm">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  Postęp misji Mars 2053
                </span>
                <motion.span
                  key={missionProgress}
                  initial={{ scale: 1.5, color: '#f97316' }}
                  animate={{ scale: 1, color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                  className="font-bold"
                >
                  {missionProgress}%
                </motion.span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 h-3 rounded-full relative"
                  style={{ width: `${missionProgress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${missionProgress}%` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Kacper - scroll indicator z animacją */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll</span>
              <ChevronDown className="w-8 h-8 text-orange-500" />
            </div>
          </motion.div>
        </div>

        {/* Michał - floating elements */}
        <motion.div
          className="absolute top-20 left-10 text-orange-500"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <Star className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 right-20 text-red-500"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        >
          <Rocket className="w-10 h-10" />
        </motion.div>
      </motion.section>

      {/* Michał - Sekcja: Cel Projektu z 3D cards */}
      <section id="mission" className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-6xl font-bold mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-gradient">Miasto </span>
                <CountUp end={14000} suffix="" className="text-orange-500" />
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Celem projektu Costrum jest stworzenie miasta dla <span className="text-orange-400 font-bold">14 000 mieszkańców</span> na Marsie do <span className="text-orange-400 font-bold">2053 roku</span>.
              </motion.p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-900/20 to-transparent rounded-lg border-l-4 border-orange-500"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">
                    Tworzymy ekosystem projektów i firm, które krok po kroku budują infrastrukturę przyszłego miasta
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-900/20 to-transparent rounded-lg border-l-4 border-red-500"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <Zap className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400">
                    Pracujemy nad rozwiązaniami w trybie stealth, rozwijając technologie kosmiczne i AI
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Kacper - 3D obrazek z mouse tracking */}
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/20251009_1855_Futuristic Martian Colony_simple_compose_01k74y978efg2890v51v59fkhg.png"
                  alt="Futurystyczna kolonia na Marsie"
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-xl mb-2">Wizja miasta 14K na Marsie</p>
                    <p className="text-gray-300 text-sm">Futurystyczna infrastruktura dla 14000 kolonistów</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Michał - Sekcja: Dlaczego to robimy z 3D CARDS */}
      <section id="why" className="relative py-20 px-4 bg-gradient-to-b from-black via-red-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-12 text-center text-gradient overflow-visible" style={{ lineHeight: '1.4', padding: '0.2em 0' }}>
              Dlaczego to robimy
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Kacper - 3D karty z mouse tracking */}
              {[
                {
                  title: 'Plan Zapasowy',
                  desc: 'Aby przetrwać i rozwijać się jako cywilizacja, potrzebujemy drugiego domu poza Ziemią',
                  icon: <Globe className="w-12 h-12" />,
                  ref: cardRef1,
                },
                {
                  title: 'Samowystarczalność',
                  desc: 'Mars to nasz krok w stronę przyszłości odpornej na katastrofy i wojny',
                  icon: <Target className="w-12 h-12" />,
                  ref: cardRef2,
                },
                {
                  title: 'Kontrola AI',
                  desc: 'Zabezpieczenie przed sztuczną inteligencją wymykającą się spod kontroli',
                  icon: <Brain className="w-12 h-12" />,
                  ref: cardRef3,
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  ref={card.ref}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  onMouseMove={(e) => handleCardMouseMove(e, card.ref)}
                  onMouseLeave={() => handleCardMouseLeave(card.ref)}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <motion.div
                    className="text-orange-500 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-gray-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Michał - sekcja z obrazkiem i quote */}
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/20251009_1846_Mars na tle kosmosu_remix_01k74xrnmffrebbsyhhbm5gecf.png"
                alt="Mars na tle kosmosu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
                <motion.div 
                  className="p-12 max-w-2xl"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-orange-500 mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                  >
                    <Star className="w-12 h-12" />
                  </motion.div>
                  <p className="text-3xl italic text-gray-100 leading-relaxed font-light">
                    &quot;Potrzebujemy Marsa, aby <span className="text-gradient font-bold">wyeliminować ryzyko braku przyszłości</span>. Jako planety zapasowej dla długoterminowego przetrwania.&quot;
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kacper - Sekcja: Dlaczego teraz - timeline */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-12 text-center text-gradient overflow-visible" style={{ lineHeight: '1.4', padding: '0.2em 0' }}>
              Dlaczego teraz
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                className="relative h-96 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/20251009_1846_Marsjańska Kolonizacja_remix_01k74xq5krfexrzr3agf04fk2d.png"
                  alt="Marsjańska kolonizacja"
                  fill
                  className="object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    year: '1960s',
                    title: 'Już raz to zrobiliśmy',
                    desc: 'Polecieliśmy na Księżyc w latach 60. Jednak starsi inżynierowie odeszli na emeryturę, a ich know-how zaginęło.',
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    year: '2025',
                    title: 'Mamy technologię',
                    desc: 'Dziś mamy technologię, jakiej Apollo mógłby nam tylko pozazdrościć. Brakuje nam determinacji i odwagi.',
                    color: 'from-orange-500 to-yellow-500',
                  },
                  {
                    year: '2053',
                    title: 'Skupienie jak laser',
                    desc: 'OpenAI zaczęto 9 lat temu, Google 26 lat temu. 2053 może wydawać się daleko, ale jeśli skupimy się jak laser, zrobimy to szybciej.',
                    color: 'from-red-500 to-pink-500',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-r ${item.color} text-white px-5 py-3 rounded-full font-bold text-lg shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.year}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Michał - animated quote box */}
            <motion.div
              className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-l-4 border-orange-500 p-8 rounded-r-xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-2xl italic text-gray-200 leading-relaxed">
                Chcemy zjednoczyć <span className="text-gradient font-bold">inżynierów, naukowców i wizjonerów</span>, którzy nie boją się patrzeć w przyszłość i działać.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Michał - Sekcja: Jak to osiągniemy z VIDEO BACKGROUND */}
      <section id="how" className="relative py-20 px-4 overflow-hidden">
        {/* Kacper - VIDEO BACKGROUND - rakieta */}
        <VideoBackground 
          src="/videos/Start_rakiety_na_202510092048.mp4"
          overlay={true}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient drop-shadow-2xl">Jak to osiągniemy</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                className="space-y-6 backdrop-blur-md bg-black/60 p-8 rounded-xl border border-orange-500/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-white">Ekosystem Projektów</h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Tworzymy sieć projektów i firm, które krok po kroku budują infrastrukturę przyszłego &quot;Miasta 14k na Marsie&quot;.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <Rocket className="w-8 h-8" />,
                      title: 'Technologie Kosmiczne',
                      desc: 'Rozwój systemów transportu i życia w kosmosie',
                    },
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: 'Automatyzacja & AI',
                      desc: 'Inteligentne systemy wspierające kolonizację',
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: 'Korzyści dla Ziemi',
                      desc: 'GPS, materiały, tech - każdy przełom pomaga obu planetom',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/80 to-transparent rounded-lg border border-gray-700 hover:border-orange-500 transition-all"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <motion.div
                        className="text-orange-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Kacper - galeria obrazków z zoom effect */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  '/images/20251009_1849_Przyszłość Misji na Marsa_remix_01k74xy7xdfsfs9aw6e5fm0r27.png',
                  '/images/20251009_1849_Przyszłość Misji na Marsa_remix_01k74xy7xefy3adxy6tvwax82p.png',
                  '/images/20251009_1848_Kosmonauta na Marsie_remix_01k74xvr16ebptqvpcp1p5tcan.png',
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${index === 2 ? 'col-span-2' : ''} h-48 rounded-lg overflow-hidden cursor-pointer group`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <Image
                      src={src}
                      alt={`Misja Mars ${index + 1}`}
                      fill
                      className="object-cover group-hover:brightness-125 transition-all duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: '100%' }}
                      whileHover={{ y: 0 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kacper - Sekcja: Długoterminowa wizja z animated numbers */}
      <section id="vision" className="relative py-20 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-12 text-center text-gradient overflow-visible" style={{ lineHeight: '1.4', padding: '0.2em 0' }}>
              Długoterminowa Wizja
            </h2>

            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <motion.p
                className="text-3xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Wierzymy, że przyszłość nie należy do największych mocarstw, lecz do tych, którzy <span className="text-gradient font-bold text-4xl">działają z wizją i konsekwencją</span>.
              </motion.p>

              <motion.p
                className="text-xl text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Nie zbudujemy Marsa sami, ale możemy stworzyć ruch – setki organizacji, które razem zmienią historię.
              </motion.p>

              {/* Michał - interaktywne statystyki z CountUp */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                {[
                  { number: 14000, label: 'Mieszkańców', sublabel: 'Docelowa populacja', suffix: '' },
                  { number: 2053, label: 'Rok', sublabel: 'Termin realizacji', suffix: '' },
                  { number: 100, label: 'Możliwości', sublabel: 'Dla ludzkości', suffix: '%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-8 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 5,
                      boxShadow: '0 20px 60px rgba(249, 115, 22, 0.5)'
                    }}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.8,
                      type: 'spring'
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-6xl font-bold text-gradient mb-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.number === 100 && stat.suffix === '%' ? (
                        `${stat.number}${stat.suffix}`
                      ) : (
                        <>
                          <CountUp end={stat.number} suffix={stat.suffix} />
                        </>
                      )}
                    </motion.div>
                    <div className="text-2xl font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.sublabel}</div>
                    
                    {/* Kacper - animated icon */}
                    <motion.div
                      className="mt-4 text-orange-500"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 8,
                        delay: index * 0.5
                      }}
                    >
                      {index === 0 && <Users className="w-8 h-8 mx-auto" />}
                      {index === 1 && <Rocket className="w-8 h-8 mx-auto" />}
                      {index === 2 && <Sparkles className="w-8 h-8 mx-auto" />}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Michał - Footer / CTA z gradient animation */}
      <section className="relative py-20 px-4 bg-gradient-to-t from-orange-950/30 via-red-950/20 to-black overflow-hidden">
        {/* Kacper - animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #f97316 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #ef4444 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #f97316 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #ef4444 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #f97316 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl font-bold mb-8"
              animate={{ 
                textShadow: [
                  '0 0 20px #f97316',
                  '0 0 40px #ef4444',
                  '0 0 20px #f97316',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-gradient">Dołącz do Misji</span>
            </motion.h2>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Jesteśmy na początku długiej drogi. Niektóre projekty wystartują już w tym roku.
            </p>
            
            {/* Kacper - super interaktywny przycisk */}
            <motion.button
              className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 text-white px-16 py-6 rounded-full text-2xl font-bold relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{ opacity: 0.2 }}
              />
              <span className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Rocket className="w-8 h-8" />
                </motion.div>
                Rozpocznij Podróż
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>

            {/* Michał - floating particles around button */}
            <div className="absolute inset-0 pointer-events-none" suppressHydrationWarning>
              {[...Array(20)].map((_, i) => {
                // Kacper - calculate position with fixed precision
                const angle = i * 18;
                const left = Math.round((50 + Math.cos(angle * Math.PI / 180) * 40) * 100) / 100;
                const top = Math.round((50 + Math.sin(angle * Math.PI / 180) * 40) * 100) / 100;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                );
              })}
            </div>

            <motion.p 
              className="mt-16 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              Costrum © 2025 - Przyspieszamy ewolucję ludzkości w gatunek multiplanetarny 🚀
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
