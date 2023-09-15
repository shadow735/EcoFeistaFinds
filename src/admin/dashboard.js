import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./dashboard.css"; // Import the CSS file for Dashboard component

const Dashboard = () => {
  return (
    <div className="StyledDashboard">
      <div className="SideNav">
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/summary"
        >
          Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/users"
        >
          Users
        </NavLink>
      </div>
      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
