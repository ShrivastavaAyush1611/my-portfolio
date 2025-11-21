// src/Components/Skills.jsx

import React from 'react';

// The component now expects the full iconized array as a prop
export default function Skills({ isVisible, allSkills }) { 

  // Fallback if allSkills prop is missing
  if (!allSkills) return null; 

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Title Block */}
        <h2 className="text-6xl font-bold mb-12 text-center relative inline-block w-full animate-fadeIn">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 animate-expandWidth" />
        </h2>

        {/* Icon Grid (Now displaying ALL skills) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative animate-popIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all hover:transform hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Icon and Name */}
                  <Icon className="w-12 h-12 mb-4 mx-auto text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                  <h3 className="text-center font-bold text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              // 1. Frameworks & Runtime (Updated)
              { 
                title: 'Frameworks & Runtime', 
                text: 'Node.js • Express.js • Next.js • React • Redux • React Router DOM', 
                color: 'cyan' 
              },
              
              // 2. Databases & Communication (Updated)
              { 
                title: 'Database & Communication', 
                text: 'MongoDB • MySQL • API (REST/GraphQL) • Socket.io ', 
                color: 'purple' 
              },
              
              // 3. Tools, Concepts & Design (New/Replaced DevOps)
              { 
                title: 'Tools & Concepts', 
                text: 'Git • GitHub • Custom Hooks • C++ • JavaScript • Razorpay', 
                color: 'blue' 
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all transform hover:scale-105 animate-slideUp"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <h4 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
    </section>
  );
}