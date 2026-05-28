import { motion } from "framer-motion";

function Skills() {

  const skills = [

    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "90%" },
    { name: "Tailwind CSS", level: "92%" },
    { name: "Git & GitHub", level: "80%" },

  ];

  return (

    <motion.section

      id="skills"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      className="py-28 px-6"

    >

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            My <span className="text-blue-400">Skills</span>

          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8">

            Technologies and tools I use to build modern,
            responsive, and high-performance web applications.

          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, x: -100 }}

              whileInView={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.8, delay: index * 0.2 }}

              viewport={{ once: true }}

              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"

            >

              <div className="flex justify-between mb-4">

                <h3 className="text-2xl font-semibold">

                  {skill.name}

                </h3>

                <span className="text-blue-400 font-bold">

                  {skill.level}

                </span>

              </div>

              {/* Progress Bar */}

              <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">

                <motion.div

                  initial={{ width: 0 }}

                  whileInView={{ width: skill.level }}

                  transition={{ duration: 1.5 }}

                  viewport={{ once: true }}

                  className="bg-blue-500 h-4 rounded-full"

                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );
}

export default Skills;