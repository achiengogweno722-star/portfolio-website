import { motion } from "framer-motion";

function Skills() {

  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  return (

    <section
      id="skills"
      className="py-24 px-6 bg-slate-900"
    >

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >

              <div className="flex justify-between mb-3">

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-blue-400">
                  {skill.level}
                </span>

              </div>

              <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">

                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;