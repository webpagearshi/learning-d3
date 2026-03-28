import { Link } from "react-router-dom";
import HorizontalBarPlot from "../../components/HorizontalBarPlot";
import { data } from "../../data/labInfections";

function HorizontalBarChart() {
  console.log(data);
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h2>Escape Artists</h2>
      <HorizontalBarPlot data={data} />
    </div>
  );
}

export default HorizontalBarChart;
