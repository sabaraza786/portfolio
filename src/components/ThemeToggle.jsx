import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeToggle({ isDark, toggleTheme, className = "" }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 bg-light-soft dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 ${className}`}
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg"
      >
        {isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
      </motion.span>
    </button>
  );
}
