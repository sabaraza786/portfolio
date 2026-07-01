import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Fixed top progress bar reflecting scroll depth, using framer-motion's
 * native scroll hooks for smooth 60fps updates.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-brand z-[60]"
      aria-hidden="true"
    />
  );
}
