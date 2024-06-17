import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import History from "../pages/History";
import HistorySenduro from "../pages/HistorySenduro";
import HistoryDawuhan from "../pages/HistoryDawuhan";
import HistoryJatiroto from "../pages/HistoryJatiroto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/senduro" element={<HistorySenduro />} />
        <Route path="/history/dawuhan" element={<HistoryDawuhan />} />
        <Route path="/history/jatiroto" element={<HistoryJatiroto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
