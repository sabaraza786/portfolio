import { PROFILE, SOCIAL_LINKS, NAV_LINKS } from "../constants/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border/40 dark:border-white/10 px-6 sm:px-10 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            {PROFILE.initials}
          </a>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            {PROFILE.title} building scalable MERN apps and AI-driven automation.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Navigate
            </h4>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Connect
            </h4>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-primary-500"
                  >
                    <link.icon /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-dark-border/30 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
          © {year} {PROFILE.name}. Built with React &amp; Tailwind CSS.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
          {PROFILE.location}
        </p>
      </div>
    </footer>
  );
}
