import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    company: '',
    position: '',
    institution: '',
    department: '',
    employeeId: ''
  });

  const colleges = [
    'IIT Delhi', 'IIT Bombay', 'NIT Trichy', 'BITS Pilani'
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const Progress = () => (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200">
          <div 
            className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <div className="relative flex justify-between">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Basic Info</span>
        <span>Role</span>
        <span>Details</span>
      </div>
    </div>
  );

  const renderInitialForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2 className="text-3xl font-bold mb-8">Let's get started</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="••••••••"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setStep(2)}
        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center"
      >
        Continue
        <ChevronRightIcon className="w-5 h-5 ml-2" />
      </motion.button>
    </motion.div>
  );

  const renderUserTypeSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-8">Select your role</h2>
      
      {['Student', 'Recruiter', 'TPO'].map((type) => (
        <motion.div
          key={type}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setUserType(type.toLowerCase());
            setStep(3);
          }}
          className={`p-6 rounded-xl border-2 cursor-pointer transition-colors ${
            userType === type.toLowerCase()
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-400'
          }`}
        >
          <h3 className="text-xl font-semibold">{type}</h3>
          <p className="text-gray-600">
            {type === 'Student' 
              ? 'Looking for placement opportunities'
              : type === 'Recruiter'
                ? 'Hiring talents for your company'
                : 'Managing institutional placements'
            }
          </p>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderUserSpecificForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2 className="text-3xl font-bold mb-8">
        {userType === 'student' 
          ? 'Complete your student profile'
          : userType === 'recruiter'
            ? 'Tell us about your company'
            : 'Verify your institution'
        }
      </h2>

      {userType === 'student' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select your college</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select college</option>
              {colleges.map(college => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., B.Tech Computer Science"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
        </div>
      )}

      {userType === 'recruiter' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., HR Manager"
            />
          </div>
        </div>
      )}

      {userType === 'tpo' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Institution name</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your institution name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Training and Placement Cell"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your employee ID"
            />
          </div>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => console.log('Form submitted:', formData)}
        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold mt-8"
      >
        Create Account
      </motion.button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-6 md:pt-40 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Section - Hidden on Mobile */}
          <div className="hidden md:block text-white py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's setup your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                TalentBridge Profile
              </span>
            </h1>
            <p className="text-lg text-blue-100 mb-12">
              Your gateway to seamless placements. Connect with opportunities that match your aspirations.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-blue-100 mb-4">
                "TalentBridge made my placement journey incredibly smooth. The platform's intuitive design
                and powerful features helped me land my dream job!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-blue-200">Placed at Google</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              {step > 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleBack}
                  className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                  Back
                </motion.button>
              )}

              <Progress />

              <AnimatePresence mode="wait">
                {step === 1 && renderInitialForm()}
                {step === 2 && renderUserTypeSelection()}
                {step === 3 && renderUserSpecificForm()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;