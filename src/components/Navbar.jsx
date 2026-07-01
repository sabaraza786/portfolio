import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, PROFILE } from "../constants/data";
import ThemeToggle from "./ThemeToggle";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Navbar({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const { scrolled } = useScrollProgress(40);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 sm:mx-8 lg:mx-auto lg:max-w-6xl flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-soft dark:shadow-soft-dark" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="gradient-text">{PROFILE.initials}</span>
          <span className="ml-1 hidden sm:inline text-slate-700 dark:text-slate-200">
            {PROFILE.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-full transition-colors hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-500/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} className="hidden sm:grid" />
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !text-xs"
          >
            Let's Talk
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 text-slate-700 dark:text-slate-200 lg:hidden"
          >
            {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass shadow-soft dark:shadow-soft-dark lg:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-300"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-4 pt-3">
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary !px-5 !py-2.5 !text-xs"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
