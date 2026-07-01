import { motion } from "framer-motion";

/**
 * Signature hero visual: an automation "node graph" reminiscent of n8n
 * workflow canvases — nodes representing Trigger -> AI -> Data -> Output,
 * connected by animated flowing dashes. This ties the visual identity
 * directly to Saba's AI-automation specialty instead of a generic blob/orb.
 */
const NODES = [
  { id: "trigger", x: 40, y: 60, label: "Trigger" },
  { id: "ai", x: 190, y: 30, label: "OpenAI" },
  { id: "data", x: 190, y: 140, label: "Airtable" },
  { id: "output", x: 340, y: 85, label: "Output" },
];

const EDGES = [
  ["trigger", "ai"],
  ["trigger", "data"],
  ["ai", "output"],
  ["data", "output"],
];

const nodeById = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function WorkflowGraph({ className = "" }) {
  return (
    <svg
      viewBox="0 0 380 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Animated diagram of an automation workflow connecting a trigger, AI, and data nodes to an output"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {EDGES.map(([from, to], i) => {
        const a = nodeById[from];
        const b = nodeById[to];
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edgeGradient)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, strokeDashoffset: [0, -24] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 + i * 0.15 },
              strokeDashoffset: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        );
      })}

      {NODES.map((node, i) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="20"
            className="fill-white dark:fill-[#161F35]"
            stroke="url(#edgeGradient)"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "backOut" }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="4.5"
            fill="url(#edgeGradient)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
          <text
            x={node.x}
            y={node.y + 34}
            textAnchor="middle"
            className="fill-slate-500 dark:fill-slate-400"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
