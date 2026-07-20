import { useMemo, useState } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import employeesData from "../data/employees.json";

const Employees = () => {
  const [employees, setEmployees] = useState(employeesData);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);

  const [message, setMessage] = useState("");

  const departments = [
    "All",
    ...new Set(employees.map((emp) => emp.department)),
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch =
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase()) ||
        emp.role.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" || emp.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  const showSuccess = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const openAddModal = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const openEditModal = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setShowForm(false);
  };

  const saveEmployee = (employee) => {
    if (selectedEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === selectedEmployee.id
            ? { ...emp, ...employee }
            : emp
        )
      );

      showSuccess("Employee updated successfully.");
    } else {
      setEmployees((prev) => [
        ...prev,
        {
          ...employee,
          id: Date.now(),
        },
      ]);

      showSuccess("Employee added successfully.");
    }

    closeModal();
  };

  const deleteEmployee = () => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.id !== deleteEmployeeId)
    );

    setDeleteEmployeeId(null);

    showSuccess("Employee deleted successfully.");
  };

  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div>
          <h2 className="fw-bold">
            Employee Management
         </h2>
          <p className="text-muted">
            {filteredEmployees.length} Employees Found
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={openAddModal}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Employee
        </button>
      </div>
      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}
      {/* Search */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-lg-6">
              <input
                className="form-control"
                placeholder="Search employee..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>
            <div className="col-lg-4">
              <select
                className="form-select"
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
              >
                {departments.map((dep) => (
                  <option key={dep}>
                    {dep}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-2">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setSearch("");
                  setDepartment("All");
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <EmployeeList
        employees={filteredEmployees}
        onEdit={openEditModal}
        onDelete={setDeleteEmployeeId}
      />
      {/* Form Modal */}
      {showForm && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5>
                  {selectedEmployee
                    ? "Edit Employee"
                    : "Add Employee"}

                </h5>
                <button
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <EmployeeForm
                  employee={selectedEmployee}
                  onSave={saveEmployee}
                  onCancel={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteEmployeeId && (
        <div className="modal fade show d-block">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h4>
                  Delete Employee?
                </h4>
                <p>
                  This action cannot be undone.
                </p>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() =>
                    setDeleteEmployeeId(null)
                  }
                >
                  Cancel
                </button>

                <button
                  className="btn btn-danger"
                  onClick={deleteEmployee}
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        </div>

      )}

    </div>
  );
};

export default Employees;