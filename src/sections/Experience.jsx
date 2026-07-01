import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section bg-light-soft/60 dark:bg-white/[0.015]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="experience"
          title="How I've spent"
          highlight="my time building"
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-400 via-secondary-500 to-accent-400" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full bg-gradient-brand shadow-glow ring-4 ring-light dark:ring-dark" />
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                    <span className="chip">{item.period}</span>
                  </div>
                  <p className="text-sm font-mono text-primary-500 dark:text-primary-300 mb-3">
                    {item.org}
                  </p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
