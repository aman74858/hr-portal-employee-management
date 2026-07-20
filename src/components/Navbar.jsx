import React from "react";
import { Link, useNavigate, useLocation, Form } from "react-router-dom";
import assets from "../assets/3135715.png"; // Import the logo image

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path ? "nav-link active-nav" : "nav-link";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">

        <div className="container">

          {/* Logo */}

          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          >

            <img
              src={assets}
              alt="HR Portal"
              width="45"
              height="45"
              className="rounded-circle shadow me-2"
            />

            <div>

              <h5 className="mb-0 fw-bold">
                HR Portal
              </h5>

              <small className="text-light opacity-75">
                Employee Management
              </small>

            </div>

          </Link>

          {/* Mobile Toggle */}

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarMenu"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link className={isActive("/")} to="/">
                  <i className="bi bi-house-door-fill me-2"></i>
                  Home
                </Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link
                      className={isActive("/dashboard")}
                      to="/dashboard"
                    >
                      <i className="bi bi-speedometer2 me-2"></i>
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={isActive("/employees")}
                      to="/employees"
                    >
                      <i className="bi bi-people-fill me-2"></i>
                      Employees
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={isActive("/leaves")}
                      to="/leaves"
                    >
                      <i className="bi bi-calendar-check-fill me-2"></i>
                      Leaves
                    </Link>
                  </li>

                  <li className="nav-item ms-lg-3">

                    <button
                      className="btn btn-danger rounded-pill px-4"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>

                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className={isActive("/login")}
                      to="/login"
                    >
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Login
                    </Link>
                  </li>

                  <li className="nav-item ms-lg-3">

                    <Link
                      className="btn btn-warning rounded-pill px-4 fw-bold"
                      to="/signup"
                    >
                      <i className="bi bi-person-plus-fill me-2"></i>
                      Sign Up
                    </Link>

                  </li>
                </>
              )}

            </ul>

          </div>

        </div>

      </nav>

      <div style={{ height: "90px" }}></div>
    </>
  );
};

export default Navbar;