"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma", role: "Software Engineer at Google",
    program: "Career Launchpad", initials: "PS", color: "#f5c842",
    quote: "The Career Launchpad program completely changed my trajectory. Within 3 months of completing it, I had offers from Google and two other top companies. The mock interviews and mentorship were unlike anything else out there.",
    stars: 5,
  },
  {
    name: "Arjun Mehta", role: "Founder, EdTech Startup",
    program: "Entrepreneurship Bootcamp", initials: "AM", color: "#ff8c42",
    quote: "I walked in with an idea and walked out with a business. The bootcamp gave me the frameworks, connections, and confidence to actually launch. We're now at $200K ARR just 8 months later. This community is magic.",
    stars: 5,
  },
  {
    name: "Kavya Reddy", role: "Marketing Director",
    program: "Leadership Academy", initials: "KR", color: "#42c9f5",
    quote: "Leadership Academy didn't just teach me to lead a team — it taught me to lead myself. The 12-week program was intense, personal, and profoundly transformative. I've recommended it to every ambitious person I know.",
    stars: 5,
  },
  {
    name: "Rahul Nair", role: "TEDx Speaker & Consultant",
    program: "Communication Mastery", initials: "RN", color: "#a855f7",
    quote: "After Communication Mastery, I gave my first TEDx talk and landed 3 consulting contracts from it. J Guni and the team have a gift for identifying and eliminating the blocks that hold you back. Truly life-changing.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}>Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stories of <span className="italic" style={{ color: "#f5c842" }}>Transformation</span>
          </h2>
        </div>

        {/* Main card */}
        <div
          key={current}
          className="rounded-2xl p-8 lg:p-14 relative overflow-hidden mb-6"
          style={{ background: "#111118", border: `1px solid ${t.color}20` }}
        >
          <div
            className="absolute top-0 right-0 rounded-full pointer-events-none"
            style={{ width: 240, height: 240, background: `radial-gradient(circle, ${t.color}06 0%, transparent 70%)` }}
          />
          <Quote size={40} style={{ color: "rgba(245,200,66,0.15)" }} className="mb-6" />
          <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-10 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                style={{ background: t.color, color: "#0a0a0f", fontFamily: "'Playfair Display', serif" }}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm mb-1.5" style={{ color: "#9b97a0" }}>{t.role}</p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}30`, fontFamily: "'DM Mono', monospace" }}
                >
                  {t.program}
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              {Array(t.stars).fill(0).map((_, i) => (
                <span key={i} className="text-lg" style={{ color: "#f5c842" }}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: i === current ? 32 : 8, background: i === current ? "#f5c842" : "rgba(255,255,255,0.15)" }}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#9b97a0" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#9b97a0" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Quick nav */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setCurrent(i)}
              className="p-4 rounded-xl text-left transition-all duration-300"
              style={{
                border: i === current ? "1px solid rgba(245,200,66,0.25)" : "1px solid rgba(255,255,255,0.05)",
                background: i === current ? "rgba(245,200,66,0.04)" : "#111118",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: item.color, color: "#0a0a0f" }}
                >
                  {item.initials}
                </div>
                <p className="text-xs text-white font-medium truncate">{item.name}</p>
              </div>
              <p className="text-xs truncate" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>{item.program}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
