import barChartPreview from "../assets/images/economist.png";
import bubbleChartPreview from "../assets/images/bubbleChart.png";

export const lessons = [
  {
    name: "Bar Chart",
    path: "/bar-chart",
    description: "Horizontal bar chart using D3+React",
    type: "bar",
  },
  {
    name: "Horizontal Bar Chart",
    path: "/horizontal-bar-chart",
    description: "Editorial style horizontal bar chart",
    type: "horizontal-bar",
    image: barChartPreview,
  },
  {
    name: "Gap Minder Axes Chart",
    path: "/gapminder-axes-chart",
    description: "Scatter plot with multiple axes using D3+React",
    type: "bubble-chart",
    image: bubbleChartPreview,
  },
];
