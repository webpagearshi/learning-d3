import { Link } from "react-router-dom";
import GapminderAxesPlot from "../../components/GapminderAxesPlot";
import { data } from "../../data/gapminderData";

function GapminderAxesChart() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h2>Gapminder Axes Chart</h2>
      <GapminderAxesPlot data={data} />
    </div>
  );
}

export default GapminderAxesChart;
