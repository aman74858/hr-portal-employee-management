import React from 'react';
import EmployeeCard from './EmployeeCard';

// Grid list of employee cards
const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (employees.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-person-x display-1 text-muted"></i>
        <h4 className="mt-3 text-muted">No employees found</h4>
        <p className="text-muted">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {employees.map(emp => (
        <div key={emp.id} className="col-sm-6 col-md-4 col-lg-3">
          <EmployeeCard employee={emp} onEdit={onEdit} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;