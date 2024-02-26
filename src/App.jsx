import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RiderDashboard from "./pages/RiderDashboard.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import ComprehensiveRiderDashboard from "./pages/ComprehensiveRiderDashboard.jsx";
import HamburgerMenu from "./components/HamburgerMenu";
import FooterNavigation from "./components/FooterNavigation";

function App() {
  return (
    <>
      <HamburgerMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<ComprehensiveRiderDashboard />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </Router>
      <FooterNavigation />
    </>
  );
}

export default App;
