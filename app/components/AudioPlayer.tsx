'use client';

// Kacper - ambient sound player w stylu Interstellar
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Początkowa głośność 50%
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Michał - autoplay na starcie z fade-out
  useEffect(() => {
    // Kacper - uruchom muzykę automatycznie po załadowaniu
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          
          // Michał - poczekaj 10 sekund, potem zacznij stopniowe ściszanie
          setTimeout(() => {
            // Kacper - fade out przez 30 sekund z 50% do 10%
            const startVolume = 0.5;
            const endVolume = 0.1;
            const duration = 30000; // 30 sekund
            const steps = 100;
            const stepTime = duration / steps;
            const volumeStep = (startVolume - endVolume) / steps;
            
            let currentStep = 0;
            const fadeInterval = setInterval(() => {
              currentStep++;
              const newVolume = startVolume - (volumeStep * currentStep);
              
              if (currentStep >= steps || newVolume <= endVolume) {
                setVolume(endVolume);
                clearInterval(fadeInterval);
              } else {
                setVolume(newVolume);
              }
            }, stepTime);
          }, 10000); // Czekaj 10 sekund przed rozpoczęciem fade-out
        } catch (error) {
          // Kacper - autoplay może być zablokowany przez przeglądarkę
          console.log('Autoplay zablokowany - użytkownik musi kliknąć przycisk');
        }
      }
    };
    
    playAudio();
  }, []);

  // Michał - toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Kacper - update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      {/* Michał - free space ambient sound - automatyczne uruchomienie */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Kacper - fallback do local file jesli bedzie */}
        <source src="/audio/space-ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* Kacper - floating audio controls */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={togglePlay}
          className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/80 transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Volume2 className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VolumeX className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Michał - tooltip */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
            >
              Włącz ambient space 🎵
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

