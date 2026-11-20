/* Dimensioned motor-mount plate. Lines draw on once at load (see globals.css). */
export default function PlateDrawing() {
  const line = { stroke: "#e0e7ff", strokeWidth: 1.6, fill: "none", pathLength: 1 } as const;
  const thin = { stroke: "#e0e7ff", strokeWidth: 1, fill: "none", pathLength: 1 } as const;
  return (
    <svg
      viewBox="0 0 520 440"
      role="img"
      aria-label="Technical drawing of a 300 by 260 millimeter motor mount plate with a 24 millimeter bore held to plus or minus 0.05 millimeters"
      className="w-full font-sans"
    >
      {/* plate outline */}
      <path className="draw" style={{ "--d": "0s" } as React.CSSProperties} {...line}
        d="M150 70H370L410 110V290L370 330H150L110 290V110Z" />
      {/* bore and holes */}
      <circle className="draw" style={{ "--d": "0.5s" } as React.CSSProperties} {...line} cx="260" cy="200" r="42" />
      {[[160, 120], [360, 120], [160, 280], [360, 280]].map(([x, y], i) => (
        <circle key={i} className="draw" style={{ "--d": "0.8s" } as React.CSSProperties} {...line} cx={x} cy={y} r="9" />
      ))}
      {[[260, 130], [260, 270], [190, 200], [330, 200]].map(([x, y], i) => (
        <circle key={i} className="draw" style={{ "--d": "1s" } as React.CSSProperties} {...thin} cx={x} cy={y} r="6" />
      ))}

      <g className="reveal" stroke="#e0e7ff" strokeWidth="1" fill="none">
        {/* centerlines */}
        <path d="M95 200H425M260 55V345" strokeDasharray="14 4 3 4" opacity="0.55" />
        {/* horizontal dimension */}
        <path d="M110 334V386M410 334V386M110 378H410M110 372V384M410 372V384" />
        {/* vertical dimension */}
        <path d="M414 70H462M414 330H462M454 70V330M448 70H460M448 330H460" />
        {/* leader */}
        <path d="M290 170L312 150H398" />
        {/* title block */}
        <path d="M110 400H410V432H110ZM270 400V432" />
      </g>

      <g className="reveal" fill="#e0e7ff" fontSize="12">
        <text x="260" y="370" textAnchor="middle">300.0</text>
        <text x="0" y="0" textAnchor="middle" transform="translate(442 200) rotate(-90)">260.0</text>
        <text x="316" y="144">Ø24.00 ±0.05</text>
        <text x="120" y="420">Motor mount plate</text>
        <text x="280" y="420">7075-T6, ±0.05 mm</text>
        <text x="120" y="187" fontSize="10" opacity="0.8">4X Ø3.20 THRU</text>
      </g>
    </svg>
  );
}
