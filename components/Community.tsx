"use client";

const stats = [
  { value: "5,000+", label: "Active Members", icon: "👥" },
  { value: "120+", label: "Programs Delivered", icon: "📚" },
  { value: "50+", label: "Expert Mentors", icon: "🎓" },
  { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
];

const features = [
  { title: "Live Workshops", desc: "Interactive sessions with industry experts, held weekly across multiple time zones.", icon: "🎙️" },
  { title: "Peer Circles", desc: "Small accountability groups of 5–8 members to keep you on track and motivated.", icon: "🔗" },
  { title: "Resource Library", desc: "Access 500+ curated resources — templates, guides, toolkits, and recordings.", icon: "📖" },
  { title: "Job Board", desc: "Exclusive opportunities shared by our hiring partner network of 200+ companies.", icon: "💼" },
  { title: "1-on-1 Mentoring", desc: "Monthly deep-dive sessions with a dedicated mentor aligned to your goals.", icon: "🤝" },
  { title: "Alumni Network", desc: "Lifelong access to a global community of 5,000+ changemakers and leaders.", icon: "🌍" },
];

export default function Community() {
  return (
    <section id="community" className="py-32 px-6 relative overflow-hidden" style={{ background: "#0d0d14" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,200,66,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}>Community</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            You Don&apos;t Grow
            <span className="block italic" style={{ color: "#f5c842" }}>Alone</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#9b97a0" }}>
            Join a vibrant ecosystem of ambitious individuals, expert mentors, and limitless resources.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map(({ value, label, icon }) => (
            <div
              key={label}
              className="p-6 rounded-2xl text-center transition-all duration-300 group"
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <div className="text-3xl lg:text-4xl font-black mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#f5c842" }}>{value}</div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="p-6 rounded-2xl transition-all duration-300 group"
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,200,66,0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9b97a0" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
