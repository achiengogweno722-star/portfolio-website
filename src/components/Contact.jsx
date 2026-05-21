import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.section

  initial={{ opacity: 0, y: 100 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 1 }}

  viewport={{ once: true }} id="contact" className="px-6 py-32">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">

          Contact Me

        </h2>

        <form className="bg-slate-900 p-10 rounded-2xl border border-slate-800">

          <div className="mb-6">

            <label className="block mb-2 text-slate-300">

              Name

            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 text-slate-300">

              Email

            </label>

            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
            />

          </div>

          <div className="mb-8">

            <label className="block mb-2 text-slate-300">

              Message

            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
            ></textarea>

          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-lg transition"
          >

            Send Message

          </button>

        </form>

      </div>

    </motion.section>
  );
}

export default Contact;