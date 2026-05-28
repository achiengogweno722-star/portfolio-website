import { motion } from "framer-motion";

function About() {

  return (

    <motion.section

      id="about"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      className="py-28 px-6 relative"

    >

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            About <span className="text-blue-400">Me</span>

          </h2>

          <p className="text-slate-700 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-8">

            Passionate frontend developer dedicated to building
            modern, responsive, and interactive web applications
            with clean user experiences and modern technologies.

          </p>

        </div>

        {/* Main Content */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, x: -100 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

          >

            <div className="bg-slate-100 dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 hover:scale-105 transition duration-500">

              <h3 className="text-3xl font-bold mb-6 text-blue-400">

                Who I Am

              </h3>

              <p className="text-slate-800 dark:text-slate-300 leading-8 text-lg">

                I specialize in creating modern frontend applications
                using React, JavaScript, Tailwind CSS, and modern
                UI/UX practices.

                <br /><br />

                I enjoy transforming ideas into beautiful and
                interactive digital experiences that are responsive,
                user-friendly, and performance optimized.

              </p>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div

            initial={{ opacity: 0, x: 100 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

            className="grid grid-cols-2 gap-6"

          >

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl text-center shadow-xl hover:scale-105 transition duration-500 border border-slate-200 dark:border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400 mb-4">

                10+

              </h3>

              <p className="text-slate-800 dark:text-slate-300">

                Projects Built

              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl text-center shadow-xl hover:scale-105 transition duration-500 border border-slate-200 dark:border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400 mb-4">

                2+

              </h3>

              <p className="text-slate-800 dark:text-slate-300">

                Years Learning

              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl text-center shadow-xl hover:scale-105 transition duration-500 border border-slate-200 dark:border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400 mb-4">

                100%

              </h3>

              <p className="text-slate-800 dark:text-slate-300">

                Responsive Design

              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl text-center shadow-xl hover:scale-105 transition duration-500 border border-slate-200 dark:border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400 mb-4">

                React

              </h3>

              <p className="text-slate-800 dark:text-slate-300">

                Main Framework

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>

  );
}

export default About;