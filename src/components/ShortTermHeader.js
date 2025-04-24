// components/ShortTermHeader.jsx
import React from 'react';
import { Link } from 'react-scroll'; // smooth scroll library
import './ShortTermHeader.css';

const ShortTermHeader = () => {
  return (
    <header className="shortterm-header bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="m-0">Short Term Courses</h4>
        <nav>
          <Link to="overview" smooth={true} duration={500} className="mx-3 nav-link">
            Overview
          </Link>
          <Link to="course-benefits" smooth={true} duration={500} className="mx-3 nav-link">
            Benefits
          </Link>
          <Link to="contact" smooth={true} duration={500} className="mx-3 nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default ShortTermHeader;
