import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CollaboratorsSection.css'; // Optional for extra styling
import company1 from '../assets/company1.png';

function CollaboratorsSection() {
  const companies = [
    { name: 'TechSpark', logo: company1 },
    { name: 'EduPro', logo: company1 },
    { name: 'InnoSoft', logo: company1 },
    { name: 'SkillNet', logo: company1 },
    { name: 'GlobalTech', logo: company1 },
    { name: 'NextGen', logo: company1 },
    { name: 'SoftVision', logo: company1 },
    { name: 'CodeMaster', logo: company1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (companies.length - 3));
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="py-5" style={{ background: '#f4f6f9' }} id="collaborators">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#003366' }} data-aos="fade-up">
          Our Collaborator Companies
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          We proudly partner with industry leaders who support our mission of innovative learning.
        </p>

        <div className="collaborators-wrapper">
          <div
            className="row justify-content-center"
            style={{
              display: 'flex',
              justifyContent: 'center',
              overflow: 'hidden', // Prevents the extra logos from being visible outside the container
            }}
          >
            {/* Loop through companies and display 4 at a time */}
            {companies.slice(currentIndex, currentIndex + 4).map((company, index) => (
              <div
                key={index}
                className="col-3 mb-1" // Show 4 items at a time
                style={{
                  padding: '0.5rem',  // Minimized padding for less gap
                  transition: 'opacity 0.5s ease',
                }}
              >
                <div
                  className="collab-card p-2 rounded-4 d-flex align-items-center justify-content-center"
                  style={{
                    transition: 'transform 0.3s ease',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                    style={{
                      maxHeight: '80px',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <p className="mt-1 text-muted fw-semibold">{company.name}</p>  {/* Reduced margin-top */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollaboratorsSection;
