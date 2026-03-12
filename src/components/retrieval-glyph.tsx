"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "q", x: 82, y: 112, r: 5, label: "query" },
  { id: "r1", x: 146, y: 72, r: 4, label: "retrieval" },
  { id: "r2", x: 146, y: 152, r: 4, label: "rank" },
  { id: "hub", x: 224, y: 112, r: 7, label: "context" },
  { id: "evi", x: 304, y: 74, r: 4, label: "evidence" },
  { id: "out", x: 344, y: 112, r: 6, label: "answer" }
];

export default function RetrievalGlyph({ compact = false }: { compact?: boolean }) {
  const width = 420;
  const height = 224;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={compact ? "h-44 w-full" : "h-60 w-full"}
        style={{ color: "rgb(var(--line))" }}
      >
        <defs>
          <filter id="glyph-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blurred" />
            <feColorMatrix
              in="blurred"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .7 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="210"
          cy="112"
          r={compact ? "72" : "82"}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <circle
          cx="210"
          cy="112"
          r={compact ? "106" : "116"}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="3 9"
        />

        <motion.circle
          r="3.4"
          fill="currentColor"
          fillOpacity="0.92"
          filter="url(#glyph-glow)"
          animate={{
            cx: [82, 146, 224, 304, 344],
            cy: [112, 72, 112, 74, 112]
          }}
          transition={{ duration: 2.9, ease: "linear", repeat: Infinity }}
        />

        <motion.circle
          r="3"
          fill="currentColor"
          fillOpacity="0.78"
          filter="url(#glyph-glow)"
          animate={{
            cx: [82, 146, 224, 304, 344],
            cy: [112, 152, 112, 74, 112]
          }}
          transition={{ duration: 3.5, ease: "linear", repeat: Infinity, delay: 0.55 }}
        />

        <motion.circle
          cx="224"
          cy="112"
          r="16"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
          animate={{ r: [14, 20, 14], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.circle
          cx="344"
          cy="112"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1"
          animate={{ r: [12, 18, 12], opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
        />

        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + (node.id === "hub" || node.id === "out" ? 1 : 0)}
              fill={
                node.id === "out"
                  ? "currentColor"
                  : node.id === "hub"
                    ? "currentColor"
                    : "currentColor"
              }
              fillOpacity={node.id === "out" ? "0.95" : node.id === "hub" ? "0.12" : "0.08"}
              stroke={node.id === "out" ? "none" : "currentColor"}
              strokeOpacity={node.id === "out" ? undefined : "0.22"}
              strokeWidth="1"
              filter={node.id === "out" ? "url(#glyph-glow)" : undefined}
            />
            {!compact ? (
              <text
                x={node.x}
                y={node.y + 18}
                textAnchor="middle"
                fontSize="10"
                style={{ fill: "rgb(var(--muted))", opacity: 0.92, fontFamily: "var(--font-mono)" }}
              >
                {node.label}
              </text>
            ) : null}
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="glyph-ring h-56 w-56 rounded-full opacity-70" />
      </div>
    </div>
  );
}
