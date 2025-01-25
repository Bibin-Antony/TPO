// src/components/dashboard/NotificationCenter/NotificationCenter.jsx
import React, { useState } from 'react';
import { 
  BellIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  InformationCircleIcon,
  TrashIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const NotificationCenter = () => {
  const [filter, setFilter] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'drive',
      title: 'New Placement Drive',
      message: 'Google is conducting a placement drive on April 20, 2024',
      time: '2 hours ago',
      isRead: false,
      priority: 'high',
      actionRequired: true,
      action: 'Verify eligibility criteria'
    },
    {
      id: 2,
      type: 'selection',
      title: 'Student Selections',
      message: '12 students have been selected at Microsoft',
      time: '1 day ago',
      isRead: true,
      priority: 'medium',
      actionRequired: false
    },
    {
      id: 3,
      type: 'verification',
      title: 'Document Verification',
      message: '15 student documents pending verification',
      time: '2 days ago',
      isRead: false,
      priority: 'low',
      actionRequired: true,
      action: 'Review pending documents'
    },
    {
      id: 4,
      type: 'academic',
      title: 'Academic Update',
      message: 'New batch results have been uploaded',
      time: '3 days ago',
      isRead: false,
      priority: 'medium',
      actionRequired: true,
      action: 'Update placement eligibility'
    }
  ];

  const notificationTypeIcons = {
    drive: EnvelopeIcon,
    selection: CheckCircleIcon,
    verification: DocumentTextIcon,
    academic: AcademicCapIcon,
    default: InformationCircleIcon
  };

  const getIcon = (type) => {
    return notificationTypeIcons[type] || notificationTypeIcons.default;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const filterNotifications = () => {
    if (filter === 'all') return notifications;
    if (filter === 'unread') return notifications.filter(n => !n.isRead);
    return notifications.filter(n => n.type === filter);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Notification Center</h2>
          <p className="text-gray-600 mt-1">
            {notifications.filter(n => !n.isRead).length} unread notifications
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => {/* Mark all as read logic */}}
          >
            Mark all as read
          </button>
          <button 
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => {/* Clear all logic */}}
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total', count: notifications.length, icon: BellIcon },
          { label: 'Unread', count: notifications.filter(n => !n.isRead).length, icon: ExclamationCircleIcon },
          { label: 'Action Required', count: notifications.filter(n => n.actionRequired).length, icon: DocumentTextIcon },
          { label: 'High Priority', count: notifications.filter(n => n.priority === 'high').length, icon: InformationCircleIcon }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.count}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <div className="flex gap-2">
          {['all', 'unread', 'drive', 'selection', 'verification', 'academic'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === type 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filterNotifications().map((notification) => (
          <div 
            key={notification.id}
            className={`bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md
              ${!notification.isRead ? 'border-l-4 border-blue-600' : ''}`}
          >
            <div className="flex gap-4">
              <div className={`p-2 rounded-lg flex-shrink-0 ${
                notification.isRead ? 'bg-gray-100' : 'bg-blue-100'
              }`}>
                {React.createElement(getIcon(notification.type), {
                  className: `w-6 h-6 ${notification.isRead ? 'text-gray-600' : 'text-blue-600'}`
                })}
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(notification.priority)}`}>
                    {notification.priority}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{notification.time}</span>
                    {notification.actionRequired && (
                      <span className="text-sm text-blue-600">
                        Action required: {notification.action}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => {/* Delete logic */}}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    {!notification.isRead && (
                      <button 
                        className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                        onClick={() => {/* Mark as read logic */}}
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filterNotifications().length === 0 && (
        <div className="text-center py-12">
          <BellIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;