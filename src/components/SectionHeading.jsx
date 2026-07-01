import { motion } from "framer-motion";

/**
 * Consistent eyebrow + heading + optional description block,
 * used at the top of every page section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-lg mt-4">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-slate-500 dark:text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}
