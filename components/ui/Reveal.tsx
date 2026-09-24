"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Position among siblings; drives the 70ms stagger (capped at 6). */
  index?: number;
  className?: string;
  as?: "div" | "article" | "figure" | "li";
  style?: CSSProperties;
}

export function Reveal({ children, index = 0, className = "", as = "div", style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, "--d": `${Math.min(index, 6) * 70}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
