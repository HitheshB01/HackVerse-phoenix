import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import BottomNavBar from "./BottomNavbar"; // Corrected casing

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavbar />
      <div className=" pb-20">
        <Outlet /> {/* This will render the current page content */}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Layout;