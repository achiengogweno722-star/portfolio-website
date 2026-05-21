import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          My Portfolio
        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-8 text-slate-300">

          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* MOBILE BUTTON */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <ul className="md:hidden flex flex-col gap-6 px-6 pb-6 text-slate-300 bg-slate-950">

          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

      )}

    </nav>
  );
}

export default Navbar;