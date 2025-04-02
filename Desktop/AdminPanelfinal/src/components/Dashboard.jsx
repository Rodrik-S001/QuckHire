// components/Dashboard.jsx
import React from "react";
import "../styles/Dashboard.css";
import { FaCheckCircle, FaClock, FaChartLine, FaUsers } from "react-icons/fa";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const lineData = [
  { name: 'Mon', value: 150 },
  { name: 'Tue', value: 220 },
  { name: 'Wed', value: 210 },
  { name: 'Thu', value: 190 },
  { name: 'Fri', value: 130 },
  { name: 'Sat', value: 160 },
  { name: 'Sun', value: 270 },
];

const pieData = [
  { name: 'Approved', value: 450 },
  { name: 'Pending', value: 220 },
  { name: 'Rejected', value: 150 },
];

const COLORS = ["#34d399", "#fbbf24", "#f87171"];

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <div className="card-header">
            <FaCheckCircle className="card-icon approved" />
            <span>Total Verifications</span>
          </div>
          <h3>2,847</h3>
          <p className="trend positive">⬆ 12.5% vs last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaClock className="card-icon pending" />
            <span>Pending Approvals</span>
          </div>
          <h3>156</h3>
          <p className="trend negative">⬇ 8.2% vs last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaChartLine className="card-icon rate" />
            <span>Approval Rate</span>
          </div>
          <h3>92.4%</h3>
          <p className="trend positive">⬆ 3.1% vs last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaUsers className="card-icon time" />
            <span>Avg Processing Time</span>
          </div>
          <h3>1.8h</h3>
          <p className="trend positive">⬇ 5.2% vs last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaUsers className="card-icon time" />
            <span>New Users</span>
          </div>
          <h3>1,324</h3>
          <p className="trend positive">⬆ 6.3% since last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaUsers className="card-icon time" />
            <span>Account Deletions</span>
          </div>
          <h3>74</h3>
          <p className="trend negative">⬇ 2.1% since last month</p>
        </div>
      </div>

      <div className="dashboard-graphs">
        <div className="graph-box">
          <h3>Verification Trends</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-box">
          <h3>Verification Status</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
