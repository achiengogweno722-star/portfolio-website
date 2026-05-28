import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-slate-900/90 p-12 shadow-2xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[2px] text-blue-400 mb-4">Private dashboard</p>
            <h1 className="text-5xl font-bold">Welcome back, {user?.name || "guest"}</h1>
            <p className="mt-4 max-w-3xl text-slate-400 leading-8">
              You are signed in with <strong>{user?.provider}</strong>. This dashboard is protected and only visible to authenticated visitors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={signOut}
              className="rounded-3xl bg-rose-500 px-7 py-4 font-semibold text-white hover:bg-rose-400 transition"
            >
              Sign out
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-3xl border border-white/20 bg-white/10 px-7 py-4 text-white hover:border-blue-400 hover:text-blue-400 transition"
            >
              Back to homepage
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-8">
            <h2 className="text-2xl font-semibold mb-4">Account detail</h2>
            <p className="text-slate-300">Email address: <span className="text-white">{user?.email}</span></p>
            <p className="mt-3 text-slate-300">Provider: <span className="text-white">{user?.provider}</span></p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-8">
            <h2 className="text-2xl font-semibold mb-4">Next step</h2>
            <p className="text-slate-300 leading-8">
              You can use this authenticated session to access premium pages, book services, or save personalized portfolio preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
