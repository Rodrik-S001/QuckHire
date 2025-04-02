// components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search verifications..."
        className="border border-gray-300 rounded px-4 py-2 w-1/3 text-sm focus:outline-none"
      />
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">John Anderson</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
