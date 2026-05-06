const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick, boundsHeight, label }) => {
  const range = xScale.range();
  const width = range[1] - range[0];
  const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

  return (
    <>
      <line
        x1={range[0]}
        y1={0}
        x2={range[1]}
        y2={0}
        stroke="currentColor"
        fill="none"
      />
      {xScale.ticks(numberOfTicksTarget).map((value) => (
        <g key={value} transform={`translate(${xScale(value)}, 0)`}>
          {/* Grid line */}
          <line y1={0} y2={-boundsHeight} stroke="currentColor" opacity={0.08} strokeDasharray={4,4} />
          {/* Tick */}
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}

      {/* Axis title */}
      {label && (
        <text x={width / 2} y={45} fontSize={12} textAnchor="middle">
          {label}
        </text>
      )}
    </>
  );
};
