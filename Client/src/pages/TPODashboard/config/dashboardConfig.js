// src/components/dashboard/config/dashboardConfig.js

import {
  ChartBarIcon, UserGroupIcon, BriefcaseIcon, CalendarIcon, BellIcon,
  DocumentTextIcon, AcademicCapIcon, CogIcon, EnvelopeIcon, BuildingOfficeIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

export const navItems = [
  { name: 'Overview', icon: ChartBarIcon, path: '/dashboard/tpo' }, // Adjusted path to match the nested route
  { name: 'Student Management', icon: UserGroupIcon, path: '/dashboard/tpo/students' },
  { name: 'Placement Drives', icon: BriefcaseIcon, path: '/dashboard/tpo/drives' },
  { name: 'College Profile', icon: AcademicCapIcon, path: '/dashboard/tpo/profile' },
  { name: 'Company Relations', icon: BuildingOfficeIcon, path: '/dashboard/tpo/companies' },
  { name: 'Analytics', icon: PresentationChartLineIcon, path: '/dashboard/tpo/analytics' },
  { name: 'Notifications', icon: BellIcon, path: '/dashboard/tpo/notifications' },
  { name: 'Settings', icon: CogIcon, path: '/dashboard/tpo/settings' }
];

export const actions = [
  { 
    name: 'Create Drive', 
    icon: BriefcaseIcon,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Post new placement opportunity'
  },
  { 
    name: 'Send Notice', 
    icon: EnvelopeIcon,
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Broadcast announcements'
  },
  { 
    name: 'Update Profile', 
    icon: CogIcon,
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    description: 'Modify college details'
  },
  { 
    name: 'Verify Documents', 
    icon: DocumentTextIcon,
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    description: 'Review student submissions'
  }
];

export const statsData = [
  {
    title: 'Total Students',
    value: '2,547',
    change: '+12%',
    isIncrease: true,
    icon: UserGroupIcon,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    title: 'Placed Students',
    value: '1,843',
    change: '+25%',
    isIncrease: true,
    icon: BriefcaseIcon,
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    title: 'Active Drives',
    value: '12',
    change: '+3',
    isIncrease: true,
    icon: CalendarIcon,
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    title: 'Avg Package',
    value: '₹8.5 LPA',
    change: '+15%',
    isIncrease: true,
    icon: ChartBarIcon,
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600'
  }
];
