// src/components/dashboard/Settings/Settings.jsx
import React, { useState } from 'react';
import { 
  UserIcon, 
  BellIcon, 
  ShieldCheckIcon, 
  KeyIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile Settings', icon: UserIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'appearance', name: 'Appearance', icon: PaintBrushIcon },
    { id: 'integrations', name: 'Integrations', icon: GlobeAltIcon }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Profile Picture</h3>
                <div className="flex gap-4 mt-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Upload New
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  defaultValue="Dr. Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  defaultValue="tpo@iitd.ac.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  defaultValue="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  defaultValue="Training & Placement Office"
                />
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
            {[
              { title: 'Email Notifications', description: 'Receive notifications via email' },
              { title: 'Push Notifications', description: 'Browser push notifications' },
              { title: 'SMS Alerts', description: 'Get important alerts via SMS' },
              { title: 'Drive Updates', description: 'Updates about placement drives' },
              { title: 'Student Applications', description: 'New student application alerts' }
            ].map((pref, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{pref.title}</h4>
                  <p className="text-sm text-gray-600">{pref.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={index < 3} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Password Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Update Password
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account
              </p>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
                Enable 2FA
              </button>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Theme Preferences</h3>
              <div className="grid grid-cols-3 gap-4">
                {['Light', 'Dark', 'System'].map((theme) => (
                  <button
                    key={theme}
                    className="p-4 border rounded-lg text-center hover:border-blue-600"
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Dashboard Layout</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span>Compact View</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span>Show Quick Stats</span>
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Email Server', status: 'Connected', icon: EnvelopeIcon },
                { name: 'Student Portal', status: 'Connected', icon: UserIcon },
                { name: 'SMS Gateway', status: 'Not Connected', icon: GlobeAltIcon },
                { name: 'College ERP', status: 'Connected', icon: KeyIcon }
              ].map((integration, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <integration.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{integration.name}</h4>
                        <p className={`text-sm ${
                          integration.status === 'Connected' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {integration.status}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm">
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>
          <nav className="flex space-x-6 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 border-b-2 font-medium ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;