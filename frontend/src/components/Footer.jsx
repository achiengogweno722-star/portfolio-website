import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="border-t border-slate-800 py-10 px-6 bg-slate-950 text-slate-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 text-white">Achieng Ogweno</h2>
            <p className="text-slate-400">Frontend Developer • React Developer • UI Designer</p>
          </div>

          <div className="flex gap-4 text-3xl">
            <a
              href="https://github.com/achiengogweno722-star"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-400 hover:text-blue-300 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/paige-cindy-937680381/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-400 hover:text-blue-300 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ogweno_achieng?igsh=Z3dzZ3duNnF2d2E4"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-pink-400 hover:text-pink-300 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="text-center mt-10 text-slate-400">
          © {new Date().getFullYear()} Achieng Ogweno. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
