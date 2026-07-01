import { useEffect, useState } from "react";

/**
 * useScrollProgress
 * Returns scroll progress (0-100) of the whole page,
 * plus a boolean for whether the user has scrolled past a threshold.
 */
export default function useScrollProgress(threshold = 80) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setScrolled(scrollTop > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { progress, scrolled };
}
