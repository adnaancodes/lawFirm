import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Attorneys from "./pages/Attorneys";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurVision from "./pages/OurVision";
import PracticeAreas from "./pages/PracticeAreas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PracticeAreas />
      <OurVision />
      <Attorneys />
      <Contact />
    </div>
  );
}

export default App;
