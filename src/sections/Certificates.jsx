import { motion } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { CERTIFICATES } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="section bg-light-soft/60 dark:bg-white/[0.015]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="certificates"
          title="Credentials &amp;"
          highlight="milestones"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-white text-lg mb-4">
                <HiOutlineBadgeCheck />
              </div>
              <h3 className="font-display font-semibold leading-snug">{cert.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {cert.issuer}
              </p>
              <span className="chip mt-4 inline-block">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
