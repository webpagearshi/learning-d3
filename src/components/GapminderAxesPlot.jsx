import { scaleLinear, scaleSqrt, max, scaleOrdinal } from "d3";
import React, { useState } from "react";

const MARGIN = { top: 40, right: 60, bottom: 40, left: 60 };

// GapminderAxesPlot component to render a scatter plot with axes
function GapminderAxesPlot({ data, width = 800, height = 500 }) {
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales for x and y axes
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.gdpPercap)])
    .range([0, boundsWidth]);
  const yScale = scaleLinear()
    .domain([35, max(data, (d) => d.lifeExp)])
    .range([boundsHeight, 0]);

  // you need a sizeScale too!
  const sizeScale = scaleSqrt()
    .domain([0, max(data, (d) => d.pop)])
    .range([4, 40]);

  // color scale for continents
  const colorScale = scaleOrdinal()
    .domain(["Asia", "Europe", "Africa", "Americas", "Oceania"])
    .range(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]);

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      {/* SVG background */}

      {/* Bounds area */}
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        <rect
          x={0}
          y={0}
          width={boundsWidth}
          height={boundsHeight}
          fill="#f1f1f1"
          fillOpacity={0.6}
        />
        {/* Loop for circles here! */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.gdpPercap)}
            cy={yScale(d.lifeExp)}
            r={sizeScale(d.pop)}
            fill={colorScale(d.continent)}
            fillOpacity={0.7}
          />
        ))}
      </g>
    </svg>
  );
}
export default GapminderAxesPlot;
