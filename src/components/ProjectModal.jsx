import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AiCrmPreview from "../assets/projects/ai-crm-dashboard.svg";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        className="relative z-10 max-w-4xl w-full mx-4 bg-white dark:bg-slate-900 rounded-lg shadow-xl overflow-auto max-h-[90vh] p-6"
      >
        <header className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {project.tag} · {project.period}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
            >
              <FaGithub /> GitHub
            </a>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-2 rounded-md border px-3 py-2 text-sm"
            >
              Close
            </button>
          </div>
        </header>

        <div className="mt-5 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-52 w-full rounded-md bg-slate-100/60 dark:bg-slate-800/40 overflow-hidden">
              <img
                src={AiCrmPreview}
                alt={`${project.title} preview image — dashboard overview`}
                width={1200}
                height={700}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <section className="mt-5">
              <h3 className="font-medium">Overview</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </section>

            <section className="mt-5">
              <h3 className="font-medium">Key Features</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div>
              <h4 className="text-sm font-medium">Tech Stack</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium">Links</h4>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary-600"
                >
                  View repository
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary-600"
                  >
                    Open live demo
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
