import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (

    <motion.section

      id="home"

      initial={{ opacity: 0, y: 100 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      className="flex flex-col justify-center items-center text-center px-6 py-32"
    >

      <h2 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">

        Building Modern React Websites 🚀

      </h2>

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