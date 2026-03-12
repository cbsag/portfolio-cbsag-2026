"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.18
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-[rgba(var(--line),0.10)]">
      <motion.div className="h-full origin-left bg-[rgb(var(--fg))]" style={{ scaleX }} />
    </div>
  );
}
