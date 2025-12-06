// src/App.jsx

import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin, ExternalLink, Code2, Database, Server, Terminal, Braces, Cloud, Zap, Cpu, Globe, Type, Paintbrush, Palette, Atom, ArrowRight, Box, GitBranch, Aperture, Code,Sigma, Waypoints, Feather, CreditCard, MapPin } from 'lucide-react'; // ADDED new icons
 // Import necessary icons for data arrays


// Component Imports
import ParticleBackground from "./Component/ParticleBackground";
import Navigation from "./Component/Navigation";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Work from "./Component/Work";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Education from "./Component/Education";

import projectImage1 from "../public/projectImage1.jpg";
import projectImage2 from "../public/projectImage2.jpg";
import projectImage3 from "../public/projectImage3.jpg";
import projectImage4 from "../public/projectImage4.jpg";
import projectImage5 from "../public/projectImage5.jpg";




// --- GLOBAL DATA ---

const manualProjects = [
  // {
  //   id: 1,
  //   name: "VingoEats",
  //   description:
  //   "Developed a full-stack MERN blogging platform with JWT + Firebase OAuth, CRUD post workflows, rich-text editor integration, and optimized API architecture.",
  //   html_url: "https://mern-blog-rlql.vercel.app",
  //   image: projectImage1,
  //   language: [
  //     "React.js",
  //     "MongoDB",
  //     "Custom-hooks",
  //     "Redux",
  //     "Cloudinary",
  //     "Axios",
  //     "socket.io",
  //     "RazorPay",
  //     "Leaflet",
  //     "Real Time Map Tracking"
  //   ],
  // },
  {
    id: 1,
    name: "Mern Blog",
    description:"MERN-based blogging system with Google OAuth + JWT login, a robust post editor, and role-managed content workflows, enabling seamless publishing and secure user sessions.",
    html_url: "https://mern-blog-rlql.vercel.app",
    github_url: 'https://github.com/ShrivastavaAyush1611/MERN_BLOG',
    image: projectImage1,
    language: [
      "React.js",
      "MongoDB",
      "Express.js",
      "Redux",
      "Cloudinary",
      "Axios",
    ],
  },
  {
    id: 2,
    name: "Hirrd(Job Portal)",
    description: "Designed a job-hiring platform where recruiters can post and manage openings while applicants track applications through structured dashboards, supported by secure authentication and efficient REST APIs.",
    image: projectImage2,
    html_url: "https://hirrad.vercel.app/",
    github_url: 'https://github.com/ShrivastavaAyush1611/Hirrad',
    language: [
      "Supabase",
      "React.js",
      "Clerk",
      "ShadCN",
      "Multer",
      "React Router Dom",
    ],
  },
  {
    id: 3,
    name: "PrepWise",
    description:"Built an AI-driven interview preparation app using Next.js and OpenAI models to generate dynamic questions, evaluate answers, generate feedback and offer personalized learning insights with fast server-rendered routes.",
    image: projectImage3,
    html_url: "https://prep-wise-ai-mock-interview.vercel.app/",
    github_url: 'https://github.com/ShrivastavaAyush1611/PrepWise-AI_Mock_Interview',
    language: [
      "Next.js",
      "Firebase",
      "ShadCN UI",
      "Vapi",
      "Gemini API",
    ],
  },
  {
    id: 4,
    name: "Expense Tracker",
    description: "Developed a data-focused expense management tool that tracks spending patterns, visualizes financial trends with Recharts, and stores transactions securely through Next.js API Routes and MongoDB.",
    image: projectImage5,
    html_url: "https://expense-tracker-lilac-seven-16.vercel.app/",
    github_url: 'https://github.com/ShrivastavaAyush1611/expense_tracker',
    language: ["Next.js", "Recharts", "Mongoose","Lucide Icons","react-hot-toast"],
  },
  {
    id: 5,
    name: "Guess The Number Game",
    description: "Created a lightweight browser game using pure HTML, CSS, and JavaScript with real-time DOM updates and instant feedback based on user guesses.",
    image: projectImage4,
    html_url: "https://guess-the-number-game-iota.vercel.app/",
    github_url: 'https://github.com/ShrivastavaAyush1611/Guess_The_Number_Game',
    language: ["HTML", "CSS", "Java Script"],
  },
  
];

const allSkills = [
  // Languages
  { name: 'C++', icon: Zap, color: 'from-cyan-400 to-blue-600' },
  { name: 'JavaScript', icon: Braces, color: 'from-yellow-400 to-yellow-600' }, 
  { name: 'HTML', icon: Code, color: 'from-orange-500 to-red-600' },
  { name: 'CSS', icon: Paintbrush, color: 'from-blue-300 to-cyan-500' },
  
  // Frontend/State Management
  { name: 'TailwindCSS', icon: Palette, color: 'from-teal-400 to-cyan-600' },
  { name: 'React', icon: Atom, color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', icon: ArrowRight, color: 'from-gray-800 to-black' },
  { name: 'Redux', icon: Sigma, color: 'from-purple-500 to-indigo-600' }, // NEW: State Management
  { name: 'React Router DOM', icon: Waypoints, color: 'from-rose-500 to-pink-600' }, // NEW: Routing
  { name: 'Custom Hooks', icon: Feather, color: 'from-yellow-300 to-green-400' }, // NEW: React Concepts

  // Backend/Database/Communication
  { name: 'Node.js', icon: Server, color: 'from-green-400 to-emerald-600' },
  { name: 'Express.js', icon: Server, color: 'from-gray-400 to-gray-600' },
  { name: 'MongoDB', icon: Database, color: 'from-green-500 to-teal-600' },
  { name: 'MySQL', icon: Database, color: 'from-blue-500 to-indigo-600' },
  { name: 'API (REST/GraphQL)', icon: Braces, color: 'from-red-400 to-pink-500' }, // NEW: API
  { name: 'Socket.io', icon: Zap, color: 'from-orange-500 to-red-600' }, // NEW: Real-time Communication
  
  // Integrations/Tools
  { name: 'Git', icon: GitBranch, color: 'from-red-600 to-orange-600' },
  { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
  { name: 'Razorpay', icon: CreditCard, color: 'from-blue-400 to-indigo-500' }, // NEW: Payment Gateway
  { name: 'Mapping (Leaflet/GM)', icon: MapPin, color: 'from-green-500 to-blue-500' }, // NEW: Mapping

];

// --- APP COMPONENT ---




export default function App() {
  const [projects, setProjects] = useState(manualProjects);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [particles, setParticles] = useState([]);

  // --- GLOBAL EFFECTS ---

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setParticles(newParticles);

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Particle animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <ParticleBackground mousePosition={mousePosition} particles={particles} />

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero isVisible={isVisible.home} scrollToSection={scrollToSection} />

      {/* Education is assumed to be an existing component */}
      {/* <section><Education /></section> */}

      <About isVisible={isVisible.about} />

      <Skills isVisible={isVisible.skills} allSkills={allSkills} />

      <Work isVisible={isVisible.work} projects={projects} />

      <Contact isVisible={isVisible.contact} />

      <Footer />
    </div>
    </main>
  );
}
