// src/Components/About.jsx

import React from "react";
import { Code2, Database } from "lucide-react";

export default function About({ isVisible }) {
  const coreExpertise = [
    {
      icon: Code2,
      title: "Backend Developer",
      color: "cyan",
      text: "The Builder of Digital Infrastructure. I specialize in engineering the secure, high-performance core that powers digital solutions. With expertise in the MERN stack, I translate complex requirements into clean, optimized APIs and reliable database schemas. My focus is always on scalability, security, and efficiency, ensuring the infrastructure can handle growth and deliver millisecond-fast responses. I'm driven to build the invisible strength that businesses rely on.",
    },
    {
      icon: Database,
      title: "Software Engineer",
      color: "purple",
      text: "I approach every project with a detail-oriented, results-driven mindset, readily adapting to new challenges across the entire stack. My foundation in software development principles allows me to tackle problems collaboratively and master new technologies rapidly. I bridge the gap between responsive interfaces and robust back-end logic, committed to delivering high-quality, end-to-end solutions that are both functional and future-ready.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-6xl font-bold mb-12 text-center relative inline-block w-full animate-fadeIn">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 animate-expandWidth" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {coreExpertise.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all transform hover:scale-105 hover:rotate-1 animate-slideIn"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <IconComponent
                  className="w-12 h-12 text-cyan-400 mb-4 animate-bounce"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                />
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <span className="text-2xl text-cyan-400 font-bold animate-pulse">
              //{" "}
            </span>
            I am a results-driven Student who transcends typical full-stack
            proficiency by prioritizing scalable architecture from the first
            line of code. Equipped with hands-on experience in the MERN stack, I
            don't just write features—I engineer high-quality, secure software
            solutions built for long-term reliability and growth.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My passion lies in transforming abstract business requirements into
            optimized backend systems (leveraging principles of security,
            performance, and best practices) while simultaneously crafting
            responsive, intuitive front-end experiences.I thrive on quickly
            mastering new technologies and am singularly focused on delivering
            measurable, high-impact value to the product lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
}
