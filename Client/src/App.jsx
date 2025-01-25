// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/Home/HomePage';
import SignupForm from './pages/Signup/SignupForm';
import LoginPage from './pages/Signup/LoginPage';
import TPODashboard from './pages/TPODashboard/TPODashboard';
import StudentManagement from './pages/TPODashboard/StudentManagement';
import PlacementDrives from './pages/TPODashboard/PlacementDrives';
import CollegeProfile from './pages/TPODashboard/CollegeProfile';
import CompanyRelations from './pages/TPODashboard/CompanyRelations';
import Analytics from './pages/TPODashboard/Analytics';
import NotificationCenter from './pages/TPODashboard/NotificationCenter';
import Settings from './pages/TPODashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/dashboard/tpo" element={<DashboardLayout />}>
          <Route index element={<TPODashboard />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="drives" element={<PlacementDrives />} />
          <Route path="profile" element={<CollegeProfile />} />
          <Route path="companies" element={<CompanyRelations />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<NotificationCenter />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
