import { motion } from "framer-motion";

/**
 * Full-screen loading sequence shown briefly on first paint.
 * Uses a typed-out monospace line to echo the "developer terminal" motif
 * used throughout the hero and skills sections.
 */
export default function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] grid place-items-center bg-dark"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold gradient-text"
        >
          SR
        </motion.div>
        <div className="font-mono text-xs text-slate-400">
          <span className="text-accent-400">$</span> booting portfolio
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            _
          </motion.span>
        </div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 bg-gradient-brand"
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
