"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let cancelled = false;

    // Run after hydration so AOS does not add aos-init during React's first pass
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;

        AOS.init({
          duration: 700,
          once: true,
          offset: 80,
          easing: "ease-out-cubic",
        });
        initialized.current = true;
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!initialized.current) return;
    AOS.refresh();
  }, [pathname]);

  return null;
};

export default AOSInit;
