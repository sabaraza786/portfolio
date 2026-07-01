import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineCheckCircle } from "react-icons/hi";
import { PROFILE, SOCIAL_LINKS } from "../constants/data";
import SectionHeading from "../components/SectionHeading";

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!form.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // No backend wired up yet — falls back to opening the user's mail client
    // pre-filled with the message so the form is fully usable out of the box.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionHeading
            eyebrow="contact"
            title="Let's build something"
            highlight="together"
            description="Open to internships and entry-level Software Engineer, MERN, AI Automation, and Full-Stack roles. Reach out — I reply fast."
          />

          <div className="space-y-4">
            <a
              href={PROFILE.social.email}
              className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-primary-400/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-white text-lg shrink-0">
                <HiOutlineMail />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Email
                </p>
                <p className="text-sm font-medium">{PROFILE.email}</p>
              </div>
            </a>

            <div className="glass-card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-white text-lg shrink-0">
                <HiOutlineLocationMarker />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Location
                </p>
                <p className="text-sm font-medium">{PROFILE.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-dark-border/50 dark:border-white/15 text-slate-500 dark:text-slate-400 transition-all hover:-translate-y-1 hover:text-primary-500 hover:border-primary-400"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card p-7 sm:p-9 space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full rounded-xl border border-dark-border/50 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-dark-border/50 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              className="w-full resize-none rounded-xl border border-dark-border/50 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-500"
            >
              <HiOutlineCheckCircle /> Opening your email client to send this along.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
