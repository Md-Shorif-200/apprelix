"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  amount?: number;
};

const getOffset = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { x: 0, y: 28 };
    case "down":
      return { x: 0, y: -28 };
    case "left":
      return { x: -28, y: 0 };
    case "right":
      return { x: 28, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  amount = 0.15,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = getOffset(direction);

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
