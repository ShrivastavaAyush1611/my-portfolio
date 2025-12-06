// src/Components/Hero.jsx

import React from "react";
import {
  Github,
  Mail,
  Linkedin,
  Terminal,
  Zap,
  Code2,
  Download,
} from "lucide-react"; // Added Code2 icon

export default function Hero({ isVisible, scrollToSection }) {
  return (
    
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10"
    >
      <div
        className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8 relative">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center relative overflow-hidden group animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 animate-pulse" />

            {/* Changed icon from Terminal to Code2 to represent broader development */}
            <Code2 className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform animate-spin-slow" />

            <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-full animate-ping" />
            <div
              className="absolute inset-0 border-4 border-purple-400/30 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* NEW TAGLINE: Emphasizes Full Stack / Software Developer */}
        <div className="mb-6 flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm animate-fadeIn">
          <span className="animate-blink">{">"}</span>
          <span>Full Stack & Software Developer</span>
        </div>

        {/* Responsive Title: Scales from 6xl -> 7xl -> 9xl */}
        <h1 className="text-6xl sm:text-6xl md:text-8xl font-black mb-6 relative animate-scaleIn">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-300">
            Ayush Shrivastava
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 blur-2xl -z-10 animate-pulse" />
        </h1>

        {/* NEW SUMMARY: Focuses on versatility (Front & Back) and impact (Foundational/Solutions) */}
        <p
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          Ready to contribute{" "}
          <span className="text-cyan-400 font-semibold animate-glow">
            robust code
          </span>{" "}
          across the entire{" "}
          <span
            className="text-purple-400 font-semibold animate-glow"
            style={{ animationDelay: "0.5s" }}
          >
            development
          </span>{" "}
          lifecycle.
        </p>

        <div
          className="flex gap-6 justify-center mb-12 animate-fadeIn"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/ShrivastavaAyush1611",
              color: "cyan",
            },
            {
              icon: Mail,
              href: "mailto:ayushshrivastava16012005@gmail.com",
              color: "purple",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/ayushshri1611/",
              color: "blue",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all group animate-bounceIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <social.icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-all" />
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div
            className="inline-block animate-bounceIn"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Projects
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div
            className="inline-block animate-bounceIn"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="/Ayush_SofDev.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 border border-purple-400 rounded-full font-semibold hover:from-purple-400 hover:to-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
