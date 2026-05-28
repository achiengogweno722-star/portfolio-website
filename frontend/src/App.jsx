import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import ParticlesBackground from "./components/ParticlesBackground";
import { AuthProvider, useAuth } from "./AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function HomePage() {
  return (
    <div
      className="
        dark
        relative
        overflow-hidden
        min-h-screen
        transition-colors
        duration-500
        bg-slate-950
        text-white
      "
    >
      {/* Animated Background */}

      <ParticlesBackground />

      {/* Navbar */}

      <Navbar />

      {/* Hero */}

      <Hero />

      {/* NEW PREMIUM SHOWCASE SECTION */}

      <Showcase />

      {/* About */}

      <About />

      {/* Skills */}

      <Skills />

      {/* Projects */}

      <Projects />

      {/* PREMIUM CTA SECTION */}

      <section
        className="
          relative
          py-40
          px-6
          text-center
          overflow-hidden
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>

        {/* Top Border Glow */}

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Floating Blur Effects */}

        <div
          className="
            absolute
            top-20
            left-20
            w-72
            h-72
            bg-blue-500/20
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-20
            w-72
            h-72
            bg-purple-500/20
            blur-3xl
            rounded-full
          "
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2
            className="
              text-5xl
              md:text-7xl
              font-light
              leading-tight
              mb-10
            "
          >
            Start your next
            <br />
            digital experience
            <br />
            today
          </h2>

          <p
            className="
              text-slate-400
              text-lg
              md:text-xl
              max-w-2xl
              mx-auto
              leading-8
              mb-14
            "
          >
            No credit card required. Available for
            freelance projects, frontend development,
            and premium portfolio experiences.
          </p>

          <a
            href="#contact"
            className="
              inline-block

              bg-white
              text-black

              px-12
              py-5

              rounded-xl

              text-lg
              font-semibold

              hover:scale-105
              hover:bg-slate-200

              transition-all
              duration-300

              shadow-2xl
            "
          >
            GET STARTED
          </a>
        </div>
      </section>

      {/* Contact */}

      <Contact />

      {/* Footer */}

      <Footer />
    </div>
  );
}

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;