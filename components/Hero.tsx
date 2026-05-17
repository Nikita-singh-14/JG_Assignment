"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: {
      x: number; y: number; size: number;
      speedX: number; speedY: number; opacity: number;
    }[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,200,66,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 rounded-full"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(255,140,66,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,200,66,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{ border: "1px solid rgba(245,200,66,0.2)", background: "rgba(245,200,66,0.05)" }}
        >
          <Sparkles size={14} style={{ color: "#f5c842" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#f5c842", fontFamily: "'DM Mono', monospace" }}
          >
            Empowering Young Leaders
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-8 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="block text-white">Transform</span>
          <span className="block italic shimmer-text">Your Future</span>
          <span className="block text-white">with Purpose</span>
        </h1>

        {/* Sub */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-12" style={{ color: "#9b97a0" }}>
          A platform built to nurture the next generation of changemakers — through
          mentorship, skill-building, and a community that lifts you higher.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#programs"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 pulse-glow"
            style={{ background: "#f5c842", color: "#0a0a0f" }}
          >
            Explore Programs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "5K+", label: "Students" },
            { value: "120+", label: "Programs" },
            { value: "98%", label: "Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "#f5c842" }}
              >
                {value}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(245,200,66,0.4), transparent)" }}
        />
        <span className="text-xs tracking-widest uppercase" style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
