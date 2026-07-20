import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.jpg"; // Import the background image
const Home = () => {
  const features = [
    {
      icon: "bi-people-fill",
      title: "Employee Management",
      desc: "Add, edit, search and manage employee records easily.",
    },
    {
      icon: "bi-calendar-check-fill",
      title: "Leave Management",
      desc: "Track leave requests and approvals with ease.",
    },
    {
      icon: "bi-speedometer2",
      title: "HR Dashboard",
      desc: "View real-time reports and analytics.",
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Secure Access",
      desc: "Role-based authentication for secure access.",
    },
    {
      icon: "bi-phone-fill",
      title: "Responsive Design",
      desc: "Optimized for desktop, tablet and mobile.",
    },
    {
      icon: "bi-bar-chart-fill",
      title: "Analytics",
      desc: "Employee and leave analytics at your fingertips.",
    },
  ];

  const services = [
    {
      icon: "bi-person-badge",
      title: "Employee Onboarding",
      desc: "Smooth onboarding process for new employees.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Performance",
      desc: "Monitor employee performance effectively.",
    },
    {
      icon: "bi-cash-stack",
      title: "Payroll",
      desc: "Maintain payroll and salary records.",
    },
    {
      icon: "bi-chat-dots",
      title: "Communication",
      desc: "Share announcements and updates instantly.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Companies",
      icon: "bi-building",
    },
    {
      value: "10K+",
      label: "Employees",
      icon: "bi-people",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: "bi-shield-check",
    },
    {
      value: "24/7",
      label: "Support",
      icon: "bi-headset",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="home-hero-badge">
                <i className="bi bi-stars me-2"></i>
                Smarter HR operations for modern teams
              </span>

              <h1 className="home-hero-title">
                Manage people, leave, and growth from one elegant HR portal.
              </h1>

              <p className="home-hero-text">
                Keep employee records, approvals, and team insights organized in a single place designed for speed, clarity, and everyday productivity.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/login" className="btn btn-light btn-lg px-4">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </Link>

                <Link to="/signup" className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-person-plus me-2"></i>
                  Sign Up
                </Link>
              </div>

              <div className="home-hero-highlights">
                <span className="home-hero-pill">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Employee Ready
                </span>
                <span className="home-hero-pill">
                  <i className="bi bi-shield-check me-2"></i>
                  Secure Access
                </span>
                <span className="home-hero-pill">
                  <i className="bi bi-speedometer2 me-2"></i>
                  Live Dashboard
                </span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="home-hero-card">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="home-hero-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Today at a glance</h5>
                    <p className="mb-0 text-muted small">Live HR progress overview</p>
                  </div>
                </div>

                <ul className="home-hero-list">
                  <li>
                    <span className="home-dot"></span>
                    120 active employees tracked
                  </li>
                  <li>
                    <span className="home-dot"></span>
                    18 leave requests this week
                  </li>
                  <li>
                    <span className="home-dot"></span>
                    Faster approvals and updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Statistics */}
<section className="home-section py-5 bg-light">
  <div className="container">

    <div className="text-center mb-5">
            <h2 className="fw-bold display-5">
        OUR <span className="text-primary">ACHIEVEMENTS</span>
      </h2>

      <p className="text-muted col-lg-6 mx-auto">
        We help organizations simplify HR management with reliable,
        secure, and efficient solutions.
      </p>
    </div>

    <div className="row g-4">

      {stats.map((item, index) => (
        <div className="col-6 col-lg-3" key={index}>

          <div className="stat-card text-center">

            <div className="stat-icon mx-auto mb-3">
              <i className={`bi ${item.icon}`}></i>
            </div>

            <h2 className="fw-bold text-primary">
              {item.value}
            </h2>

            <p className="text-muted mb-0 fw-semibold">
              {item.label}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* About */}
<section className="home-section py-5 bg-white">
  <div className="container">

    <div className="row align-items-center g-5">

      {/* Left Content */}
      <div className="col-lg-6">

        <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">
          ABOUT US
        </span>

        <h2 className="display-5 fw-bold mb-3">
          Complete <span className="text-primary">HR Management</span> Solution
        </h2>

        <p className="text-muted mb-4">
          HR Portal is a modern employee management system that helps
          organizations efficiently manage employees, leave requests,
          attendance, reports, and HR operations from one centralized
          platform.
        </p>

        <div className="row">

          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
              <span>Employee Management</span>
            </div>
          </div>

          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
              <span>Leave Tracking</span>
            </div>
          </div>

          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
              <span>Dashboard Analytics</span>
            </div>
          </div>

          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
              <span>Secure Login</span>
            </div>
          </div>

        </div>

        <div className="mt-4">

          <Link
            to="/login"
            className="btn btn-primary btn-lg me-3"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Explore Dashboard
          </Link>

          <Link
            to="/signup"
            className="btn btn-outline-primary btn-lg"
          >
            Get Started
          </Link>

        </div>

      </div>

      {/* Right Side */}
      <div className="col-lg-6">

        <div className="about-card text-center">

          <div className="about-icon mx-auto mb-4">
            <i className="bi bi-speedometer2"></i>
          </div>

          <h3 className="fw-bold mb-3">
            Smart HR Dashboard
          </h3>

          <p className="text-muted">
            Monitor employees, departments, leave requests,
            and HR analytics in one beautiful dashboard.
          </p>

          <div className="row mt-4">

            <div className="col-4">
              <h3 className="text-primary fw-bold">500+</h3>
              <small>Companies</small>
            </div>

            <div className="col-4">
              <h3 className="text-success fw-bold">10K+</h3>
              <small>Employees</small>
            </div>

            <div className="col-4">
              <h3 className="text-warning fw-bold">99.9%</h3>
              <small>Uptime</small>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Features Section */}
<section className="features-section py-5">
  <div className="container">

    {/* Section Heading */}
    <div className="text-center mb-5">
      <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">
        OUR FEATURES
      </span>

      <h2 className="display-5 fw-bold">
        Powerful <span className="text-primary">Features</span>
      </h2>

      <p className="text-muted col-lg-7 mx-auto">
        Manage employees, leave requests, departments, attendance,
        and HR analytics with one modern and easy-to-use platform.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="row g-4">

      {features.map((item, index) => (
        <div className="col-md-6 col-lg-4" key={index}>

          <div className="card feature-card h-100 border-0">

            <div className="card-body text-center p-4">

              <div className="feature-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <h4 className="fw-bold mt-4">
                {item.title}
              </h4>

              <p className="text-muted mt-3">
                {item.desc}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
{/* ==================== Services Section ==================== */}

<section className="services-section py-5 bg-white">
  <div className="container">

    {/* Section Header */}
    <div className="text-center mb-5">

      <span className="badge bg-success px-3 py-2 rounded-pill mb-3">
        OUR SERVICES
      </span>

      <h2 className="display-5 fw-bold">
        Professional <span className="text-success">HR Services</span>
      </h2>

      <p className="text-muted col-lg-7 mx-auto">
        Comprehensive HR solutions designed to simplify workforce
        management, improve employee productivity, and streamline
        business operations.
      </p>

    </div>

    {/* Service Cards */}
    <div className="row g-4">

      {services.map((item, index) => (
        <div className="col-md-6 col-lg-3" key={index}>

          <div className="card service-card border-0 h-100">

            <div className="card-body text-center p-4">

              <div className="service-icon mx-auto mb-4">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <h5 className="fw-bold mb-3">
                {item.title}
              </h5>

              <p className="text-muted mb-0">
                {item.desc}
              </p>

              <button className="btn btn-outline-success rounded-pill mt-4 px-4">
                Learn More
              </button>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

      

      {/* Footer */}
<footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">

    <div className="row g-4">

      {/* Company */}
      <div className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-people-fill fs-2 text-primary me-2"></i>
          <h4 className="fw-bold mb-0">HR Portal</h4>
        </div>

        <p className="text-light-emphasis">
          HR Portal is a modern Human Resource Management System that
          simplifies employee management, leave tracking, payroll records,
          and workforce analytics for organizations.
        </p>

        <div className="d-flex gap-3 mt-3">
          <a href="#" className="text-light fs-5">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="#" className="text-light fs-5">
            <i className="bi bi-twitter-x"></i>
          </a>

          <a href="#" className="text-light fs-5">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="#" className="text-light fs-5">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-lg-2 col-md-6">
        <h5 className="fw-bold mb-3">Quick Links</h5>

        <ul className="list-unstyled">

          <li className="mb-2">
            <Link className="footer-link" to="/">
              Home
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/dashboard">
              Dashboard
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/employees">
              Employees
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/leaves">
              Leaves
            </Link>
          </li>

        </ul>
      </div>

      {/* Company */}
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-3">Company</h5>

        <ul className="list-unstyled">

          <li className="mb-2">
            <Link className="footer-link" to="/about">
              About Us
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/signup">
              Register
            </Link>
          </li>

          <li className="mb-2">
            <Link className="footer-link" to="/login">
              Login
            </Link>
          </li>

        </ul>
      </div>

      {/* Contact */}
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-3">Contact Us</h5>

        <p className="mb-2">
          <i className="bi bi-envelope-fill text-primary me-2"></i>
          support@hrportal.com
        </p>

        <p className="mb-2">
          <i className="bi bi-telephone-fill text-primary me-2"></i>
          +91 98765 43210
        </p>

        <p className="mb-2">
          <i className="bi bi-geo-alt-fill text-primary me-2"></i>
          Ranchi, Jharkhand, India
        </p>

        <p className="mb-0">
          <i className="bi bi-clock-fill text-primary me-2"></i>
          Mon - Sat : 9 AM - 6 PM
        </p>

      </div>

    </div>

    <hr className="border-secondary my-4" />

    <div className="row align-items-center">

      <div className="col-md-6 text-center text-md-start">
        <small className="text-secondary">
          © {new Date().getFullYear()} <strong>HR Portal</strong>. All Rights Reserved.
        </small>
      </div>

      <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

        <Link to="/privacy" className="footer-link me-3">
          Privacy Policy
        </Link>

        <Link to="/terms" className="footer-link">
          Terms & Conditions
        </Link>

      </div>

    </div>

  </div>
</footer>
    </>
  );
};

export default Home;