// src/components/dashboard/Stats.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from './config/dashboardConfig';

const StatsCard = ({ stat }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl shadow-sm"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{stat.title}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
        <p className={`text-sm mt-1 ${stat.isIncrease ? 'text-green-600' : 'text-red-600'}`}>
          {stat.change} from last month
        </p>
      </div>
      <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
        <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
      </div>
    </div>
  </motion.div>
);

const Stats = () => (
  <div className="grid grid-cols-4 gap-6 mb-8">
    {statsData.map((stat, index) => (
      <StatsCard key={index} stat={stat} />
    ))}
  </div>
);

export default Stats;