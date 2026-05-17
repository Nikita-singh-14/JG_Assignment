"use client";

const links: Record<string, string[]> = {
  Programs: ["Leadership Academy", "Career Launchpad", "Entrepreneurship Bootcamp", "Communication Mastery"],
  Company: ["About", "Our Mission", "Blog", "Press"],
  Community: ["Discord", "Alumni Network", "Events", "Partnerships"],
  Support: ["FAQ", "Contact", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6" style={{ background: "#0a0a0f", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: "#f5c842", color: "#0a0a0f", fontFamily: "'DM Mono', monospace" }}
              >
                JG
              </div>
              <span className="font-bold text-xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>J Guni</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#9b97a0" }}>
              Empowering the next generation of leaders through mentorship, education, and community.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "▶", "📸"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#9b97a0" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,200,66,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#f5c842";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#9b97a0";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs uppercase tracking-widest mb-5"
                style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300"
                      style={{ color: "#9b97a0" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5c842")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b97a0")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>
            © 2024 J Guni. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
