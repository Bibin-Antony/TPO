// src/components/dashboard/Notifications.jsx
import React from 'react';
import { BellIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const notifications = [
  {
    type: 'info',
    title: 'New Drive: Amazon',
    time: '2 hours ago',
    icon: BellIcon,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    type: 'success',
    title: '12 Students Selected at Google',
    time: 'Yesterday',
    icon: CheckCircleIcon,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    type: 'warning',
    title: '10 Pending Verifications',
    time: 'Action Required',
    icon: XCircleIcon,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  }
];

const Notifications = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
    <div className="space-y-4">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`flex items-start p-3 ${notification.bgColor} rounded`}
        >
          <notification.icon className={`w-5 h-5 ${notification.iconColor} mt-1 mr-3`} />
          <div>
            <p className="text-sm font-medium">{notification.title}</p>
            <p className="text-xs text-gray-600">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;