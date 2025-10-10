'use client';

// Michał - component dla video background
import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoBackground({ src, className = '', overlay = true }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Kacper - auto play when loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Michał - video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Kacper - gradient overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />
      )}
    </div>
  );
}

