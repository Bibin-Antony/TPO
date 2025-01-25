// src/components/dashboard/CompanyRelations/CompanyRelations.jsx
import React, { useState } from 'react';
import { 
  BuildingOfficeIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  CalendarIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

const CompanyRelations = () => {
  const [activeTab, setActiveTab] = useState('active');

  const companies = [
    {
      name: 'Google',
      status: 'active',
      industry: 'Technology',
      lastDrive: '2024-03-15',
      nextDrive: '2024-04-20',
      contact: {
        name: 'Sarah Johnson',
        email: 'sarah@google.com',
        phone: '+1 555-0123'
      },
      stats: {
        studentsHired: 45,
        avgPackage: '25 LPA',
        lastVisit: '1 month ago'
      }
    },
    {
      name: 'Microsoft',
      status: 'active',
      industry: 'Technology',
      lastDrive: '2024-02-28',
      nextDrive: '2024-05-10',
      contact: {
        name: 'Mike Chen',
        email: 'mike@microsoft.com',
        phone: '+1 555-0124'
      },
      stats: {
        studentsHired: 38,
        avgPackage: '21 LPA',
        lastVisit: '2 months ago'
      }
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header with Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Company Relations</h2>
          <p className="text-gray-600">Manage your partnerships with recruiting companies</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New Company
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: 'Total Partners', value: '250+', icon: BuildingOfficeIcon },
          { title: 'Active Relations', value: '180', icon: CalendarIcon },
          { title: 'This Month Visits', value: '12', icon: PhoneIcon },
          { title: 'Avg. Package', value: '18 LPA', icon: EnvelopeIcon }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company List */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* Tabs */}
        <div className="border-b px-6">
          <nav className="flex space-x-6">
            {['active', 'pending', 'archived'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Company Cards */}
        <div className="p-6 grid grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <p className="text-gray-600">{company.industry}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  company.status === 'active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Students Hired</p>
                  <p className="font-semibold">{company.stats.studentsHired}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Avg Package</p>
                  <p className="font-semibold">{company.stats.avgPackage}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Last Drive</p>
                  <p className="font-semibold">{company.lastDrive}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Next Drive</p>
                  <p className="font-semibold">{company.nextDrive}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Contact Person</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{company.contact.name}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <EnvelopeIcon className="w-4 h-4 mr-2" />
                    {company.contact.email}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {company.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  Schedule Meeting
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyRelations;