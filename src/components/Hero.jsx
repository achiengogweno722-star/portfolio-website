import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden flex flex-col justify-center items-center text-center px-6 py-32 min-h-screen"
    >

      {/* Gradient Background Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}

      <div className="relative z-10">

        <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
          Hi, I'm
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">

          <span className="text-white">
            Achieng
          </span>

          <br />

          <span className="text-blue-400">

            <TypeAnimation
              sequence={[
                "Frontend Developer 🚀",
                2000,
                "React Developer ⚛️",
                2000,
                "UI Designer 🎨",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </span>

        </h1>

        <p className="text-slate-400 text-lg md:text-xl mt-8 max-w-2xl leading-8 mx-auto">

          I create responsive, modern, and interactive frontend applications
          using React, JavaScript, Tailwind CSS, and modern web technologies.

        </p>

        {/* Buttons */}

        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg transition duration-300 hover:scale-105 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-white px-8 py-4 rounded-xl text-lg transition duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Download CV
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex gap-8 mt-10 justify-center text-4xl">

          <a
            href="https://github.com/achiengogweno722-star"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 text-slate-400 animate-bounce text-xl">
        ↓ Scroll
      </div>

    </motion.section>
  );
}

export default Hero;