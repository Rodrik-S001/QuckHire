import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import Verification from "./components/Verification";

function App() {
  return (
    <Router>
      <div className="app-layout" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/UserManagement" element={<UserManagement />} />
            <Route path="/Verification" element={<Verification />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
