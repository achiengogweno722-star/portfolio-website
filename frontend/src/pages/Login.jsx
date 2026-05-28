import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaApple, FaEnvelope, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { useAuth } from "../AuthContext";

const providerOptions = [
  {
    label: "Google",
    icon: FaGoogle,
    provider: "Google",
    color: "bg-green-500 text-white border border-green-600",
    iconClass: "text-white",
  },
  { label: "GitHub", icon: FaGithub, provider: "GitHub", color: "bg-slate-800" },
  { label: "Apple", icon: FaApple, provider: "Apple", color: "bg-black" },
  { label: "Microsoft", icon: FaMicrosoft, provider: "Microsoft", color: "bg-blue-600" },
];

function Login() {
  const { user, signInWithEmail, signInWithProvider } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmail(email.trim(), password);
      setSuccess("Logged in successfully!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProviderSignIn = async (provider) => {
    await signInWithProvider(provider);
    navigate("/dashboard");
  };

  if (user) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-20">
        <div className="max-w-3xl w-full rounded-3xl border border-white/10 bg-slate-900/90 p-10 shadow-2xl">
          <h1 className="text-4xl font-bold mb-4">Already signed in</h1>
          <p className="text-slate-400 mb-8">You are currently signed in as <strong>{user.email}</strong>.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:bg-slate-200 transition"
            >
              Go to dashboard
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-white hover:border-blue-400 hover:text-blue-400 transition"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-4.5rem)] bg-slate-950 text-white px-6 py-14">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">Sign in to your portfolio experience</h1>
            <p className="text-slate-400 leading-7 max-w-2xl">
              Use email/password or continue with any of the available providers below. This is a frontend-ready login experience with mock authentication and a protected dashboard.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {providerOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.provider}
                  type="button"
                  onClick={() => handleProviderSignIn(option.provider)}
                  className={`flex items-center justify-center gap-2 rounded-3xl px-5 py-3 font-semibold transition-all duration-300 ${option.color} text-white hover:scale-[1.01]`}
                >
                  <Icon className={`text-lg ${option.iconClass ?? "text-white"}`} />
                  Continue with {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[2px] text-blue-400 mb-2">Email login</p>
            <h2 className="text-3xl font-bold">Sign in with your email</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm uppercase tracking-[2px] text-slate-400 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[2px] text-slate-400 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}
            {success && <p className="text-sm text-emerald-400">{success}</p>}

            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-500 px-5 py-3 text-base font-semibold text-white hover:bg-blue-400 transition"
            >
              Sign in now
            </button>
          </form>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-slate-400 space-y-2">
            <p className="text-sm">Don't have an account yet?</p>
            <Link to="/" className="text-white underline hover:text-blue-400 text-sm">
              Continue as guest and explore the homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
