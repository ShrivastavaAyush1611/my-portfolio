// src/Components/Contact.jsx

import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Contact({ isVisible }) {
  const contactInfo = [
    { icon: Mail, title: "Email", text: "Mail me", color: "cyan" },
    {
      icon: Linkedin,
      title: "LinkedIn",
      text: "Connect with me",
      color: "purple",
    },
    { icon: Github, title: "GitHub", text: "Check out my code", color: "blue" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10"
    >
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-6xl font-bold mb-8 relative inline-block animate-fadeIn">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build Something
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 animate-expandWidth" />
        </h2>

        <p
          className="text-xl text-gray-300 mb-12 leading-relaxed animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Have a project in mind? Need a solution? <br />
          Let's collaborate and create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="mailto:ayushshrivastava16012005@gmail.com"
            className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden animate-bounceIn"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Send Email
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/ShrivastavaAyush1611"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-cyan-500/50 rounded-full font-bold text-lg hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all transform hover:scale-110 relative overflow-hidden animate-bounceIn"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayushshri1611/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-cyan-500/50 rounded-full font-bold text-lg hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all transform hover:scale-110 relative overflow-hidden animate-bounceIn"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br overflow-hidden from-gray-800/30 to-gray-900/30 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all transform hover:scale-105 hover:-rotate-2 animate-slideUp"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-cyan-400">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
