import { scaleLinear, scaleSqrt, max, min } from "d3";
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
    .domain([0, max(data, (d) => d.lifeExp)])
    .range([boundsHeight, 0]);
  // you need a sizeScale too!
  const sizeScale = scaleSqrt()
    .domain([0, max(data, (d) => d.pop)])
    .range([4, 40]);
}
