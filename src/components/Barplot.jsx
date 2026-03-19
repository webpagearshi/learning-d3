import React, { useState } from "react";
import * as d3 from "d3";

// Barplot component to render a horizontal bar chart
function Barplot({ data }) {
  const width = 500;
  const height = 600;
  const margin = { top: 20, right: 30, bottom: 30, left: 100 };

  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  // Y scale
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([margin.top, height - margin.bottom])
    .padding(0.25);

  // X scale
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([margin.left, width - margin.right]);

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5f9cff" />
            <stop offset="100%" stopColor="#5254ac" />
          </linearGradient>
        </defs>

        {/* Bars */}
        {data.map((d) => (
          <rect
            key={d.country}
            x={xScale(0)}
            y={yScale(d.country)}
            width={xScale(d.students) - xScale(0)}
            height={yScale.bandwidth()}
            fill={hovered === d.country ? "url(#barGradient)" : "#055653"}
            rx={5}
            onMouseEnter={(e) => {
              setHovered(d.country);
              setTooltip({
                country: d.country,
                students: d.students,
                x: e.clientX,
                y: e.clientY,
              });
            }}
            onMouseMove={(e) => {
              setTooltip((prev) => ({
                ...prev,
                x: e.clientX,
                y: e.clientY,
              }));
            }}
            onMouseLeave={() => {
              setHovered(null);
              setTooltip(null);
            }}
            style={{ transition: "fill 0.3s ease" }}
          />
        ))}

        {/* Value Labels */}
        {data.map((d) => (
          <text
            key={d.country + "-label"}
            x={xScale(d.students) + 5}
            y={yScale(d.country) + yScale.bandwidth() / 2}
            alignmentBaseline="middle"
            fontSize={hovered === d.country ? 16 : 12}
            fill={hovered === d.country ? "#5f5495" : "#000"}
          >
            {d.students}
          </text>
        ))}

        {/* Y-axis Labels */}
        {data.map((d) => (
          <text
            key={d.country + "-yaxis"}
            x={margin.left - 5}
            y={yScale(d.country) + yScale.bandwidth() / 2}
            textAnchor="end"
            alignmentBaseline="middle"
            fontSize={12}
            fill="#000"
          >
            {d.country}
          </text>
        ))}
      </svg>

      {/* ✅ Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 40,
            top: tooltip.y + 20,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "12px",
            pointerEvents: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <div>
            <strong style={{ fontSize: "14px" }}>{tooltip.country}</strong>
          </div>
          <div>{tooltip.students} students</div>
        </div>
      )}
    </div>
  );
}

export default Barplot;
