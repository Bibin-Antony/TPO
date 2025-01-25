// src/components/dashboard/StudentManagement/StudentManagement.jsx
import React, { useState } from 'react';
import {
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const StudentManagement = () => {
  const [filter, setFilter] = useState('all');

  const stats = [
    { title: 'Total Students', value: '2,547', icon: UserGroupIcon },
    { title: 'Verified Profiles', value: '2,100', icon: CheckCircleIcon },
    { title: 'Placement Ready', value: '1,890', icon: AcademicCapIcon },
    { title: 'Pending Verifications', value: '45', icon: DocumentTextIcon }
  ];

  const departments = [
    { name: 'Computer Science', count: 450 },
    { name: 'Electronics', count: 380 },
    { name: 'Mechanical', count: 320 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Department Filter and Search */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept.name} value={dept.name}>{dept.name}</option>
            ))}
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">All Years</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
        <input
          type="search"
          placeholder="Search students..."
          className="px-4 py-2 border rounded-lg w-64"
        />
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CGPA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Sample student row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">JS</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">John Smith</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">Computer Science</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">3rd Year</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">8.5</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Verified
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-blue-600 hover:text-blue-900">View Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
        <span className="text-sm text-gray-700">
          Showing 1 to 10 of 2,547 students
        </span>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-4 py-2 border rounded bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;