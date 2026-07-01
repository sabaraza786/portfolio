import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card overflow-hidden p-7"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="chip mb-3">{project.tag}</span>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-1 font-mono text-xs text-slate-400">{project.period}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="grid h-9 w-9 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 text-slate-500 dark:text-slate-400 transition-colors hover:text-primary-500 hover:border-primary-400"
          >
            <FaGithub />
          </a>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="grid h-9 w-9 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 text-slate-500 dark:text-slate-400 transition-colors hover:text-primary-500 hover:border-primary-400"
            >
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>

      <p className="relative mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {project.description}
      </p>

      <ul className="relative mt-4 space-y-1.5">
        {project.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-brand" />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="projects"
          title="Things I've"
          highlight="built"
          description="A mix of full-stack apps and AI automation workflows — each one solving a real, specific problem."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
