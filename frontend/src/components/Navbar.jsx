import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        bg-black/80
        backdrop-blur-2xl

        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5

          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <h1
          className="
            text-3xl
            font-bold
            tracking-wider
            cursor-pointer
          "
        >
          OGWENO
        </h1>

        {/* DESKTOP MENU */}

        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <button className="text-sm uppercase tracking-[2px] text-slate-100 hover:text-blue-400 transition">
              Products
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
              <a href="#custom-websites" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                Custom Websites
              </a>
              <a href="#ecommerce" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                E-commerce Stores
              </a>
              <a href="#landing-pages" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                Landing Pages
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="text-sm uppercase tracking-[2px] text-slate-100 hover:text-blue-400 transition">
              Solutions
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
              <a href="#design-systems" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                Design Systems
              </a>
              <a href="#performance" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                Performance Optimization
              </a>
              <a href="#seo" className="block text-sm text-slate-200 py-2 hover:text-blue-400">
                SEO & Analytics
              </a>
            </div>
          </div>

          <a
            href="#contact"
            className="text-sm uppercase tracking-[2px] text-slate-100 hover:text-blue-400 transition"
          >
            Resources
          </a>
        </div>

        {/* RIGHT SIDE */}

        <div className="hidden lg:flex items-center gap-6">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="
                  bg-white
                  text-black

                  px-7
                  py-3.5

                  rounded-xl

                  font-semibold

                  hover:scale-105
                  hover:bg-blue-500
                  hover:text-white

                  transition-all
                  duration-300

                  shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                "
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-blue-400 transition"
              >
                Log In
              </Link>
              <Link
                to="/login"
                className="
                  bg-white
                  text-black

                  px-7
                  py-3.5

                  rounded-xl

                  font-semibold

                  hover:scale-105
                  hover:bg-blue-500
                  hover:text-white

                  transition-all
                  duration-300

                  shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                "
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="
            lg:hidden

            bg-black

            border-t
            border-white/10

            px-6
            py-8

            space-y-6
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[4px] text-slate-500 mb-3">
              Products
            </p>
            <a href="#custom-websites" className="block text-xl text-white py-2">
              Custom Websites
            </a>
            <a href="#ecommerce" className="block text-xl text-white py-2">
              E-commerce Stores
            </a>
            <a href="#landing-pages" className="block text-xl text-white py-2">
              Landing Pages
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[4px] text-slate-500 mb-3">
              Solutions
            </p>
            <a href="#design-systems" className="block text-xl text-white py-2">
              Design Systems
            </a>
            <a href="#performance" className="block text-xl text-white py-2">
              Performance Optimization
            </a>
            <a href="#seo" className="block text-xl text-white py-2">
              SEO & Analytics
            </a>
          </div>

          <a href="#contact" className="block text-xl text-white">
            Resources
          </a>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block w-full border border-white/20 py-3 rounded-xl text-center text-white hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="block w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block w-full border border-white/20 py-3 rounded-xl text-center text-white hover:text-blue-400 transition"
              >
                Log In
              </Link>
              <Link
                to="/login"
                className="block w-full bg-white text-black py-3 rounded-xl font-semibold text-center hover:bg-blue-500 hover:text-white transition"
              >
                Get Started
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;