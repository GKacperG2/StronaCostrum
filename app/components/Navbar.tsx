'use client';

// Michał - komponent nawigacji
import { motion, useScroll } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  // Kacper - state dla scrollu i mobile menu
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Michał - tracking scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kacper - scroll do sekcji
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Michał - progress bar na gorze */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Kacper - główny navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Michał - logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Rocket className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gradient">COSTRUM</span>
          </motion.div>

          {/* Kacper - menu nawigacyjne */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Misja', id: 'mission' },
              { label: 'Dlaczego', id: 'why' },
              { label: 'Jak', id: 'how' },
              { label: 'Wizja', id: 'vision' },
            ].map((item) => (
              <motion.button
                key={item.id}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Michał - CTA button */}
          <motion.button
            className="hidden md:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dołącz
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}

