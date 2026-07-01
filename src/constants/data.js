import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiBootstrap,
  SiFirebase,
  SiPostman,
  SiVite,
  SiNpm,
  SiN8N,
  SiAirtable,
  SiElevenlabs,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandVscode, TbBrandOpenai } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";

export const PROFILE = {
  name: "Saba Raza",
  initials: "SR",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "MERN Stack Developer",
    "AI Automation Builder",
    "Problem Solver",
  ],
  tagline:
    "I'm a passionate Software Engineer focused on building scalable web applications using the MERN Stack while exploring AI automation using tools like n8n and OpenAI. I enjoy solving real-world problems through clean code, intuitive user experiences, and workflow automation.",
  careerGoal:
    "To become a Full Stack Engineer building impactful products powered by AI.",
  location: "Gulberg 3, Lahore, Pakistan",
  email: "razasaba86@gmail.com",
  phone: "0313 4800613",
  resumeUrl:
    "https://drive.google.com/file/d/1hbnpCST1sE9PlxRxSo1XNhO35PnrshgA/view?usp=sharing",
  social: {
    github: "https://github.com/sabaraza786",
    linkedin: "https://linkedin.com/in/sabaraza",
    instagram: "https://www.instagram.com/_mailk_sr/",
    email: "mailto:razasaba86@gmail.com",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: PROFILE.social.github, icon: FaGithub },
  { label: "LinkedIn", href: PROFILE.social.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: PROFILE.social.instagram, icon: FaInstagram },
  { label: "Email", href: PROFILE.social.email, icon: HiOutlineMail },
];

export const ABOUT_COUNTERS = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Certificates", value: 3, suffix: "+" },
];

