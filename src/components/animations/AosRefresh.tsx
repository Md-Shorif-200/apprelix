"use client";

import { useEffect } from "react";
import AOS from "aos";

/** Re-scan DOM for AOS elements after dynamic/lazy sections mount. */
export function AosRefresh() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return null;
}
