import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RiderDashboard from "./pages/RiderDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<RiderDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