export const SKILL_GROUPS = [
  {
    id: "frontend",
    title: "Frontend",
    tag: "client",
    skills: [
      { name: "HTML5", level: 90, icon: FaHtml5 },
      { name: "CSS3", level: 88, icon: FaCss3Alt },
      { name: "JavaScript", level: 85, icon: SiJavascript },
      { name: "TypeScript", level: 70, icon: SiTypescript },
      { name: "React", level: 88, icon: FaReact },
      { name: "Redux Toolkit", level: 72, icon: SiRedux },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
      { name: "Bootstrap", level: 78, icon: SiBootstrap },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tag: "server",
    skills: [
      { name: "Node.js", level: 82, icon: FaNodeJs },
      { name: "Express.js", level: 80, icon: SiExpress },
      { name: "REST APIs", level: 85, icon: SiPostman },
      { name: "JWT Auth", level: 78, icon: SiJavascript },
    ],
  },
  {
    id: "database",
    title: "Database",
    tag: "storage",
    skills: [
      { name: "MongoDB", level: 82, icon: SiMongodb },
      { name: "Mongoose", level: 78, icon: SiMongodb },
      { name: "Firebase", level: 65, icon: SiFirebase },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    tag: "workflow",
    skills: [
      { name: "Git", level: 85, icon: FaGitAlt },
      { name: "GitHub", level: 88, icon: FaGithub },
      { name: "Postman", level: 80, icon: SiPostman },
      { name: "VS Code", level: 92, icon: TbBrandVscode },
      { name: "npm", level: 85, icon: SiNpm },
      { name: "Vite", level: 80, icon: SiVite },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    tag: "intelligence",
    skills: [
      { name: "n8n", level: 80, icon: SiN8N },
      { name: "OpenAI API", level: 78, icon: TbBrandOpenai },
      { name: "Airtable", level: 75, icon: SiAirtable },
      { name: "ElevenLabs", level: 60, icon: SiElevenlabs },
      { name: "AI Agents", level: 72, icon: BsRobot },
      { name: "Workflow Automation", level: 80, icon: SiN8N },
    ],
  },
];

export const PROJECTS = [
  {
    id: "dresscode-ai",
    title: "DressCode.AI",
    period: "Dec 2025 — Feb 2026",
    description:
      "A full-stack fashion platform with role-based access for Users, Designers, and Admins — plus an AI panel powered by the Gemini API for smart styling assistance.",
    features: [
      "Role-based access control",
      "Products, cart, orders & reviews",
      "Gemini API integration",
      "Complaint management system",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    tag: "Full-Stack · AI",
    links: { demo: "", github: PROFILE.social.github },
  },
  {
    id: "book-inventory-ai",
    title: "Book Inventory AI Automation",
    period: "Automation",
    description:
      "An AI-powered inventory workflow that lets a librarian update stock with a single prompt — the automation matches ISBNs and updates records without manual lookup.",
    features: [
      "Natural-language inventory updates",
      "Automatic ISBN matching",
      "Airtable as a live database",
      "OpenAI-driven parsing",
    ],
    tech: ["n8n", "OpenAI API", "Airtable", "ISBN Lookup"],
    tag: "AI Automation",
    links: { demo: "", github: PROFILE.social.github },
  },
  {
    id: "password-manager",
    title: "Password Manager",
    period: "May 2024",
    description:
      "A full-stack password manager that securely stores user credentials with a clean, responsive interface built on the MERN stack.",
    features: [
      "CRUD via RESTful APIs",
      "Secure credential storage",
      "Responsive Tailwind UI",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    tag: "Full-Stack",
    links: { demo: "", github: PROFILE.social.github },
  },
  {
    id: "todo-app",
    title: "To-Do App",
    period: "Feb 2024",
    description:
      "A responsive daily-task manager with add, delete, complete, and filter flows, persisting data locally between sessions.",
    features: [
      "Add / delete / complete tasks",
      "Filter by task status",
      "Local Storage persistence",
    ],
    tech: ["React", "Tailwind CSS", "React Icons"],
    tag: "Frontend",
    links: { demo: "", github: PROFILE.social.github },
  },
];

export const EXPERIENCE = [
  {
    id: "swe-student",
    role: "Software Engineering Student",
    org: "Self-directed Projects",
    period: "2022 — Present",
    points: [
      "Building personal projects centered on the MERN stack, REST APIs, and responsive web apps.",
      "Exploring AI automation workflows with n8n and the OpenAI API to connect real tools together.",
      "Shipping and iterating on projects end-to-end — from UI to database schema.",
    ],
  },
  {
    id: "automation-explorer",
    role: "AI Automation Builder",
    org: "Independent",
    period: "2025 — Present",
    points: [
      "Designed multi-step automations connecting Airtable, OpenAI, and ISBN lookups.",
      "Prototyped AI agents for practical, everyday workflow problems.",
      "Continuing to pair automation thinking with full-stack engineering.",
    ],
  },
];

export const EDUCATION = [
  {
    id: "bsit",
    degree: "BSIT — Bachelor of Science in Information Technology",
    school: "University of Education, Lahore",
    period: "09/2022 — 09/2026",
    detail: "CGPA: 3.4",
  },
];

export const CERTIFICATES = [
  {
    id: "cert-1",
    title: "MERN Stack Development",
    issuer: "Self-paced / Project-based",
    date: "2024",
  },
  {
    id: "cert-2",
    title: "AI Automation with n8n",
    issuer: "Self-paced / Project-based",
    date: "2025",
  },
  {
    id: "cert-3",
    title: "JavaScript & Problem Solving Fundamentals",
    issuer: "University Coursework",
    date: "2023",
  },
];

export const SERVICES = [
  {
    id: "web-dev",
    title: "Web Development",
    desc: "Responsive, production-ready web apps built with React and modern tooling.",
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    desc: "Secure, well-structured APIs with Node.js, Express, and JWT authentication.",
  },
  {
    id: "automation",
    title: "Automation",
    desc: "n8n workflows that connect your tools and remove repetitive manual work.",
  },
  {
    id: "ai-workflows",
    title: "AI Workflows",
    desc: "OpenAI-powered features — from smart search to natural-language actions.",
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    desc: "Interfaces that feel considered on everything from a phone to a wide desktop.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Placeholder — swap in a quote from a mentor, professor, or teammate once available.",
    name: "Your Mentor",
    role: "Project Supervisor",
  },
  {
    id: "t2",
    quote:
      "Placeholder — swap in feedback from a hackathon or team project collaborator.",
    name: "Teammate",
    role: "Collaborator",
  },
  {
    id: "t3",
    quote: "Placeholder — swap in a note from a client or internship reviewer.",
    name: "Reviewer",
    role: "Internship Lead",
  },
];
