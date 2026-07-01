import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { EDUCATION } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="education" title="Academic" highlight="background" />

        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 flex gap-5"
            >
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white text-xl">
                <HiOutlineAcademicCap />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-primary-500 dark:text-primary-300">
                  {edu.school}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{edu.period}</span>
                  <span className="chip">{edu.detail}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
