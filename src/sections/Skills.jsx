import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

function SkillBar({ skill, index }) {
  const Icon = skill.icon;
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <Icon className="text-primary-500" /> {skill.name}
        </span>
        <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-dark-border/20 dark:bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-brand"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-light-soft/60 dark:bg-white/[0.015]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="skills"
          title="A toolkit built for"
          highlight="full-stack + AI"
          description="From pixel-level UI to backend APIs and automation pipelines — here's what I reach for."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass-card p-6 sm:p-7 hover:shadow-glow transition-shadow duration-500"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <span className="chip">{group.tag}</span>
              </div>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
