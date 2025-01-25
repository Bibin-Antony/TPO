// src/components/dashboard/Analytics/Analytics.jsx
import React from 'react';
import {
  Line,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  BarChart,
  ResponsiveContainer
} from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as ChartLegend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const Analytics = () => {
  const placementData = [
    { month: 'Jan', placements: 45, applications: 250 },
    { month: 'Feb', placements: 52, applications: 280 },
    { month: 'Mar', placements: 61, applications: 320 },
    { month: 'Apr', placements: 48, applications: 270 }
  ];

  const departmentStats = [
    { name: 'CS', placed: 85, total: 100 },
    { name: 'ECE', placed: 75, total: 90 },
    { name: 'ME', placed: 65, total: 85 },
    { name: 'Civil', placed: 45, total: 60 }
  ];

  const companyDistribution = [
    { name: 'Tech', value: 45 },
    { name: 'Finance', value: 25 },
    { name: 'Consulting', value: 20 },
    { name: 'Others', value: 10 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {[{ title: 'Total Placements', value: '1,845', change: '+12%', positive: true },
        { title: 'Average Package', value: '₹12.5L', change: '+8%', positive: true },
        { title: 'Applications', value: '2,450', change: '-5%', positive: false },
        { title: 'Success Rate', value: '78%', change: '+3%', positive: true }
        ].map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-600">{kpi.title}</p>
            <h3 className="text-2xl font-bold mt-2">{kpi.value}</h3>
            <div className={`flex items-center mt-2 ${kpi.positive ? 'text-green-600' : 'text-red-600'
              }`}>
              {kpi.positive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> :
                <ArrowDownIcon className="w-4 h-4 mr-1" />}
              <span>{kpi.change} vs last year</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Placement Trends */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Placement Trends</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={placementData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="placements" stroke="#3B82F6" />
                <Line type="monotone" dataKey="applications" stroke="#6366F1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department-wise Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Department Performance</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentStats}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="placed" fill="#3B82F6" />
                <Bar dataKey="total" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Company Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-6">Company Distribution</h3>
          <div className="h-64">
            <Doughnut
              data={{
                labels: companyDistribution.map(item => item.name),
                datasets: [{
                  data: companyDistribution.map(item => item.value),
                  backgroundColor: ['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7']
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-6">Top Recruiting Companies</h3>
          <div className="space-y-4">
            {[{ name: 'Google', hired: 45, growth: '+12%' },
            { name: 'Microsoft', hired: 38, growth: '+8%' },
            { name: 'Amazon', hired: 42, growth: '+15%' },
            { name: 'Goldman Sachs', hired: 28, growth: '+5%' }
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{company.name}</h4>
                  <p className="text-sm text-gray-600">{company.hired} students hired</p>
                </div>
                <span className="text-green-600">{company.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
