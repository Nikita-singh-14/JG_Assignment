"use client";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,200,66,0.05) 0%, transparent 70%)" }}
      />
      {/* Concentric rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[300, 450, 600].map((size) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size, height: size,
              left: -size / 2, top: -size / 2,
              border: "1px solid rgba(245,200,66,0.05)",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
          style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}>Open Enrollment</span>
        </div>

        <h2
          className="text-5xl lg:text-7xl font-black text-white leading-none mb-8 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to
          <span className="block italic text-glow" style={{ color: "#f5c842" }}>Begin?</span>
        </h2>

        <p className="text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: "#9b97a0" }}>
          Your next chapter starts with a single decision. Join thousands of students
          who chose to invest in themselves — and never looked back.
        </p>

        {/* Email form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
          <div className="flex-1 relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#5a5760" }} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-11 pr-4 py-4 rounded-full text-white text-sm focus:outline-none transition-colors duration-300"
              style={{
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f0ede8",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(245,200,66,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
          <button
            className="group flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300"
            style={{ background: "#f5c842", color: "#0a0a0f" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fde68a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#f5c842")}
          >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <p className="text-xs" style={{ color: "#5a5760" }}>
          Free consultation. No credit card required. Cancel anytime.
        </p>

        {/* Social proof */}
        <div className="mt-14 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex -space-x-3">
            {["f5c842", "ff8c42", "42c9f5", "a855f7", "22c55e"].map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: `#${color}`, color: "#0a0a0f", border: "2px solid #0a0a0f" }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm" style={{ color: "#9b97a0" }}>
            <span className="text-white font-semibold">5,000+ students</span> already enrolled
          </p>
        </div>
      </div>
    </section>
  );
}
