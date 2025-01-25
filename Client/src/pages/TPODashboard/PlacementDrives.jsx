// src/components/dashboard/PlacementDrives/PlacementDrives.jsx
import React, { useState } from 'react';
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  CurrencyRupeeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const PlacementDrives = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const stats = [
    {
      title: 'Active Drives',
      value: '12',
      increase: '+3',
      icon: BriefcaseIcon,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Applications',
      value: '1,247',
      increase: '+180',
      icon: UserGroupIcon,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Avg Package',
      value: '₹12 LPA',
      increase: '+15%',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Upcoming Drives',
      value: '8',
      increase: '+2',
      icon: CalendarIcon,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ];

  const drives = [
    {
      company: 'Google',
      role: 'Software Engineer',
      package: '25 LPA',
      date: '2024-04-20',
      eligibility: 'CGPA > 8.0',
      status: 'upcoming',
      applicants: 0,
      positions: 15
    },
    {
      company: 'Microsoft',
      role: 'Product Manager',
      package: '21 LPA',
      date: '2024-04-15',
      eligibility: 'CGPA > 7.5',
      status: 'active',
      applicants: 89,
      positions: 10
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
            <span className="text-sm text-green-600">{stat.increase} this month</span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create New Drive
        </button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
          Generate Report
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {['upcoming', 'active', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Drives List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Package
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {drives.map((drive, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      {drive.company[0]}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{drive.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{drive.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{drive.package}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{drive.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    drive.status === 'upcoming' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : drive.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {drive.status.charAt(0).toUpperCase() + drive.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacementDrives;