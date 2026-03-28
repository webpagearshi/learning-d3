import React from "react";
import { scaleBand, scaleLinear } from "d3";

function HorizontalBarPlot({ data, width = 500, height = 600 }) {
  //create a scale for xAxis
  const xScale = scaleLinear().domain([0, 55]).range([0, width]);

  //create a scale for yAxis
  const yScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, height])
    .padding(0.2);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => (
        <g key={i}>
          <rect
            x={0}
            y={yScale(d.name)}
            width={xScale(d.count)}
            height={yScale.bandwidth()}
          />
        </g>
      ))}
    </svg>
  );
}

export default HorizontalBarPlot;
