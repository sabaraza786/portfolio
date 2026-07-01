import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import useScrollProgress from "../hooks/useScrollProgress";

export default function BackToTop() {
  const { scrolled } = useScrollProgress(480);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-white shadow-glow"
        >
          <HiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
