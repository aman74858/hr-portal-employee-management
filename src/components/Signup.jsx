import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Signup form component
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Min 6 characters required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="card auth-card">
      <div className="auth-header">
        <i className="bi bi-person-plus-fill display-4 mb-2"></i>
        <h3 className="fw-bold mb-0">Create Account</h3>
        <p className="opacity-75 mb-0">Join the HR Portal today</p>
      </div>
      <div className="card-body p-4">
        {success && (
          <div className="alert alert-success d-flex align-items-center gap-2">
            <i className="bi bi-check-circle-fill"></i>
            Registration successful! Redirecting to login...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-person text-primary"></i>
              </span>
              <input
                type="text"
                name="name"
                className={`form-control border-start-0 ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-envelope text-primary"></i>
              </span>
              <input
                type="email"
                name="email"
                className={`form-control border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-lock text-primary"></i>
              </span>
              <input
                type="password"
                name="password"
                className={`form-control border-start-0 ${errors.password ? 'is-invalid' : ''}`}
                value={formData.password}
                onChange={handleChange}
                placeholder="Min 6 characters"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-shield-lock text-primary"></i>
              </span>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control border-start-0 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
          </div>

          <button type="submit" className="btn-primary-custom btn w-100 py-2">
            <i className="bi bi-person-check me-2"></i>Register
          </button>
        </form>

        <hr className="my-3" />
        <p className="text-center text-muted mb-0">
          Already have an account?{' '}
          <Link to="/login" className="text-primary fw-semibold text-decoration-none">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;