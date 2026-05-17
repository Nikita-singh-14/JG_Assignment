"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    id: "01", title: "Leadership Academy", tag: "Flagship",
    duration: "12 Weeks", level: "All Levels", color: "#f5c842",
    description: "A transformative journey designed to build confident, empathetic leaders who can navigate complexity and inspire teams.",
    highlights: ["Executive coaching", "Real-world case studies", "Peer leadership circles", "Mentorship pairing"],
  },
  {
    id: "02", title: "Career Launchpad", tag: "Popular",
    duration: "8 Weeks", level: "Beginners", color: "#ff8c42",
    description: "From resume to offer letter — master the art of career building with expert guidance, mock interviews, and industry connections.",
    highlights: ["Resume masterclass", "LinkedIn optimization", "Mock interviews", "Job placement support"],
  },
  {
    id: "03", title: "Entrepreneurship Bootcamp", tag: "Intensive",
    duration: "6 Weeks", level: "Intermediate", color: "#42c9f5",
    description: "Turn your ideas into reality. Learn to validate, build, pitch, and scale your startup from scratch with seasoned founders.",
    highlights: ["Idea validation", "Pitch deck creation", "Investor Q&A", "Demo day showcase"],
  },
  {
    id: "04", title: "Communication Mastery", tag: "New",
    duration: "4 Weeks", level: "All Levels", color: "#a855f7",
    description: "Unlock the power of words. From public speaking to negotiation, elevate every interaction you have.",
    highlights: ["Public speaking", "Storytelling frameworks", "Negotiation tactics", "Body language training"],
  },
];

export default function Programs() {
  const [active, setActive] = useState(0);
  const p = programs[active];

  return (
    <section id="programs" className="py-32 px-6 relative overflow-hidden" style={{ background: "#0d0d14" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}>Programs</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Craft Your Path to
            <span className="block italic" style={{ color: "#f5c842" }}>Excellence</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#9b97a0" }}>
            Every program delivers real transformation, not just certificates.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {programs.map((prog, i) => (
            <button
              key={prog.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: active === i ? prog.color : "transparent",
                color: active === i ? "#0a0a0f" : "#9b97a0",
                border: active === i ? `1px solid ${prog.color}` : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {prog.title}
            </button>
          ))}
        </div>

        {/* Active card */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 lg:p-12"
          style={{ background: "#111118", border: `1px solid ${p.color}25` }}
        >
          <div
            className="absolute top-0 right-0 rounded-full pointer-events-none"
            style={{ width: 300, height: 300, background: `radial-gradient(circle, ${p.color}08 0%, transparent 70%)` }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs px-3 py-1.5 rounded-full tracking-widest uppercase"
                  style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30`, fontFamily: "'DM Mono', monospace" }}
                >
                  {p.tag}
                </span>
                <span className="text-xs" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>{p.id}</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.title}
              </h3>
              <p className="leading-relaxed mb-8 text-lg" style={{ color: "#9b97a0" }}>{p.description}</p>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>Duration</p>
                  <p className="text-white font-semibold">{p.duration}</p>
                </div>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.1)" }} />
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>Level</p>
                  <p className="text-white font-semibold">{p.level}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ background: p.color, color: "#0a0a0f" }}
              >
                Enroll Now <ArrowUpRight size={16} />
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>
                What You&apos;ll Learn
              </p>
              <div className="space-y-3">
                {p.highlights.map((h, i) => (
                  <div
                    key={h}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-300"
                    style={{ background: "#16161f", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: `${p.color}20`, color: p.color, fontFamily: "'DM Mono', monospace" }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm" style={{ color: "#9b97a0" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mini grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {programs.map((prog, i) => (
            <button
              key={prog.id}
              onClick={() => setActive(i)}
              className="p-5 rounded-xl text-left transition-all duration-300"
              style={{
                background: "#111118",
                border: active === i ? `1px solid ${prog.color}30` : "1px solid rgba(255,255,255,0.06)",
                opacity: active === i ? 0.4 : 1,
              }}
            >
              <span className="text-xs block mb-2" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>{prog.id}</span>
              <span className="text-sm text-white font-medium">{prog.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
