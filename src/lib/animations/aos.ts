export type AosAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "zoom-in-up";

export function getAosProps(
  animation: AosAnimation = "fade-up",
  delay = 0,
  duration = 700,
) {
  return {
    "data-aos": animation,
    "data-aos-delay": String(delay),
    "data-aos-duration": String(duration),
    "data-aos-once": "true",
  } as const;
}
