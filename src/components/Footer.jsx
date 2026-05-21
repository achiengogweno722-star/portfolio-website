import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-slate-400">

          © 2025 My Portfolio. All rights reserved.

        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;