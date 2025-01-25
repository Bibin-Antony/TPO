// src/components/dashboard/TPODashboard.jsx
import React from 'react';
import Calendar from './Calendar';
import Stats from './Stats';
import QuickActions from './QuickActions';
import DriveStatus from './DriveStatus';
import Notifications from './Notifications';
import { BellIcon } from '@heroicons/react/24/outline';

const TPODashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">TPO Dashboard</h2>
          <p className="text-gray-600">Welcome back, Dr. Sharma</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <span className="text-gray-700 font-medium">IIT Delhi</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Stats Grid */}
      <Stats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Left Column */}
        <div className="col-span-8 space-y-6">
          <DriveStatus />
        </div>

        {/* Right Column */}
        <div className="col-span-4 space-y-6">
          <Calendar />
          <Notifications />
        </div>
      </div>
    </>
  );
};

export default TPODashboard;