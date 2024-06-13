import React from 'react';
import { Logobar, Navbar, Sidebar } from "../components";
import { Routes, Route } from "react-router-dom";
import HistorySenduro from "../pages/HistorySenduro";
import HistoryDawuhan from "../pages/HistoryDawuhan";
import HistoryJatiroto from "../pages/HistoryJatiroto";

const History = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-11">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Navbar />
        </div>
        {/* Routes for HistorySenduro, HistoryDawuhan, HistoryJatiroto */}
        <Routes>
          <Route path="/history/senduro" element={<HistorySenduro />} />
          <Route path="/history/dawuhan" element={<HistoryDawuhan />} />
          <Route path="/history/jatiroto" element={<HistoryJatiroto />} />
        </Routes>
      </div>
    </div>
  );
};

export default History;
