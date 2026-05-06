const TICK_LENGTH = 6;

export const AxisLeft = ({ yScale, pixelsPerTick, boundsWidth, label }) => {
  const range = yScale.range();
  const height = range[0] - range[1];
  const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

  return (
    <>
      <path
        d={["M", 0, range[0], "L", 0, range[1]].join(" ")}
        fill="none"
        stroke="currentColor"
      />
      {yScale
        .ticks(numberOfTicksTarget)
        .filter((d) => d >= 35)
        .map((value) => (
          <g key={value} transform={`translate(0, ${yScale(value)})`}>
            {/* Grid line */}
            <line
              x1={0}
              x2={boundsWidth}
              stroke="currentColor"
              opacity={0.1}
              strokeDasharray="2,2"
            />
            {/* Tick */}
            <line x2={-TICK_LENGTH} stroke="currentColor" />
            <text
              style={{
                fontSize: "10px",
                textAnchor: "middle",
                transform: "translateX(-20px)",
              }}
            >
              {value}
            </text>
          </g>
        ))}

      {/* Axis title — rotated 90° */}
      {label && (
        <text
          x={-height / 2}
          y={-45}
          fontSize={12}
          textAnchor="middle"
          transform="rotate(-90)"
        >
          {label}
        </text>
      )}
    </>
  );
};
