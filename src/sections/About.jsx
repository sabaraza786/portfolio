import { motion } from "framer-motion";
import { ABOUT_COUNTERS, PROFILE } from "../constants/data";
import SectionHeading from "../components/SectionHeading";
import useCountUp from "../hooks/useCountUp";

function Counter({ value, suffix, label }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="glass-card px-6 py-7 text-center">
      <p className="font-display text-3xl sm:text-4xl font-bold gradient-text">
        {animated}
        {suffix}
      </p>
      <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="about me"
            title="Turning ideas into"
            highlight="working products"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <span className="font-semibold text-slate-800 dark:text-white">
              Career goal —{" "}
            </span>
            {PROFILE.careerGoal}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 glass-card p-5 font-mono text-sm"
          >
            <div className="flex gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 text-[10px] text-slate-400">about.json</span>
            </div>
            <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-6">
{`{
  "based_in": "${PROFILE.location}",
  "stack": "MERN + AI Automation",
  "currently_learning": "AI Agents",
  "open_to": ["internships", "entry-level roles"]
}`}
            </pre>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:mt-16">
          {ABOUT_COUNTERS.map((c) => (
            <Counter key={c.label} value={c.value} suffix={c.suffix} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
