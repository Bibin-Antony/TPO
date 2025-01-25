import React from 'react';
import Sidebar from '../pages/TPODashboard/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;