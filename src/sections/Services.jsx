import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineCog,
  HiOutlineSparkles,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import { SERVICES } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

const ICONS = {
  "web-dev": HiOutlineCode,
  "rest-apis": HiOutlineLightningBolt,
  automation: HiOutlineCog,
  "ai-workflows": HiOutlineSparkles,
  "responsive-design": HiOutlineDeviceMobile,
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="services"
          title="What I can"
          highlight="help you with"
          description="Whether it's a full product build or a single automation, here's where I add the most value."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id] ?? HiOutlineCode;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-7 relative overflow-hidden group"
              >
                <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary-500/10 text-primary-500 text-2xl mb-5 transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="relative font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
