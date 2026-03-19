import React from "react";
import { useState } from "react";
import * as d3 from "d3";

// Barplot component to render a horizontal bar chart
function Barplot({ data }) {
  const width = 500;
  const height = 600;
  const margin = { top: 20, right: 30, bottom: 30, left: 100 };
  const [hovered, setHovered] = useState(null); // State to track which bar is hovered for tooltip
  const [tooltip, setTooltip] = useState(null); // State to store tooltip data (country and students) when hovering over a bar
  // Step 2: Create scales

  // Y scale (countries)
  const yScale = d3
    .scaleBand() // splits the vertical space into bands for each country
    .domain(data.map((d) => d.country)) // tells D3 to create a band for each country in the data
    .range([margin.top, height - margin.bottom]) // defines the vertical space for the bars, leaving margins at top and bottom
    .padding(0.25); // adds some space between the bars

  // X scale (students)
  const xScale = d3
    .scaleLinear() // makes numbers proportional to pixels
    .domain([0, d3.max(data, (d) => d.students)]) // sets the input domain from 0 to the maximum number of students in the data
    .range([margin.left, width - margin.right]); // defines the horizontal space for the bars, leaving margins on left and right

  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5f9cff" />
          <stop offset="100%" stopColor="#5254ac" />
        </linearGradient>
      </defs>

      {/* React used to render Bars. For each item in my data array make a bar and label*/}
      {data.map((d) => (
        <rect // Each bar is a rectangle
          key={d.country}
          x={xScale(0)} // Bars start at the x position corresponding to 0 students
          y={yScale(d.country)} // Bars are positioned vertically based on the country using the yScale
          width={xScale(d.students) - xScale(0)} // The width of the bar is determined by the number of students, scaled to pixels
          height={yScale.bandwidth()} // The height of the bar is the bandwidth of the yScale, which gives us the vertical space allocated for each country
          fill={hovered === d.country ? "url(#barGradient)" : "#055653"} // Change fill color when hovered
          rx={5} // Rounded corners for the bars
          // Event handlers for tooltip
          onMouseEnter={(e) => {
            setHovered(d.country);
            setTooltip({
              country: d.country,
              students: d.students,
              x: e.clientX, // Capture the x position of the mouse for tooltip placement
              y: e.clientY, // Capture the y position of the mouse for tooltip placement
            });
          }}
          onMouseMove={(e) => {
            setTooltip((prev) => ({
              ...prev, // Keep existing tooltip data (country and students)
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
      {/* Labels on bars */}
      {data.map((d) => (
        <text // Each label is a text element
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
      {/* Y-axis labels (countries) */}
      {data.map((d) => (
        <text //
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
      {/* X-axis line remove*/}
    </svg>
  );
}

export default Barplot;
