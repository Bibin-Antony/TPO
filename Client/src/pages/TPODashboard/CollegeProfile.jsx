// src/components/dashboard/CollegeProfile/CollegeProfile.jsx
import React from 'react';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const CollegeProfile = () => {
  const collegeInfo = {
    name: "Indian Institute of Technology Delhi",
    established: "1961",
    location: "New Delhi, India",
    students: "10,000+",
    departments: [
      { name: "Computer Science", students: 450, faculty: 45 },
      { name: "Electronics", students: 380, faculty: 38 },
      { name: "Mechanical", students: 320, faculty: 32 }
    ],
    placementStats: {
      avgPackage: "16.5 LPA",
      highestPackage: "45 LPA",
      placementRate: "95%",
      totalCompanies: "250+"
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* College Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center">
              <AcademicCapIcon className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{collegeInfo.name}</h1>
              <div className="mt-2 flex gap-4 text-gray-600">
                <span className="flex items-center">
                  <BuildingOfficeIcon className="w-5 h-5 mr-2" />
                  Est. {collegeInfo.established}
                </span>
                <span className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  {collegeInfo.location}
                </span>
                <span className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2" />
                  {collegeInfo.students} Students
                </span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-3 gap-6">
        {collegeInfo.departments.map((dept) => (
          <div key={dept.name} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">{dept.name}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Students</span>
                <span className="font-semibold">{dept.students}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Faculty</span>
                <span className="font-semibold">{dept.faculty}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Ratio</span>
                <span className="font-semibold">1:{Math.round(dept.students/dept.faculty)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placement Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Placement Statistics</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{collegeInfo.placementStats.avgPackage}</div>
            <p className="text-gray-600 mt-2">Average Package</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{collegeInfo.placementStats.highestPackage}</div>
            <p className="text-gray-600 mt-2">Highest Package</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{collegeInfo.placementStats.placementRate}</div>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">{collegeInfo.placementStats.totalCompanies}</div>
            <p className="text-gray-600 mt-2">Partner Companies</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Lecture Halls</span>
              <span>50+</span>
            </div>
            <div className="flex justify-between">
              <span>Labs</span>
              <span>30+</span>
            </div>
            <div className="flex justify-between">
              <span>Libraries</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>Hauz Khas, New Delhi - 110016</span>
            </div>
            <div className="flex items-center">
              <BuildingOfficeIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>tpo@iitd.ac.in</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>+91 11 2659 1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;