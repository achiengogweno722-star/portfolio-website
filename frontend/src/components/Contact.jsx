import { useState } from "react";
import { sendContact } from "../api";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendContact({
        name,
        email,
        website,
        message,
      });

      alert("Message sent successfully!");

      console.log(res.data);

      setName("");
      setEmail("");
      setWebsite("");
      setMessage("");
    } catch (err) {
      console.log(err);

      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="relative z-20 bg-slate-950/95 text-white py-24 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Make your next idea a reality.
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-8">
            Reach out for premium web experiences, frontend builds, and custom portfolio design support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Contact Info</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Let's talk about your next project</h3>
            </div>
            <p className="text-slate-300 leading-8 mb-8">
              I’m available for freelance work, collaborations, and portfolio projects. Send a message and I’ll get back to you quickly.
            </p>
            <div className="space-y-5 text-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>cindypaige961@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Nandi, Kapsabet - Baraton University</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+254 745413916</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Send a message</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Contact form</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <input
                type="email"
                placeholder="Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <input
                type="text"
                placeholder="Your Website (Optional)"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[12rem] rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-blue-500/20 hover:bg-blue-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}