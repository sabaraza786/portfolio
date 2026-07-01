import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDownload } from "react-icons/hi";
import { PROFILE, SOCIAL_LINKS } from "../constants/data";
import WorkflowGraph from "../components/WorkflowGraph";

function useTypedRoles(roles, typingSpeed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 2,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles, typingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles(PROFILE.roles);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden grid-bg px-6 sm:px-10 lg:px-24 pt-32 pb-20"
    >
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary-500/25 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-3xl animate-pulse-slow" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            available for internships &amp; entry-level roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="gradient-text">{PROFILE.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg sm:text-xl text-slate-600 dark:text-slate-300"
          >
            <span className="text-primary-500 dark:text-primary-400">&gt;</span>{" "}
            {typed}
            <span className="ml-0.5 inline-block w-[2px] h-5 align-middle bg-primary-500 animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="btn-primary"
            >
              View Projects
            </button>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <HiOutlineDownload /> View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 text-slate-500 dark:text-slate-400 transition-all hover:-translate-y-1 hover:text-primary-500 hover:border-primary-400"
              >
                <link.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile card + signature workflow graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-30 blur-2xl" />
            <div className="glass-card relative aspect-square w-full grid place-items-center rounded-[2rem] p-8 overflow-hidden">
              <img
                src="/profile.jpg"
                alt={PROFILE.name}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card mt-6 p-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
              live workflow
            </p>
            <WorkflowGraph className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:grid h-10 w-10 place-items-center rounded-full border border-dark-border/40 dark:border-white/15 text-slate-400"
      >
        <HiArrowDown />
      </motion.button>
    </section>
  );
}
