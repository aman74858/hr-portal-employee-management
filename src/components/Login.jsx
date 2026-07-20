import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import usersData from '../data/users.json';

// Login form component
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async validation
    setTimeout(() => {
      const user = usersData.find(
        u => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        onLogin();
        navigate('/dashboard');
      } else {
        setError('Invalid Email or Password');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="card auth-card">
      <div className="auth-header">
        <i className="bi bi-person-circle display-4 mb-2"></i>
        <h3 className="fw-bold mb-0">Welcome Back!</h3>
        <p className="opacity-75 mb-0">Sign in to your HR Portal account</p>
      </div>
      <div className="card-body p-4">
        {error && (
          <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-envelope text-primary"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control border-start-0"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@gmail.com"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-lock text-primary"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control border-start-0"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary-custom btn w-100 py-2" disabled={loading}>
            {loading ? (
              <><span className="spinner-border spinner-border-sm me-2"></span>Signing in...</>
            ) : (
              <><i className="bi bi-box-arrow-in-right me-2"></i>Login</>
            )}
          </button>
        </form>

        <hr className="my-3" />
        <p className="text-center text-muted mb-0">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary fw-semibold text-decoration-none">
            Sign Up
          </Link>
        </p>

        {/* Demo credentials hint */}
        <div className="alert alert-info mt-3 small py-2">
          <i className="bi bi-info-circle me-1"></i>
          <strong>Demo:</strong> admin@gmail.com / 123456
        </div>
      </div>
    </div>
  );
};

export default Login;