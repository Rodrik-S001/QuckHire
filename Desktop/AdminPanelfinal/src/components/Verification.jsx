// components/Verification.jsx
import React, { useState } from "react";
import { FaFileAlt, FaCheck, FaTimes } from "react-icons/fa";
import "../styles/Verification.css";

const Verification = () => {
  const [selected, setSelected] = useState([]);

  const users = [
    {
      id: 1,
      name: "Emma Williams",
      email: "emma.williams@example.com",
      docType: "Passport",
      date: "2025-03-26",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Alexander Martinez",
      email: "alex.martinez@example.com",
      docType: "ID Card",
      date: "2025-03-25",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Sophie Anderson",
      email: "sophie.anderson@example.com",
      docType: "Driver's License",
      date: "2025-03-24",
      status: "Rejected",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "William Taylor",
      email: "william.taylor@example.com",
      docType: "Passport",
      date: "2025-03-23",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Isabella Garcia",
      email: "isabella.garcia@example.com",
      docType: "ID Card",
      date: "2025-03-22",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="verification-wrapper">
      <div className="verification-header">
        <h2>Verification Management</h2>

        {selected.length > 0 && (
          <div className="bulk-actions">
            <button className="approve-btn">✔ Approve Selected</button>
            <button className="reject-btn">✘ Reject Selected</button>
          </div>
        )}
      </div>

      <div className="filters">
        <select><option>All Status</option></select>
        <select><option>All Types</option></select>
        <input type="date" />
      </div>

      <table className="verification-table">
        <thead>
          <tr>
            <th><input type="checkbox" disabled /></th>
            <th>User</th>
            <th>Type</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Documents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(user.id)}
                  onChange={() => toggleSelect(user.id)}
                />
              </td>
              <td className="user-info">
                <img src={user.avatar} alt={user.name} className="avatar" />
                <div>
                  <div className="name">{user.name}</div>
                  <div className="email">{user.email}</div>
                </div>
              </td>
              <td>{user.docType}</td>
              <td>{user.date}</td>
              <td>
                <span className={`status ${user.status}`}>{user.status}</span>
              </td>
              <td><FaFileAlt className="doc-icon" /></td>
              <td>
                <button className="approve-icon"><FaCheck /></button>
                <button className="reject-icon"><FaTimes /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Showing 1 to 10 of 45 entries</span>
        <div className="pages">
          <button className="page-btn">Previous</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
