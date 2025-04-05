import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout container-fluid p-0">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="row no-gutters">
        {/* Sidebar (3 columns) */}
        <div className="col-md-3 bg-light min-vh-100 border-end">
          <Sidebar />
        </div>

        {/* Main Content (9 columns) */}
        <div className="col-md-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
