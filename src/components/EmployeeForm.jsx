import React, { useEffect, useState } from "react";

const EmployeeForm = ({ employee, onSave, onCancel }) => {
  const departments = [
    "IT",
    "HR",
    "Finance",
    "Marketing",
    "Sales",
    "Operations",
  ];

  const initialForm = {
    name: "",
    email: "",
    department: "",
    role: "",
    phone: "",
    joinDate: "",
    status: "Active",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData(initialForm);
    }
  }, [employee]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Employee name is required.";

    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.department)
      newErrors.department = "Please select a department.";

    if (!formData.role.trim())
      newErrors.role = "Role is required.";

    if (
      formData.phone &&
      !/^[0-9]{10}$/.test(formData.phone)
    )
      newErrors.phone = "Phone number must contain 10 digits.";

    return newErrors;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    onSave(formData);
  };

  const InputGroup = ({
    icon,
    type,
    name,
    placeholder,
  }) => (
    <div className="input-group">
      <span className="input-group-text">
        <i className={`bi ${icon}`}></i>
      </span>

      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`form-control ${
          errors[name] ? "is-invalid" : ""
        }`}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>

      <div className="row g-3">

        {/* Name */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Full Name
          </label>

          <InputGroup
            icon="bi-person-fill"
            type="text"
            name="name"
            placeholder="John Smith"
          />

          {errors.name && (
            <small className="text-danger">
              {errors.name}
            </small>
          )}

        </div>

        {/* Email */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Email
          </label>

          <InputGroup
            icon="bi-envelope-fill"
            type="email"
            name="email"
            placeholder="john@gmail.com"
          />

          {errors.email && (
            <small className="text-danger">
              {errors.email}
            </small>
          )}

        </div>

        {/* Department */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Department
          </label>

          <select
            name="department"
            className={`form-select ${
              errors.department ? "is-invalid" : ""
            }`}
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">
              Select Department
            </option>

            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {errors.department && (
            <small className="text-danger">
              {errors.department}
            </small>
          )}

        </div>

        {/* Role */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Position
          </label>

          <InputGroup
            icon="bi-briefcase-fill"
            type="text"
            name="role"
            placeholder="Software Engineer"
          />

          {errors.role && (
            <small className="text-danger">
              {errors.role}
            </small>
          )}

        </div>

        {/* Phone */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Phone Number
          </label>

          <InputGroup
            icon="bi-telephone-fill"
            type="tel"
            name="phone"
            placeholder="9876543210"
          />

          {errors.phone && (
            <small className="text-danger">
              {errors.phone}
            </small>
          )}

        </div>

        {/* Join Date */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Join Date
          </label>

          <input
            type="date"
            name="joinDate"
            className="form-control"
            value={formData.joinDate}
            onChange={handleChange}
          />

        </div>

        {/* Status */}

        <div className="col-md-6">

          <label className="form-label fw-semibold">
            Status
          </label>

          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

      </div>

      {/* Buttons */}

      <div className="d-flex justify-content-end gap-2 mt-4">

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          <i className="bi bi-x-circle me-2"></i>

          Cancel

        </button>

        <button
          type="submit"
          className="btn btn-primary"
        >
          <i className="bi bi-check-circle me-2"></i>

          {employee
            ? "Update Employee"
            : "Add Employee"}

        </button>

      </div>

    </form>
  );
};

export default EmployeeForm;