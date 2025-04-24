import React from 'react';
import './Header.css'; // Optional: your own styles

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
        <div className="container">
          {/* Brand / Logo */}
          <a className="navbar-brand text-white fw-bold" href="#">
            Miranaya
          </a>

          {/* Hamburger Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-semibold"
                  href="#"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/short-term">Short Term</a></li>
                  <li><a className="dropdown-item" href="#">Long Term</a></li>
                  <li><a className="dropdown-item" href="#">Project Internships</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#benefits">Benefits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#request-call">Contact</a>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#getApp"
              className="btn btn-light ms-lg-3 mt-3 mt-lg-0"
              style={{ color: '#003366', border: 'none' }}
            >
              Get App
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
