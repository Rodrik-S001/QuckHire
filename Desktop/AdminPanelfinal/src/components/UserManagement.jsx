// components/UserManagement.jsx
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/UserManagement.css";

const UserManagement = () => {
  const [tab, setTab] = useState("client");
  const [clientList, setClientList] = useState([
    {
      id: 1,
      name: "Emily Thompson",
      email: "emily.thompson@example.com",
      joined: "2025-02-15",
      status: true,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Roberts",
      email: "michael.roberts@example.com",
      joined: "2025-01-20",
      status: true,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ]);

  const [professionalList, setProfessionalList] = useState([
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      joined: "2024-12-05",
      status: false,
      verified: true,
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      id: 4,
      name: "David Chen",
      email: "david.chen@example.com",
      joined: "2024-11-30",
      status: true,
      verified: false,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ]);

  const users = tab === "client" ? clientList : professionalList;

  const toggleStatus = (id) => {
    if (tab === "client") {
      setClientList((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: !user.status } : user
        )
      );
    } else {
      setProfessionalList((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: !user.status } : user
        )
      );
    }
  };

  return (
    <div className="user-management-wrapper">
      <div className="user-management-header">
        <h2>User Management</h2>
        <div className="user-tabs">
          <button
            onClick={() => setTab("client")}
            className={tab === "client" ? "active" : ""}
          >
            Clients
          </button>
          <button
            onClick={() => setTab("professional")}
            className={tab === "professional" ? "active" : ""}
          >
            Professionals
          </button>
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>USER</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>{tab === "client" ? "JOINED" : "VERIFIED"}</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="user-info">
                <img src={user.avatar} alt={user.name} />
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={user.status}
                    onChange={() => toggleStatus(user.id)}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                {tab === "client"
                  ? user.joined
                  : user.verified
                  ? "✅ Verified"
                  : "❌ Not Verified"}
              </td>
              <td className="action-icons">
                <FaEdit />
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="entry-count">
        Showing 1 to {users.length} of {clientList.length + professionalList.length} entries
      </div>
    </div>
  );
};

export default UserManagement;