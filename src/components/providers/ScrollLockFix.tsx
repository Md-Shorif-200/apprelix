"use client";

import { useEffect } from "react";

const resetScrollLockOffset = () => {
  if (!document.body.hasAttribute("data-scroll-locked")) return;

  document.body.style.setProperty("padding-right", "0", "important");
  document.body.style.setProperty("margin-right", "0", "important");
};

export default function ScrollLockFix() {
  useEffect(() => {
    const observer = new MutationObserver(resetScrollLockOffset);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked", "style"],
    });

    resetScrollLockOffset();

    return () => observer.disconnect();
  }, []);

  return null;
}
