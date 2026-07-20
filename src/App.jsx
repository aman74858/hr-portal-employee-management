import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import LeaveManagement from './pages/LeaveManagement';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css'; // Import the CSS file for styling

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  // Simple auth state stored in sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  // Protected Route wrapper
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
          <Route path="/leaves" element={<ProtectedRoute><LeaveManagement /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;