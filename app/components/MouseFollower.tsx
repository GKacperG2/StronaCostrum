'use client';

// Michał - mouse follower effect
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollower() {
  // Kacper - track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Michał - check if hovering over interactive element
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.classList.contains('cursor-pointer')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Kacper - outer circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />
      
      {/* Michał - inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 500,
        }}
      />
    </>
  );
}

