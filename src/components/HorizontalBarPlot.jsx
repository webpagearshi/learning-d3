import React from "react";
import { scaleBand, scaleLinear, max } from "d3";

function HorizontalBarPlot({ data, width = 650, height = 400 }) {
  //sort data by count
  const sortedData = [...data].sort((a, b) => b.count - a.count);
  //create a scale for xAxis
  const xScale = scaleLinear()
    .domain([0, max(sortedData, (d) => d.count)])
    .range([0, width]);

  //create a scale for yAxis
  const yScale = scaleBand()
    .domain(sortedData.map((d) => d.name))
    .range([0, height])
    .padding(0.3);

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
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
          <line x1={0} y1={12} x2={0} y2={390} stroke="#808080" />
        </g>
      ))}
    </svg>
  );
}

export default HorizontalBarPlot;
