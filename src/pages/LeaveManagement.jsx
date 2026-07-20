import React, { useState } from 'react';
import LeaveList from '../components/LeaveList';
import LeaveForm from '../components/LeaveForm';
import initialLeaves from '../data/leaves.json';

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [successMsg, setSuccessMsg] = useState('');

  const showSuccess = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Apply leave
  const handleApplyLeave = (formData) => {
    const newLeave = { ...formData, id: Date.now() };
    setLeaves([...leaves, newLeave]);
    setShowForm(false);
    showSuccess('Leave application submitted successfully!');
  };

  // Approve leave
  const handleApprove = (id) => {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: 'Approved' } : l));
    showSuccess('Leave approved!');
  };

  // Reject leave
  const handleReject = (id) => {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: 'Rejected' } : l));
    showSuccess('Leave rejected.');
  };

  // Filter leaves
  const filteredLeaves = filterStatus === 'All'
    ? leaves
    : leaves.filter(l => l.status === filterStatus);

  // Stats
  const stats = {
    total: leaves.length,
    pending: leaves.filter(l => l.status === 'Pending').length,
    approved: leaves.filter(l => l.status === 'Approved').length,
    rejected: leaves.filter(l => l.status === 'Rejected').length,
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-0">
            <i className="bi bi-calendar-check me-2 text-primary"></i>Leave Management
          </h2>
          <p className="text-muted mb-0">Manage and track employee leave requests</p>
        </div>
        <button className="btn-primary-custom btn" onClick={() => setShowForm(!showForm)}>
          <i className={`bi ${showForm ? 'bi-x-circle' : 'bi-plus-circle'} me-2`}></i>
          {showForm ? 'Cancel' : 'Apply Leave'}
        </button>
      </div>

      {/* Success Alert */}
      {successMsg && (
        <div className="alert alert-success d-flex align-items-center gap-2">
          <i className="bi bi-check-circle-fill"></i>{successMsg}
        </div>
      )}

      {/* Stats Row */}
      <div className="row g-3 mb-4">
        {[
          { label: 'Total Requests', value: stats.total, color: 'primary', icon: 'bi-list-ul' },
          { label: 'Pending', value: stats.pending, color: 'warning', icon: 'bi-hourglass' },
          { label: 'Approved', value: stats.approved, color: 'success', icon: 'bi-check-circle' },
          { label: 'Rejected', value: stats.rejected, color: 'danger', icon: 'bi-x-circle' },
        ].map((s, i) => (
          <div key={i} className="col-6 col-md-3">
            <div className={`card border-0 bg-${s.color} ${s.color === 'warning' ? 'text-dark' : 'text-white'} rounded-4 shadow-sm`}>
              <div className="card-body d-flex align-items-center justify-content-between p-3">
                <div>
                  <p className="small mb-0 opacity-75">{s.label}</p>
                  <h3 className="fw-bold mb-0">{s.value}</h3>
                </div>
                <i className={`bi ${s.icon} fs-1 opacity-25`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Apply Leave Form */}
      {showForm && (
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header border-0 py-3 px-4"
            style={{ background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', borderRadius: '16px 16px 0 0' }}>
            <h5 className="text-white fw-bold mb-0">
              <i className="bi bi-calendar-plus me-2"></i>Apply for Leave
            </h5>
          </div>
          <div className="card-body p-4">
            <LeaveForm
              onSubmit={handleApplyLeave}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white border-0 pt-4 px-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <h5 className="fw-bold mb-0">
              <i className="bi bi-table me-2 text-primary"></i>Leave Requests
            </h5>
            <div className="btn-group" role="group">
              {['All', 'Pending', 'Approved', 'Rejected'].map(status => (
                <button
                  key={status}
                  type="button"
                  className={`btn btn-sm ${filterStatus === status ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                  <span className="badge bg-white text-primary ms-1">
                    {status === 'All' ? leaves.length : leaves.filter(l => l.status === status).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="card-body px-4 pb-4">
          <LeaveList
            leaves={filteredLeaves}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;