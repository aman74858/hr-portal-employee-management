import React from 'react';

// Reusable Dashboard stat card
const DashboardCard = ({ title, value, icon, bgColor, textColor }) => {
  return (
    <div className={`card dashboard-card ${bgColor || 'bg-primary'} text-white h-100`}>
      <div className="card-body d-flex align-items-center justify-content-between p-4">
        <div>
          <p className="mb-1 opacity-75 fw-semibold text-uppercase small">{title}</p>
          <h2 className="mb-0 fw-bold">{value}</h2>
        </div>
        <div className="card-icon">
          <i className={`bi ${icon}`}></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;