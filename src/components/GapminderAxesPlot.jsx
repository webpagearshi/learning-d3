import { scaleLinear, scaleSqrt, max, scaleOrdinal } from "d3";
import React, { useState } from "react";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";

const MARGIN = { top: 20, right: 20, bottom: 50, left: 60 };

// GapminderAxesPlot component to render a scatter plot with axes
function GapminderAxesPlot({ data, width = 800, height = 500 }) {
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales for x and y axes
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.gdpPercap)])
    .nice()
    .range([0, boundsWidth]);
  const yScale = scaleLinear()
    .domain([35, max(data, (d) => d.lifeExp)])
    .nice()
    .range([boundsHeight, 0]);

  // you need a sizeScale too!
  const sizeScale = scaleSqrt()
    .domain([0, max(data, (d) => d.pop)])
    .range([2, 35]);

  // color scale for continents
  const colorScale = scaleOrdinal()
    .domain(["Asia", "Europe", "Africa", "Americas", "Oceania"])
    .range(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]);

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      {/* SVG background */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#f1f1f1"
        fillOpacity={0.4}
      />
      {/* Bounds area */}
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {/* Loop for circles here! */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.gdpPercap)}
            cy={yScale(d.lifeExp)}
            r={sizeScale(d.pop)}
            fill={colorScale(d.continent)}
            fillOpacity={0.3}
            stroke={colorScale(d.continent)}
            strokeWidth={0.5}
          />
        ))}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={60}
            boundsHeight={boundsHeight}
            label="GDP per Capita"
          />
        </g>
        <AxisLeft
          yScale={yScale}
          pixelsPerTick={40}
          boundsWidth={boundsWidth}
          label="Life Expectancy"
        />
      </g>
    </svg>
  );
}
export default GapminderAxesPlot;
