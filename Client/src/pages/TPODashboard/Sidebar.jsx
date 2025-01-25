// src/components/dashboard/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './config/dashboardConfig';

const Sidebar = ({ currentTab, setCurrentTab }) => (
  <div className="w-64 bg-white h-screen shadow-lg fixed left-0 top-0 overflow-y-auto">
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold text-blue-600">TalentBridge</h1>
    </div>

    <nav className="mt-8 space-y-1 px-2">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 
              hover:text-blue-600 transition-colors ${currentTab === item.name.toLowerCase() ? 'bg-blue-50 text-blue-600' : ''
            }`}
          onClick={() => setCurrentTab(item.name.toLowerCase())}
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.name}
        </Link>
      ))}
    </nav>

    <div className="mt-8 p-4 border-t">
      <p className="text-sm text-gray-600 mb-2">Quick Stats</p>
      <div className="space-y-2">
        <div className="bg-blue-50 p-3 rounded">
          <p className="text-xs text-gray-600">Today's Interviews</p>
          <p className="text-lg font-semibold text-blue-600">24</p>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <p className="text-xs text-gray-600">Monthly Placements</p>
          <p className="text-lg font-semibold text-green-600">156</p>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;