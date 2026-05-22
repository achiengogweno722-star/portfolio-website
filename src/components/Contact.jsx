import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9tnkau",
        "template_80bric7",
        form.current,
        "p7D9zC9KFB_LrSWkk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-6 py-32 bg-slate-950"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 py-4 rounded-xl text-lg font-semibold"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;