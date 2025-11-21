// src/Components/Work.jsx

import React from 'react';
import { ExternalLink, Code2, Globe,Github } from 'lucide-react';

export default function Work({ isVisible, projects }) {
  return (
    <section id="work" className="min-h-screen px-6 py-20 relative z-10">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-6xl font-bold mb-6 text-center relative inline-block w-full animate-fadeIn">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 animate-expandWidth" />
        </h2>
        
        <p className="text-gray-400 text-center mb-16 text-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Building powerful backend solutions • One API at a time
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 transition-all duration-300 hover:border-cyan-400 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* 1. Project Image / Placeholder */}
              <div className="relative z-10 mb-4 h-40 overflow-hidden rounded-lg border border-gray-700/50">
                {project.image ? (
                  // If you have an image, use it here
                  <img
                    src={project.image}
                    className="w-full h-full object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  // Placeholder when image is missing
                  <div className="w-full h-full flex items-center justify-center bg-gray-800/80 text-gray-500 text-sm font-mono">
                    {'<Project Visual loading... />'}
                  </div>
                )}
              </div>

              {/* 2. Content Header & Description */}
              <div className="flex-grow flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    {/* External Link Button */}
                    <div className='flex gap-2'>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full text-gray-400 hover:text-cyan-400 transition-colors transform group-hover:scale-110"
                      aria-label={`View ${project.name} source code`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {/* GitHub Icon (Uses github_url for Repository) */}
                      {project.github_url && ( 
                          <a
                            href={project.github_url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-full text-gray-400 hover:text-purple-400 transition-colors transform group-hover:scale-110"
                            aria-label={`View ${project.name} source code on GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                      )}
                      </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description || 'A powerful backend solution built with modern technologies'}
                  </p>
              </div>

              {/* 3. Footer: Language Tag(s) & View Source */}
              <div className="flex justify-between items-center text-sm relative z-10 mt-auto pt-2 border-t border-gray-700/30">
                  
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.language) ? (
                        project.language.map((tech, i) => (
                            <span 
                                key={i} 
                                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 whitespace-nowrap"
                            >
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                <span className="text-cyan-400 font-semibold">{tech}</span>
                            </span>
                        ))
                    ) : (
                        // Case 2: project.language is a single string (e.g., 'PostgreSQL')
                        project.language && (
                            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 whitespace-nowrap">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                <span className="text-cyan-400 font-sm">{project.language}</span>
                            </span>
                        )
                    )}
                  </div>
                  
                  
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}