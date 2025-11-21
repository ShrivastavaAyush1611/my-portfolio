import React from 'react';
import { Server, Code2, Database, Terminal } from 'lucide-react';

// Example structure for src/Components/Education.jsx
export default function Education() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-12 text-center relative inline-block w-full animate-fadeIn">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education & Experience
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 animate-expandWidth" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline Container */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
            
            {/* Experience Items (YOUR CODE BLOCK GOES HERE) */}
            <div className="space-y-12">
              <div className="relative pl-20 animate-slideIn" style={{ animationDelay: '0.1s' }}>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-4 border-black shadow-lg shadow-cyan-500/50">
                  <Server className="w-8 h-8 text-white" /> {/* Requires import */}
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
                  <div className="text-cyan-400 text-sm font-semibold mb-2">Jan 2022 - Present</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Backend Developer</h3>
                  <p className="text-gray-400 mb-3">Tech Company Name</p>
                  <p className="text-gray-300 text-sm">Node.js | Express.js | MongoDB | PostgreSQL</p>
                </div>
              </div>
              
              <div className="relative pl-20 animate-slideIn" style={{ animationDelay: '0.2s' }}>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-black shadow-lg shadow-blue-500/50">
                  <Code2 className="w-8 h-8 text-white" /> {/* Requires import */}
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-105">
                  <div className="text-blue-400 text-sm font-semibold mb-2">Aug 2020 - Dec 2021</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                  <p className="text-gray-400 mb-3">Previous Company</p>
                  <p className="text-gray-300 text-sm">React.js | Express.js | PostgreSQL | AWS</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Timeline Container */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-rose-500"></div>
            
            <div className="space-y-12">
              <div className="relative pl-20 animate-slideIn" style={{ animationDelay: '0.3s' }}>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center border-4 border-black shadow-lg shadow-purple-500/50">
                  <Terminal className="w-8 h-8 text-white" /> {/* Requires import */}
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105">
                  <div className="text-purple-400 text-sm font-semibold mb-2">2018 - 2020</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Master of Computer Applications</h3>
                  <p className="text-gray-400">University Name</p>
                </div>
              </div>
              
              <div className="relative pl-20 animate-slideIn" style={{ animationDelay: '0.4s' }}>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center border-4 border-black shadow-lg shadow-pink-500/50">
                  <Database className="w-8 h-8 text-white" /> {/* Requires import */}
                </div>
                <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all hover:scale-105">
                  <div className="text-pink-400 text-sm font-semibold mb-2">2015 - 2018</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Applications</h3>
                  <p className="text-gray-400">College Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


