"use client";

const items = [
  "Leadership", "Mentorship", "Innovation", "Community",
  "Growth", "Empowerment", "Vision", "Excellence",
  "Collaboration", "Purpose", "Impact", "Resilience",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];
  return (
    <div
      className="py-5 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0d0d14" }}
    >
      <div className="flex gap-10 marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#5a5760", fontFamily: "'DM Mono', monospace" }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(245,200,66,0.35)", fontSize: "1.1rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
