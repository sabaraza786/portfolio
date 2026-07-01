import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import SectionHeading from "../components/SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="flyrankai"
      className="section bg-light-soft/60 dark:bg-white/[0.015]"
    >
      <div className="section-inner">
        <SectionHeading
          eyebrow="experience"
          title="FlyRankAI"
          highlight="Frontend AI Engineer"
          description="Building polished frontend experiences and AI-driven product flows at FlyRankAI."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-white shadow-glow">
                <HiOutlineBriefcase className="text-lg" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Frontend AI Engineer
                </h3>
                <p className="text-sm font-mono text-primary-500 dark:text-primary-300">
                  FlyRankAI
                </p>
              </div>
            </div>
            <span className="chip">Present</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Focused on shipping responsive frontend interfaces, integrating
            AI-powered features, and collaborating on product experiences that
            feel fast, useful, and polished.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
              Built and refined user-facing flows for AI-assisted product
              experiences.
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
              Developed responsive UI components with attention to accessibility
              and motion.
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
              Worked across frontend and AI workflows to improve product clarity
              and speed.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
