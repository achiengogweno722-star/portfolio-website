import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-black">

      {/* Glow Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1410] to-black opacity-90"></div>

      {/* Blur Glow */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-300 blur-3xl opacity-20 rounded-full"></div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
      >

        <h2 className="text-6xl md:text-8xl font-bold leading-tight text-white">

          Let’s Build

          <br />

          Something Amazing

        </h2>

        <p className="text-slate-300 text-xl mt-10 leading-8">

          Modern frontend experiences crafted with React,
          Tailwind CSS, Framer Motion, and premium UI design.

        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <a
            href="#contact"
            className="
              bg-white
              text-black
              px-10
              py-5
              rounded-xl
              font-semibold
              text-lg
              hover:scale-105
              transition
              duration-300
            "
          >
            Get Started
          </a>

          <a
            href="#projects"
            className="
              border
              border-white/20
              px-10
              py-5
              rounded-xl
              text-lg
              font-semibold
              hover:bg-white
              hover:text-black
              transition
              duration-300
            "
          >
            View Projects
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default CTA;