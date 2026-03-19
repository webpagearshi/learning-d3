import { Link } from "react-router-dom";
import Barplot from "../../components/Barplot";
import { barData } from "../../data/barData";

function BarChart() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Bar Chart: Student Enrollment by Country</h2>
      <Barplot data={barData} />
    </div>
  );
}

export default BarChart;
