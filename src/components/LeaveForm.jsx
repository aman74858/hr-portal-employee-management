import React, { useState } from 'react';

// Form for applying a new leave request
const LeaveForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    employeeName: '',
    type: '',
    from: '',
    to: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});

  const leaveTypes = ['Casual Leave', 'Sick Leave', 'Annual Leave', 'Maternity Leave', 'Paternity Leave'];

  const validate = () => {
    const newErrors = {};
    if (!formData.employeeName.trim()) newErrors.employeeName = 'Employee name is required';
    if (!formData.type) newErrors.type = 'Leave type is required';
    if (!formData.from) newErrors.from = 'From date is required';
    if (!formData.to) newErrors.to = 'To date is required';
    if (formData.from && formData.to && formData.from > formData.to)
      newErrors.to = 'To date must be after From date';
    if (!formData.reason.trim()) newErrors.reason = 'Reason is required';
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
    onSubmit({ ...formData, status: 'Pending' });
    setFormData({ employeeName: '', type: '', from: '', to: '', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Employee Name *</label>
          <input
            type="text"
            name="employeeName"
            className={`form-control ${errors.employeeName ? 'is-invalid' : ''}`}
            value={formData.employeeName}
            onChange={handleChange}
            placeholder="Enter employee name"
          />
          {errors.employeeName && <div className="invalid-feedback">{errors.employeeName}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Leave Type *</label>
          <select
            name="type"
            className={`form-select ${errors.type ? 'is-invalid' : ''}`}
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.type && <div className="invalid-feedback">{errors.type}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">From Date *</label>
          <input
            type="date"
            name="from"
            className={`form-control ${errors.from ? 'is-invalid' : ''}`}
            value={formData.from}
            onChange={handleChange}
          />
          {errors.from && <div className="invalid-feedback">{errors.from}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">To Date *</label>
          <input
            type="date"
            name="to"
            className={`form-control ${errors.to ? 'is-invalid' : ''}`}
            value={formData.to}
            onChange={handleChange}
          />
          {errors.to && <div className="invalid-feedback">{errors.to}</div>}
        </div>

        <div className="col-12">
          <label className="form-label fw-semibold">Reason *</label>
          <textarea
            name="reason"
            rows={3}
            className={`form-control ${errors.reason ? 'is-invalid' : ''}`}
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason for leave..."
          />
          {errors.reason && <div className="invalid-feedback">{errors.reason}</div>}
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-end mt-4">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          <i className="bi bi-x-circle me-1"></i>Cancel
        </button>
        <button type="submit" className="btn-primary-custom btn">
          <i className="bi bi-send me-1"></i>Apply Leave
        </button>
      </div>
    </form>
  );
};

export default LeaveForm;