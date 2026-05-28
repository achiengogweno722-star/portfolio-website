import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import heroBg from "../assets/images/hero-bg.jpg";
import portfolioImage from "../assets/images/portfolioImage.png";

function Hero() {

  return (

    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
    >

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Blur */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 blur-3xl opacity-20 rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 blur-3xl opacity-20 rounded-full" />

      {/* Main Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div

            initial={{ opacity: 0, x: -100 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

          >

            <p className="uppercase tracking-[6px] text-blue-400 mb-6 font-semibold">

              Frontend Developer

            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">

              Build Modern

              <br />

              Digital

              <br />

              Experiences

            </h1>

            <p className="text-slate-300 text-xl leading-9 max-w-2xl mb-10">

              I design and develop responsive, high-performance
              frontend applications using React, Tailwind CSS,
              Framer Motion, and modern web technologies.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-6">

              <a
                href="#projects"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
              >
                Contact Me
              </a>

            </div>

            {/* Socials */}

            <div className="flex gap-8 mt-12 text-4xl">

              <a
                href="https://github.com/"
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

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div

            initial={{ opacity: 0, x: 100 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            className="relative hidden lg:flex justify-center"

          >

            {/* Floating Card */}

            <motion.div

              animate={{ y: [0, -20, 0] }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}

              className="

                bg-white/10
                backdrop-blur-xl

                border
                border-white/20

                rounded-3xl
                overflow-hidden

                shadow-2xl

                w-[500px]

              "

            >

              {/* Top Bar */}

              <div className="bg-black/80 px-6 py-4 flex items-center gap-3">

                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>

              </div>

              {/* Image */}

              <img
                src={portfolioImage}
                alt="Portfolio Preview"
                className="w-full object-cover"
              />

              {/* Bottom Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">

                  Portfolio Website

                </h3>

                <p className="text-slate-300 leading-8">

                  Modern React portfolio with animations,
                  responsive UI, EmailJS integration,
                  and premium frontend design.

                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default Hero;