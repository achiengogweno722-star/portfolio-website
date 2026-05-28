import { motion } from "framer-motion";

import todoImage from "../assets/images/todoImage.png";
import weatherImage from "../assets/images/weatherImage.png";
import portfolioImage from "../assets/images/portfolioImage.png";

function Projects() {

  const projects = [

    {
      title: "Todo App",
      description:
        "A modern task management application built with React and Tailwind CSS featuring responsive design and smooth UI interactions.",
      image: todoImage,
      live: "https://your-live-link.com",
      github: "https://github.com/yourusername/todo-app",
    },

    {
      title: "Weather App",
      description:
        "A weather forecasting application using real-time API data with responsive UI and dynamic weather updates.",
      image: weatherImage,
      live: "https://your-live-link.com",
      github: "https://github.com/yourusername/weather-app",
    },

    {
      title: "Portfolio Website",
      description:
        "A fully responsive developer portfolio built with React, Tailwind CSS, Framer Motion, and modern frontend technologies.",
      image: portfolioImage,
      live: "https://your-live-link.com",
      github: "https://github.com/yourusername/portfolio-website",
    },

  ];

  return (

    <motion.section

      id="projects"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      className="py-28 px-6 relative bg-slate-950"

    >

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            My <span className="text-blue-400">Projects</span>

          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8">

            Here are some of the projects I’ve built using modern
            frontend technologies, responsive design principles,
            and interactive user experiences.

          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 100 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: index * 0.2 }}

              viewport={{ once: true }}

              className="

                bg-slate-900
                rounded-3xl
                overflow-hidden

                shadow-2xl

                border
                border-slate-800

                hover:scale-105
                hover:shadow-blue-500/20

                transition
                duration-500

              "

            >

              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              {/* Project Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 text-white">

                  {project.title}

                </h3>

                <p className="text-slate-300 leading-7 mb-8">

                  {project.description}

                </p>

                {/* Buttons */}

                <div className="flex gap-4 flex-wrap">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="

                      bg-blue-600
                      hover:bg-blue-700
                      text-white

                      px-5
                      py-3

                      rounded-xl

                      transition
                      duration-300

                    "
                  >

                    Live Demo

                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="

                      border
                      border-white/20
                      text-white

                      px-5
                      py-3

                      rounded-xl

                      hover:bg-white
                      hover:text-black

                      transition
                      duration-300

                    "
                  >

                    GitHub

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );
}

export default Projects;