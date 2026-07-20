import React from "react";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const initials = employee.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 employee-card">

      <div className="card-body text-center p-4">

        {/* Employee Image */}

        <div className="mb-3">

          {employee.image ? (
            <img
              src={employee.image}
              alt={employee.name}
              className="rounded-circle shadow"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto shadow"
              style={{
                width: "90px",
                height: "90px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {initials}
            </div>
          )}

        </div>

        {/* Employee Name */}

        <h5 className="fw-bold mb-1">
          {employee.name}
        </h5>

        <p className="text-primary mb-1">
          {employee.role}
        </p>

        <p className="text-muted small mb-3">
          <i className="bi bi-building me-2"></i>
          {employee.department}
        </p>

        {/* Status */}

        <span
          className={`badge mb-3 ${
            employee.status === "Active"
              ? "bg-success"
              : employee.status === "Inactive"
              ? "bg-secondary"
              : "bg-warning text-dark"
          }`}
        >
          {employee.status}
        </span>

        <hr />

        {/* Contact */}

        <div className="text-start small">

          <p className="mb-2">
            <i className="bi bi-envelope-fill text-primary me-2"></i>
            {employee.email}
          </p>

          <p className="mb-3">
            <i className="bi bi-telephone-fill text-success me-2"></i>
            {employee.phone || "Not Available"}
          </p>

        </div>

        {/* Buttons */}

        <div className="d-grid gap-2">

          <button
            className="btn btn-outline-primary"
            onClick={() => onEdit(employee)}
          >
            <i className="bi bi-pencil-square me-2"></i>
            Edit
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(employee.id)}
          >
            <i className="bi bi-trash me-2"></i>
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default EmployeeCard;