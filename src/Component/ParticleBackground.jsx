// src/Components/ParticleBackground.jsx

import React from 'react';

export default function ParticleBackground({ mousePosition, particles }) {
  const glowSize = 400; // 400px width/height
  const glowOffset = glowSize / 2; // 200px offset

  return (
    <>
      {/* 🛑 New Background Grid and Gradient (Integrates Digital Rain Style) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* === NEW BASE: Dark Purple Gradient (Provides depth) === */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950" />
        
        {/* === NEW: Digital Rain Vertical Streak Overlay === */}
        <div className="absolute inset-0 opacity-80"> 
          <div className="absolute inset-0" style={{
            // This CSS simulates thin, vertical, flowing purple streaks (Matrix columns)
            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(180, 50, 255, 0.1) 0 1px, transparent 1px 15px), repeating-linear-gradient(90deg, rgba(255, 100, 255, 0.08) 0 1px, transparent 1px 30px)',
            backgroundSize: '30px 30px',
            animation: 'gridMove 10s linear infinite' // Increased speed for high energy flow
          }} />
        </div>
        
        {/* === NEW: Bottom Fade-out Effect (Mimics the image fade to black at the bottom) === */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10" />

        
        {/* Floating Particles (Styled to match the new purple theme) */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.size * 2}px rgba(200, 100, 255, 0.5)`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}

        {/* Animated Orbs and Glows (Retained for interactive energy) */}
        
        {/* Mouse Glow */}
        <div 
          className="absolute w-[400px] h-[400px] bg-cyan-600/30 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - glowOffset}px`,
            top: `${mousePosition.y - glowOffset}px`,
          }}
        />
        
        {/* Deep Animated Spotlight (Retained) */}
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-fuchsia-900/40 to-black/0 animate-fadeIn" />

        {/* Pulsating Color Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
      </div>
    </>
  );
}