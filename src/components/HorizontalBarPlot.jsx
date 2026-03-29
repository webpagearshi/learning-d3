import React from "react";
import { scaleBand, scaleLinear, max, range } from "d3";

function HorizontalBarPlot({ data, width = 750, height = data.length * 40 }) {
  //sort data by count
  const sortedData = [...data].sort((a, b) => b.count - a.count);
  //create a scale for xAxis
  const xScale = scaleLinear()
    .domain([0, max(sortedData, (d) => d.count)])
    .range([0, width - 100]);

  //create a scale for yAxis
  const yScale = scaleBand()
    .domain(sortedData.map((d) => d.name))
    .range([0, height])
    .padding(0.3);

  // Create ticks at interval of 5 (0 → max)
  const ticks = range(0, max(sortedData, (d) => d.count) + 5, 5);
  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      {/* -----------------------------
          GRIDLINES + TOP LABELS
      ----------------------------- */}
      {ticks.map((tick, i) => {
        const x = xScale(tick);

        return (
          <g key={i}>
            {/* Vertical gridline (skip 0) */}
            {tick !== 0 && (
              <line x1={x} x2={x} y1={0} y2={height} stroke="#e0e0e0" />
            )}

            {/* Tick label */}
            <text
              x={x}
              y={-8}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={11}
              fill={tick === 0 ? "#333" : "#666"}
              opacity={tick === 0 ? 1 : 0.7}
            >
              {tick}
            </text>
          </g>
        );
      })}

      {/* -----------------------------
          BARS + LABELS
      ----------------------------- */}

      {sortedData.map((d, i) => (
        <g key={i}>
          <rect
            x={0}
            y={yScale(d.name)}
            width={xScale(d.count)}
            height={yScale.bandwidth()}
            shapeRendering="crispEdges"
            fill="#076fa2"
          />

          {/* text label for count */}
          <text
            x={d.count > 7 ? 5 : xScale(d.count) + 5}
            y={yScale(d.name) + yScale.bandwidth() / 2}
            dominantBaseline="middle"
            fill={d.count > 7 ? "white" : "#076fa2"}
          >
            {d.name}
          </text>
        </g>
      ))}
      <line x1={0} y1={0} x2={0} y2={height} stroke="#808080" />
    </svg>
  );
}

export default HorizontalBarPlot;
