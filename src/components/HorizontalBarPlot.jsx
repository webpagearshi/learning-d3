import React from "react";
import { scaleBand, scaleLinear } from "d3";

function HorizontalBarPlot({ data }) {
  return (
    <svg width={width} height={height}>
      {allBars}
    </svg>
  );
}

export default HorizontalBarPlot;
