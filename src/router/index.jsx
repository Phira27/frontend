import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistorySenduro from "../pages/HistorySenduro";
import HistoryDawuhan from "../pages/HistoryDawuhan";
import HistoryJatiroto from "../pages/HistoryJatiroto";


//ReactDOM.render(<Dashboard />, document.getElementById('root'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/senduro" element={<HistorySenduro />} />
        <Route path="/history/dawuhan" element={<HistoryDawuhan />} />
        <Route path="/history/jatiroto" element={<HistoryJatiroto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;


//<Route path="/history/senduro" element={<HistorySenduro />} />
//<Route path="/history/dawuhan" element={<HistoryDawuhan />} />
//<Route path="/history/jatiroto" element={<HistoryJatiroto />} />