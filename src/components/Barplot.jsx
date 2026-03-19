import React from "react";
import * as d3 from "d3";

function Barplot({ data }) {
  const width = 500;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 100 };

  // Step 2: Create scales

  // Y scale (countries)
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([margin.top, height - margin.bottom])
    .padding(0.1);

  // X scale (students)
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([margin.left, width - margin.right]);

  return (
    <svg width={width} height={height}>
      {/* Bars */}
      {data.map((d) => (
        <rect
          key={d.country}
          x={xScale(0)}
          y={yScale(d.country)}
          width={xScale(d.students) - xScale(0)}
          height={yScale.bandwidth()}
          fill="#00bcd4"
        />
      ))}

      {/* Labels on bars */}
      {data.map((d) => (
        <text
          key={d.country + "-label"}
          x={xScale(d.students) + 5}
          y={yScale(d.country) + yScale.bandwidth() / 2}
          alignmentBaseline="middle"
          fontSize={12}
          fill="#000"
        >
          {d.students}
        </text>
      ))}

      {/* Y-axis labels (countries) */}
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

      {/* X-axis line */}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={height - margin.bottom}
        y2={height - margin.bottom}
        stroke="#000"
      />
    </svg>
  );
}

export default Barplot;
