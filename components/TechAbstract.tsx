/**
 * TechAbstract.tsx
 *
 * Network graph SVG — a sparse node-link diagram representing
 * connected systems (graph theory / neural network topology).
 * Entirely built with SVG, no image files needed.
 * Two nodes pulse gently to suggest liveness.
 */
export default function TechAbstract() {
  // Node positions: [x, y, radius, type]
  // type: "hub" | "node" | "accent"
  const nodes = [
    { x: 230, y: 55,  r: 4.5, type: "hub" },     // 0 — top hub
    { x: 72,  y: 138, r: 3,   type: "node" },    // 1
    { x: 355, y: 118, r: 3,   type: "node" },    // 2
    { x: 152, y: 228, r: 6,   type: "accent" },  // 3 — primary accent node
    { x: 308, y: 196, r: 3.5, type: "hub" },     // 4
    { x: 85,  y: 316, r: 3,   type: "node" },    // 5
    { x: 258, y: 318, r: 4.5, type: "hub" },     // 6
    { x: 398, y: 278, r: 2.5, type: "node" },    // 7
    { x: 178, y: 398, r: 2.5, type: "node" },    // 8
    { x: 340, y: 388, r: 3,   type: "node" },    // 9
    { x: 44,  y: 220, r: 2,   type: "node" },    // 10
    { x: 420, y: 160, r: 2,   type: "node" },    // 11
  ];

  // Edges: [nodeIndex, nodeIndex]
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 3], [1, 5], [1, 10],
    [2, 4], [2, 11],
    [3, 4], [3, 5], [3, 6],
    [4, 6], [4, 7], [4, 11],
    [5, 6], [5, 8],
    [6, 7], [6, 8], [6, 9],
    [8, 9],
  ];

  const nodeColor = (type: string) => {
    switch (type) {
      case "accent":  return "var(--color-accent)";
      case "hub":     return "var(--color-text-muted)";
      default:        return "var(--color-border)";
    }
  };

  return (
    <svg
      viewBox="0 0 460 450"
      aria-hidden="true"
      focusable="false"
      className="w-full h-full"
      style={{ maxHeight: "460px" }}
    >
      {/* Dot grid background */}
      <defs>
        <pattern
          id="dotgrid"
          x="0"
          y="0"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="var(--color-border)" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="460" height="450" fill="url(#dotgrid)" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--color-border)"
          strokeWidth="1"
          opacity="0.7"
        />
      ))}

      {/* Accent node glow — subtle ring */}
      <circle
        cx={nodes[3].x}
        cy={nodes[3].y}
        r={18}
        fill="var(--color-accent)"
        opacity="0.08"
        className="svg-node-primary"
      />
      <circle
        cx={nodes[3].x}
        cy={nodes[3].y}
        r={12}
        fill="var(--color-accent)"
        opacity="0.12"
      />

      {/* Secondary ring on hub node */}
      <circle
        cx={nodes[6].x}
        cy={nodes[6].y}
        r={12}
        fill="var(--color-text-muted)"
        opacity="0.08"
        className="svg-node-secondary"
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={nodeColor(node.type)}
          opacity={node.type === "accent" ? 1 : node.type === "hub" ? 0.75 : 0.45}
          className={
            i === 3
              ? "svg-node-primary"
              : i === 6
              ? "svg-node-secondary"
              : ""
          }
        />
      ))}

      {/* Accent node label — small mono text */}
      <text
        x={nodes[3].x + 10}
        y={nodes[3].y - 10}
        fontSize="7.5"
        fontFamily="var(--font-jetbrains), monospace"
        fill="var(--color-accent)"
        opacity="0.7"
      >
        node.active
      </text>

      {/* Corner coordinate label — subtle tech detail */}
      <text
        x="8"
        y="440"
        fontSize="7"
        fontFamily="var(--font-jetbrains), monospace"
        fill="var(--color-border)"
        opacity="0.9"
      >
        graph.topology [ n=12 ]
      </text>
    </svg>
  );
}
