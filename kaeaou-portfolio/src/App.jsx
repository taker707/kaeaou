import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Hero from "./pages/Hero";
import Sketches from "./pages/Sketches";
import About from "./pages/About";
import Brochure from "./pages/Brochure";
import Moribloom from "./pages/Moribloom";
import Artbook from "./pages/Artbook";

function AppContent() {
  const location = useLocation();

  const isSketchesPage = location.pathname === "/sketches";

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sketches" element={<Sketches />} />
        <Route path="/about" element={<About />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/moribloom" element={<Moribloom />} />
        <Route path="/artbook" element={<Artbook />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
} 

export default App;