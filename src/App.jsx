import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <div
      className={`

        relative
        overflow-hidden
        min-h-screen

        transition-colors
        duration-500

        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-900"
        }

      `}
    >

      {/* Animated Particle Background */}

      <ParticlesBackground />

      {/* Dark / Light Mode Toggle */}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="

          fixed
          bottom-5
          right-5
          z-[9999]

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-5
          py-3

          rounded-full

          shadow-2xl

          transition
          duration-300

          hover:scale-110

        "
      >

        {darkMode ? "☀️ Light" : "🌙 Dark"}

      </button>

      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About />

      {/* Skills Section */}

      <Skills />

      {/* Projects Section */}

      <Projects />

      {/* Contact Section */}

      <Contact />

      {/* Footer */}

      <Footer />

    </div>

  );
}

export default App;