// src/components/dashboard/QuickActions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { actions } from './config/dashboardConfig';

const QuickActions = () => (
  <div className="grid grid-cols-4 gap-4 mb-8">
    {actions.map((action) => (
      <motion.button
        key={action.name}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-left"
      >
        <div className={`w-12 h-12 ${action.bgColor} rounded-lg flex items-center justify-center mb-3`}>
          <action.icon className={`w-6 h-6 ${action.textColor}`} />
        </div>
        <h3 className="text-sm font-medium text-gray-800">{action.name}</h3>
        <p className="text-xs text-gray-600 mt-1">{action.description}</p>
      </motion.button>
    ))}
  </div>
);

export default QuickActions;