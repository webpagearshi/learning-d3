import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import BarChart from "./pages/lessons/BarChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bar-chart" element={<BarChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
