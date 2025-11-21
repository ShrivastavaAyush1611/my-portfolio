// src/Components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-8 relative z-10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Ayush Shrivastava 
          </p>
          
        </div>
      </div>
    </footer>
  );
}