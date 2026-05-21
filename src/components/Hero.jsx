import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (

    <motion.section

      id="home"

      initial={{ opacity: 0, y: 100 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      className="relative overflow-hidden flex flex-col justify-center items-center text-center px-6 py-32"
    >
{/* GRADIENT BLOBS */}

<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
     <div className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">

  <h2 className="mb-6">

    Hi, I'm a

  </h2>

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
    className="text-blue-400"
  />

</div>

      <p className="text-slate-400 text-xl mt-8 max-w-2xl leading-8">

        I create responsive and modern frontend applications
        using React, JavaScript, and Tailwind CSS.

      </p>

      <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg transition hover:scale-105">

        View Projects

      </button>

      <div className="flex gap-8 mt-10 text-4xl">

        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-blue-400 transition hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="hover:text-blue-400 transition hover:scale-110"
        >
          <FaLinkedin />
        </a>

      </div>

    </motion.section>
  );
}

export default Hero;