import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
