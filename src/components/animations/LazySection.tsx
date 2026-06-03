"use client";

import AOS from "aos";
import { useEffect, useRef, useState, type ReactNode } from "react";

type LazySectionProps = {
  children: ReactNode;
  className?: string;
  /** Reserved height before content loads — reduces layout shift */
  minHeight?: string;
  /** Start loading before the section enters the viewport */
  rootMargin?: string;
};

export function LazySection({
  children,
  className,
  minHeight = "280px",
  rootMargin = "240px 0px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          requestAnimationFrame(() => AOS.refresh());
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={!visible ? { minHeight } : undefined}
    >
      {visible ? (
        children
      ) : (
        <div
          aria-hidden
          className="h-full rounded-3xl bg-ds-muted/20 animate-pulse"
          style={{ minHeight }}
        />
      )}
    </div>
  );
}
