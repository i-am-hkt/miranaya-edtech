import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaTrophy, FaCertificate } from 'react-icons/fa';
import Typed from 'typed.js';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Welcome to <span style="color: orange;">Miranaya</span>',
        'Learn Faster, Learn Smarter',
        'Join a Community of Learners',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section position-relative text-white" style={{ minHeight: '90vh' }}>
      {/* Background Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(to right, #003366cc, #ffaf7b80)',
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
          
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">
              <span ref={typedRef}></span>
            </h1>
            <p className="lead mt-3">Empowering learning for every learner, everywhere.</p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
              <button
                className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 shadow"
                onClick={() => scrollToSection('#courses')}
              >
                <FaUsers /> Courses
              </button>
              <button
                className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2 shadow"
                onClick={() => scrollToSection('#contact')}
              >
                <FaUsers /> Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img
              src={require('../assets/hero.png')}
              alt="Hero Visual"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="row text-center mt-5">
          {/* Happy Students Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow-lg border-0" style={{ backgroundColor: '#003366', color: '#fff', transition: 'transform 0.3s ease' }}>
              <div className="card-body">
                <FaUsers size={40} />
                <h3 className="card-title mt-3">Happy Students</h3>
                <p className="card-text">Thousands of students have successfully learned with Miranaya!</p>
                <h4 className="mt-3">12,345+</h4> {/* Static Counter for Happy Students */}
              </div>
            </div>
          </div>

          {/* Batches Done Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow-lg border-0" style={{ backgroundColor: '#003366', color: '#fff', transition: 'transform 0.3s ease' }}>
              <div className="card-body">
                <FaTrophy size={40} />
                <h3 className="card-title mt-3">Batches Done</h3>
                <p className="card-text">Over 500 batches completed with top results!</p>
                <h4 className="mt-3">500+</h4> {/* Static Counter for Batches Done */}
              </div>
            </div>
          </div>

          {/* Certificates Issued Card */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow-lg border-0" style={{ backgroundColor: '#003366', color: '#fff', transition: 'transform 0.3s ease' }}>
              <div className="card-body">
                <FaCertificate size={40} />
                <h3 className="card-title mt-3">Certificates Issued</h3>
                <p className="card-text">We have issued certificates to more than 10,000 students.</p>
                <h4 className="mt-3">10,000+</h4> {/* Static Counter for Certificates Issued */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
