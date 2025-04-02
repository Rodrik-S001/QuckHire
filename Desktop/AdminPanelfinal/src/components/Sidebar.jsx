import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaShieldAlt, FaCog } from "react-icons/fa";
import "./Sidebar.css";
import logo from "../assets/logo.png"; // adjust path if needed

const Sidebar = () => {
  const navItems = [
    { to: "/", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/UserManagement", label: "User Management", icon: <FaUsers /> },
    { to: "/Verification", label: "Verification", icon: <FaShieldAlt /> },
    { to: "/Settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="QuickHire Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
