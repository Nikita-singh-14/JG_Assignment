"use client";

const values = [
  { icon: "🎯", title: "Purpose-Driven", desc: "Everything we do has meaning" },
  { icon: "🤝", title: "Community First", desc: "We grow together, always" },
  { icon: "🔥", title: "Passionate", desc: "Deep commitment to every student" },
  { icon: "🌱", title: "Growth Mindset", desc: "Always learning, never settling" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(245,200,66,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Spinning rings */}
              <div
                className="absolute rounded-full spin-slow pointer-events-none"
                style={{ inset: -20, border: "1px dashed rgba(245,200,66,0.15)" }}
              />
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ inset: -50, border: "1px dashed rgba(245,200,66,0.07)", animation: "spin-slow 20s linear infinite reverse" }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl aspect-square flex flex-col items-center justify-center p-10"
                style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mb-6 float"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,200,66,0.3), rgba(212,160,23,0.1))",
                    border: "1px solid rgba(245,200,66,0.2)",
                  }}
                >
                  <span className="text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: "#f5c842" }}>JG</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>J Guni</h3>
                <p className="text-sm mb-5" style={{ color: "#9b97a0" }}>Founder &amp; Mentor</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {["Leadership", "Education", "Impact"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ color: "#f5c842", background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.2)", fontFamily: "'DM Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3"
                style={{ background: "#16161f", border: "1px solid rgba(245,200,66,0.15)", backdropFilter: "blur(10px)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs" style={{ color: "#9b97a0" }}>
                    <span className="text-white font-semibold">12+</span> years experience
                  </span>
                </div>
              </div>
              <div
                className="absolute -top-4 -left-4 rounded-xl px-4 py-3"
                style={{ background: "#16161f", border: "1px solid rgba(245,200,66,0.15)", backdropFilter: "blur(10px)" }}
              >
                <span className="text-2xl font-black block" style={{ fontFamily: "'Playfair Display', serif", color: "#f5c842" }}>5K+</span>
                <span className="text-xs" style={{ color: "#9b97a0" }}>lives impacted</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
              style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
            >
              <span className="text-xs tracking-widest uppercase" style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}>About</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Building Tomorrow&apos;s
              <span className="block italic" style={{ color: "#f5c842" }}>Leaders Today</span>
            </h2>

            <p className="leading-relaxed mb-6 text-lg" style={{ color: "#9b97a0" }}>
              J Guni is a passionate educator, mentor, and community builder dedicated to unlocking
              the potential in every young person. With over a decade of experience, the mission
              is simple: transform lives through education, mentorship, and meaningful programs.
            </p>

            <p className="leading-relaxed mb-10" style={{ color: "#9b97a0" }}>
              Our programs combine academic excellence with practical skill-building, creating a
              holistic environment where leaders are forged.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl transition-all duration-300 group cursor-default"
                  style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
                >
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs" style={{ color: "#5a5760" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
