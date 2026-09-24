"use client";
import { useEffect, useRef } from "react";
export function Reveal({ children, dir = "up", className = "" }: { children: React.ReactNode; dir?: "up" | "down" | "left" | "right"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${dir} ${className}`}>{children}</div>;
}
