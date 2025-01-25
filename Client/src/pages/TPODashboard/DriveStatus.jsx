// src/components/dashboard/DriveStatus.jsx
import React from 'react';
import { motion } from 'framer-motion';

const recentDrives = [
  {
    company: 'Google',
    role: 'Software Engineer',
    date: 'Apr 15',
    package: '25 LPA',
    status: 'In Progress',
    applicants: 145,
    selected: 0,
    logo: '/company-logos/google.svg',
    deadline: '2024-04-20',
    requirements: ['B.Tech/M.Tech', 'CGPA > 8.0', '0-1 years experience']
  },
  {
    company: 'Microsoft',
    role: 'Product Manager',
    date: 'Apr 12',
    package: '21 LPA',
    status: 'Completed',
    applicants: 89,
    selected: 12,
    logo: '/company-logos/microsoft.svg',
    deadline: '2024-04-15',
    requirements: ['B.Tech/MBA', 'CGPA > 7.5', 'Strong communication']
  }
];

const DriveCard = ({ drive }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="border rounded-lg p-6 hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          {drive.logo ? (
            <img src={drive.logo} alt={drive.company} className="w-8 h-8" />
          ) : (
            <span className="text-xl font-bold text-gray-500">{drive.company[0]}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{drive.company}</h4>
          <p className="text-gray-600">{drive.role}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        drive.status === 'In Progress' 
          ? 'bg-blue-100 text-blue-600' 
          : 'bg-green-100 text-green-600'
      }`}>
        {drive.status}
      </span>
    </div>

    <div className="grid grid-cols-4 gap-6 mt-6">
      <div>
        <p className="text-xs text-gray-500">Package</p>
        <p className="font-semibold text-gray-800">{drive.package}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Applicants</p>
        <p className="font-semibold text-gray-800">{drive.applicants}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Selected</p>
        <p className="font-semibold text-gray-800">{drive.selected}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Deadline</p>
        <p className="font-semibold text-gray-800">{drive.deadline}</p>
      </div>
    </div>

    <div className="mt-6">
      <p className="text-xs text-gray-500 mb-2">Requirements</p>
      <div className="flex flex-wrap gap-2">
        {drive.requirements.map((req, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
          >
            {req}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 flex gap-3">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
        View Details
      </button>
      {drive.status === 'In Progress' && (
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50">
          Send Reminder
        </button>
      )}
    </div>
  </motion.div>
);

const DriveStatus = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Recent Placement Drives</h3>
      <button className="text-blue-600 text-sm hover:underline">View All</button>
    </div>
    <div className="space-y-6">
      {recentDrives.map((drive, index) => (
        <DriveCard key={index} drive={drive} />
      ))}
    </div>
  </div>
);

export default DriveStatus;