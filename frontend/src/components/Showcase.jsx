import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Showcase() {
  return (
    <section
      className="
        relative
        px-6
        py-32
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black
          via-[#120f16]
          to-black
        "
      />

      <div
        className="
          absolute
          top-20
          left-20
          w-96
          h-96
          bg-blue-600/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-purple-600/20
          blur-3xl
          rounded-full
        "
      />

      {/* Main Content */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-start
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="
                text-5xl
                md:text-7xl
                font-light
                leading-tight
                tracking-tight
              "
            >
              Build a premium
              <br />
              digital experience
              <br />
              with modern frontend
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p
              className="
                text-xl
                text-slate-300
                leading-10
              "
            >
              Generate high-performance websites with
              modern UI systems, advanced animations,
              responsive layouts, and scalable frontend
              architecture tailored for real-world users.
            </p>

            {/* BUTTON */}

            <button
              className="
                group
                border
                border-white/20
                px-10
                py-6
                text-lg
                tracking-wide
                flex
                items-center
                gap-5
                hover:bg-white
                hover:text-black
                transition-all
                duration-500
              "
            >
              EXPLORE FRONTEND DEVELOPMENT

              <FaArrowRight
                className="
                  group-hover:translate-x-2
                  transition
                  duration-300
                "
              />
            </button>
          </motion.div>
        </div>

        {/* BOTTOM CARD */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-28
            rounded-[40px]
            bg-blue-700
            p-12
            md:p-20
            overflow-hidden
            relative
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-blue-700
              to-indigo-900
            "
          />

          <div className="relative z-10">
            <p
              className="
                uppercase
                tracking-[4px]
                text-blue-200
                mb-6
              "
            >
              Tailored To You
            </p>

            <h3
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                max-w-4xl
              "
            >
              Modern portfolio experiences
              built for speed, scalability,
              and elegant design.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Showcase;