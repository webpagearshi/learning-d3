import { Link } from "react-router-dom";
import HorizontalBarPlot from "../../components/HorizontalBarPlot";
import { data } from "../../data/labInfections";

function HorizontalBarChart() {
  console.log(data);
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "10px 20px",
        textAlign: "left",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ position: "relative", marginBottom: "12px" }}>
        {/* Red line */}
        <div
          style={{
            height: "2px",
            backgroundColor: "#e3120b",
            width: "80%",
          }}
        />

        {/* Small red rectangle attached below */}
        <div
          style={{
            position: "absolute",
            top: "2px", // exactly at bottom of line
            left: "0",
            width: "30px",
            height: "6px",
            backgroundColor: "#e3120b",
          }}
        />
      </div>
      <h2
        style={{
          margin: "0",
          fontWeight: "700",
          marginTop: "020px",
          fontSize: "20px",
        }}
      >
        Escape artists
      </h2>
      <p
        style={{
          margin: "5px 0 25px",
          color: "#555",
          fontSize: "16px",
        }}
      >
        Number of laboratory-acquired infections, 1970–2021
      </p>
      <HorizontalBarPlot data={data} />
      <p
        style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "#777",
          fontStyle: "bold",
        }}
      >
        Sources: Laboratory-Acquired Infection Database; American Biological
        Safety Association
      </p>

      <p
        style={{
          marginTop: "2px",
          fontSize: "12px",
          color: "#777",
          fontStyle: "bold",
        }}
      >
        The Economist
      </p>
    </div>
  );
}

export default HorizontalBarChart;
