// src/Components/Navigation.jsx

import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react'; // Added Menu and X icons

export default function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollAndClose = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-cyan-500/20 animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Title */}
          <div className="flex items-center gap-3 group">
            <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-300">
              {'<Software Dev />'}
            </h1>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-cyan-400 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'work', 'contact'].map((section, idx) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all capitalize relative group animate-fadeIn`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className={activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'}>
                  {section}
                </span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all ${
                  activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu (Conditionally rendered) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-cyan-500/20 space-y-2 animate-slideDown">
            {['home', 'about', 'skills', 'work', 'contact'].map((section, idx) => (
              <button
                key={section}
                onClick={() => handleScrollAndClose(section)}
                className="w-full text-left py-2 px-3 block text-base font-medium transition-colors capitalize rounded-lg"
              >
                <span className={activeSection === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}>
                  {section}
                </span>
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}