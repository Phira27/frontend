import React from "react";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md flex justify-between items-center h-16 bg-white px-4">
      <div>
        <Link to="/">
          <KeyboardDoubleArrowLeft />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Tooltip title="About" placement="bottom">
          <Link to="/about" fontFamily="Poppins" className="text-blue-500  text-lg hover:text-blue-700">
            About
          </Link>
        </Tooltip>
        {/* Tambahkan tombol lainnya di sini jika diperlukan */}
      </div>
    </div>
  );
};

export default Navbar;
