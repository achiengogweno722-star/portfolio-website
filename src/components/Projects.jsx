import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.section

  initial={{ opacity: 0, y: 100 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 1 }}

  viewport={{ once: true }}id="projects" className="px-6 py-32 bg-slate-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">

          My Projects

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* PROJECT 1 */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:-translate-y-3 hover:border-blue-500 transition duration-300 shadow-lg">

            <div className="h-48 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6"></div>

            <h3 className="text-2xl font-semibold mb-4">

              Portfolio Website

            </h3>

            <p className="text-slate-400 mb-6 leading-7">

              A modern responsive portfolio website
              built using React and Tailwind CSS.

            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                React
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                Tailwind
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                JavaScript
              </span>

            </div>

            <div className="flex gap-4">

  <a
    href="https://github.com/"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition w-full text-center"
  >

    GitHub

  </a>

  <a
    href="https://vercel.com/"
    target="_blank"
    className="border border-slate-700 hover:border-blue-500 px-5 py-3 rounded-xl transition w-full text-center"
  >

    Live Demo

  </a>

</div>

          </div>

          {/* PROJECT 2 */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:-translate-y-3 hover:border-blue-500 transition duration-300 shadow-lg">

            <div className="h-48 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 mb-6"></div>

            <h3 className="text-2xl font-semibold mb-4">

              Todo App

            </h3>

            <p className="text-slate-400 mb-6 leading-7">

              A task management application with
              dynamic React functionality.

            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                React
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                Hooks
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                CSS
              </span>

            </div>

           <div className="flex gap-4">

  <a
    href="https://github.com/"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition w-full text-center"
  >

    GitHub

  </a>

  <a
    href="https://vercel.com/"
    target="_blank"
    className="border border-slate-700 hover:border-blue-500 px-5 py-3 rounded-xl transition w-full text-center"
  >

    Live Demo

  </a>

</div>

          </div>

          {/* PROJECT 3 */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:-translate-y-3 hover:border-blue-500 transition duration-300 shadow-lg">

            <div className="h-48 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-6"></div>

            <h3 className="text-2xl font-semibold mb-4">

              Weather App

            </h3>

            <p className="text-slate-400 mb-6 leading-7">

              A weather application using APIs
              and responsive UI design.

            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                API
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                React
              </span>

              <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                Tailwind
              </span>

            </div>

            <div className="flex gap-4">

  <a
    href="https://github.com/"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition w-full text-center"
  >

    GitHub

  </a>

  <a
    href="https://vercel.com/"
    target="_blank"
    className="border border-slate-700 hover:border-blue-500 px-5 py-3 rounded-xl transition w-full text-center"
  >

    Live Demo

  </a>

</div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default Projects;