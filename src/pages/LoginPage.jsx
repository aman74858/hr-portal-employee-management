import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = ({ onLogin, isAuthenticated }) => {
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #f4f6f9 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4">
            <Login onLogin={onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;