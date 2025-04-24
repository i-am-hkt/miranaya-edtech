import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilePdf, FaAward } from 'react-icons/fa';
import './CertificatesSection.css'; // Create this for custom hover effects
import certificate1 from '../assets/certificate1.png';

const certificates = [
  {
    title: 'Course Completion Certificate',
    image: certificate1,
    pdfLink: certificate1,
    badge: 'Verified',
  },
  {
    title: 'Internship Completion Certificate',
    image: certificate1,
    pdfLink: certificate1,
    badge: 'Authorized',
  },
  {
    title: 'Letter of Recommendation',
    image: certificate1,
    pdfLink: certificate1,
    badge: 'Exclusive',
  },
  {
    title: 'Personality Development Certificate',
    image: certificate1,
    pdfLink: certificate1,
    badge: 'Skill Certified',
  },
];

function CertificatesSection() {
  return (
    <section id="certificates" className="py-5" style={{ backgroundColor: '#f4f6f9' }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#003366' }} data-aos="fade-up">
          Explore the Certificates We Provide
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Get recognized for your efforts and achievements with professional certification.
        </p>

        <div className="row">
          {certificates.map((cert, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <div className="card certificate-card h-100 shadow border-0 rounded-4 position-relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="card-img-top img-fluid certificate-img"
                />
                <span className="badge position-absolute top-0 start-0 m-2 bg-warning text-dark">
                  <FaAward className="me-1" />
                  {cert.badge}
                </span>
                <div className="card-body text-center">
                  <h5 className="card-title">{cert.title}</h5>
                  <a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary rounded-pill mt-3"
                  >
                    <FaFilePdf className="me-2 rotate-icon" />
                    Preview Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
