import React from "react";
import DashboardCard from "../components/DashboardCard";
import employees from "../data/employees.json";
import leaves from "../data/leaves.json";

const Dashboard = () => {
  const currentUser =
    JSON.parse(sessionStorage.getItem("currentUser")) || {};

  // Dashboard Statistics
  const stats = {
    totalEmployees: employees.length,
    activeEmployees: employees.filter(
      (emp) => emp.status?.toLowerCase() === "active"
    ).length,

    pendingLeaves: leaves.filter(
      (leave) => leave.status?.toLowerCase() === "pending"
    ).length,

    approvedLeaves: leaves.filter(
      (leave) => leave.status?.toLowerCase() === "approved"
    ).length,
  };

  const dashboardCards = [
    {
      title: "Employees",
      value: stats.totalEmployees,
      icon: "bi-people-fill",
      color: "primary",
    },
    {
      title: "Active",
      value: stats.activeEmployees,
      icon: "bi-person-check-fill",
      color: "success",
    },
    {
      title: "Pending Leaves",
      value: stats.pendingLeaves,
      icon: "bi-hourglass-split",
      color: "warning",
    },
    {
      title: "Approved",
      value: stats.approvedLeaves,
      icon: "bi-calendar-check-fill",
      color: "info",
    },
  ];

  const departments = [...new Set(employees.map((e) => e.department))];

  return (
    <div className="container py-4">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

        <div>
          <h2 className="fw-bold">
            Dashboard
          </h2>

          <p className="text-muted">
            Welcome,
            <strong> {currentUser?.name || "Administrator"}</strong>
          </p>
        </div>

        <div className="badge bg-primary fs-6 p-3">
          {new Date().toLocaleDateString()}
        </div>

      </div>

      {/* Cards */}

      <div className="row g-4 mb-4">

        {dashboardCards.map((card, index) => (

          <div className="col-md-6 col-xl-3" key={index}>

            <DashboardCard
              title={card.title}
              value={card.value}
              icon={card.icon}
              bgColor={`bg-${card.color}`}
            />

          </div>

        ))}

      </div>

      {/* Tables */}

      <div className="row">

        {/* Employees */}

        <div className="col-lg-8 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-white">

              <h5 className="mb-0">
                Recent Employees
              </h5>

            </div>

            <div className="table-responsive">

              <table className="table table-hover align-middle mb-0">

                <thead className="table-light">

                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {employees.slice(0, 5).map((emp) => (

                    <tr key={emp.id}>

                      <td>

                        <div className="fw-semibold">
                          {emp.name}
                        </div>

                        <small className="text-muted">
                          {emp.email}
                        </small>

                      </td>

                      <td>

                        <span className="badge bg-primary">
                          {emp.department}
                        </span>

                      </td>

                      <td>{emp.role}</td>

                      <td>

                        <span
                          className={`badge ${
                            emp.status === "Active"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {emp.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* Department */}

        <div className="col-lg-4 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-white">

              <h5>
                Departments
              </h5>

            </div>

            <div className="card-body">

              {departments.map((department) => {

                const count = employees.filter(
                  (e) => e.department === department
                ).length;

                const percentage =
                  (count / employees.length) * 100;

                return (
                  <div
                    key={department}
                    className="mb-4"
                  >
                    <div className="d-flex justify-content-between">

                      <strong>
                        {department}
                      </strong>

                      <span>
                        {count}
                      </span>

                    </div>

                    <div className="progress mt-2">

                      <div
                        className="progress-bar bg-primary"
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* Leave Requests */}

      <div className="card shadow-sm border-0">

        <div className="card-header bg-white">

          <h5>
            Recent Leave Requests
          </h5>

        </div>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead className="table-light">

              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {leaves.slice(0, 6).map((leave) => (

                <tr key={leave.id}>

                  <td>{leave.employeeName}</td>

                  <td>{leave.type}</td>

                  <td>{leave.from}</td>

                  <td>{leave.to}</td>

                  <td>

                    <span
                      className={`badge ${
                        leave.status === "Approved"
                          ? "bg-success"
                          : leave.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {leave.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;