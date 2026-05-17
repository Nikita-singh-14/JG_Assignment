"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Programs", "Testimonials", "Community", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 border-b border-white/5"
          : "py-6"
      }`}
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110"
            style={{
              background: "#f5c842",
              color: "#0a0a0f",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            JG
          </div>
          <span
            className="font-bold text-lg text-white hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            J Guni
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-wide relative group"
              style={{ color: "#9b97a0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5c842")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9b97a0")}
            >
              {link}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "#f5c842" }}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center text-sm px-5 py-2.5 rounded-full font-medium transition-all duration-300"
          style={{
            border: "1px solid rgba(245,200,66,0.3)",
            color: "#f5c842",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#f5c842";
            (e.currentTarget as HTMLElement).style.color = "#0a0a0f";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#f5c842";
          }}
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-6 border-b border-white/5"
          style={{ background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col items-center gap-5 px-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm transition-colors duration-300"
                style={{ color: "#9b97a0" }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-sm px-6 py-2.5 rounded-full font-medium w-full text-center transition-all duration-300"
              style={{
                border: "1px solid rgba(245,200,66,0.3)",
                color: "#f5c842",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
