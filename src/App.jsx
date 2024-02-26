import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RiderDashboard from "./pages/RiderDashboard.jsx";
import ComprehensiveRiderDashboard from "./pages/ComprehensiveRiderDashboard.jsx";
import HamburgerMenu from "./components/HamburgerMenu";
import FooterNavigation from "./components/FooterNavigation";

function App() {
  return (
    <>
      <HamburgerMenu />
      <Router>
        <Routes>
          <Route path="/" element={<ComprehensiveRiderDashboard />} />
          <Route path="/dashboard" element={<RiderDashboard />} />
        </Routes>
      </Router>
      <FooterNavigation />
    </>
  );
}

export default App;
