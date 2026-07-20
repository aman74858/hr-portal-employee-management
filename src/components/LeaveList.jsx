import React from 'react';

// Table displaying leave requests with approve/reject actions
const LeaveList = ({ leaves, onApprove, onReject }) => {
  const getStatusBadge = (status) => {
    const map = {
      Pending: 'bg-warning text-dark',
      Approved: 'bg-success',
      Rejected: 'bg-danger',
    };
    return map[status] || 'bg-secondary';
  };

  if (leaves.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-calendar-x display-1 text-muted"></i>
        <h4 className="mt-3 text-muted">No leave requests found</h4>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle table-custom">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={leave.id}>
              <td>{index + 1}</td>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#1a73e8,#0d47a1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '0.75rem', fontWeight: 700
                  }}>
                    {leave.employeeName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="fw-semibold">{leave.employeeName}</span>
                </div>
              </td>
              <td><span className="badge bg-primary">{leave.type}</span></td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>
                <span className="text-truncate d-inline-block" style={{ maxWidth: 150 }} title={leave.reason}>
                  {leave.reason}
                </span>
              </td>
              <td>
                <span className={`badge ${getStatusBadge(leave.status)}`}>{leave.status}</span>
              </td>
              <td>
                {leave.status === 'Pending' && (
                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => onApprove(leave.id)}
                      title="Approve"
                    >
                      <i className="bi bi-check-lg"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onReject(leave.id)}
                      title="Reject"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                )}
                {leave.status !== 'Pending' && (
                  <span className="text-muted small">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;