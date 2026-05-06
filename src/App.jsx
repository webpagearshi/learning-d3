import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import BarChart from "./pages/lessons/BarChart";
import HorizontalBarChart from "./pages/lessons/HorizontalBarChart";
import GapminderAxesChart from "./pages/lessons/GapminderAxesChart";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bar-chart" element={<BarChart />} />
          <Route path="horizontal-bar-chart" element={<HorizontalBarChart />} />
          <Route path="gapminder-axes-chart" element={<GapminderAxesChart />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
