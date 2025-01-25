import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, AcademicCapIcon, BriefcaseIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  
  const roleDetails = {
    student: {
      title: "Student Portal",
      description: "Access your courses, assignments, and placement progress",
      icon: UserIcon,
      placeholder: "student@college.edu"
    },
    tpo: {
      title: "TPO Dashboard",
      description: "Manage placements and track student progress",
      icon: AcademicCapIcon,
      placeholder: "tpo@college.edu"
    },
    recruiter: {
      title: "Recruiter Access",
      description: "Find talented candidates for your organization",
      icon: BriefcaseIcon,
      placeholder: "recruiter@company.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 md:pt-40">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
       

        {/* Role Selection Tabs */}
        <div className="flex p-1 space-x-1 bg-gray-100">
          {Object.entries(roleDetails).map(([role, details]) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`flex-1 flex items-center justify-center px-4 py-3 text-sm rounded-lg font-medium transition-all ${
                selectedRole === role
                  ? 'bg-white shadow text-blue-600'
                  : 'hover:bg-white/60 text-gray-600'
              }`}
            >
              <details.icon className="w-5 h-5 mr-2" />
              {role.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {roleDetails[selectedRole].title}
            </h2>
            <p className="text-gray-600 mt-1">
              {roleDetails[selectedRole].description}
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder={roleDetails[selectedRole].placeholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Login
            </motion.button>

            {selectedRole === 'student' && (
              <p className="text-center text-sm text-gray-600">
                New student?{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                  Create Account
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;