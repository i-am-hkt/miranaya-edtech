import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

function BenefitsSection() {
  const pricingPlans = [
    {
      title: 'Short Term Internship',
      price: '₹ 2999/ 1-2 Months',
      background: '#fdf4e3',
      features: [
        { feature: 'Live Mentor Training', available: true },
        { feature: '24x7 Support', available: true },
        { feature: '20 + Recorded video content access', available: true },
        { feature: '6 Months LMS access', available: true },
        { feature: '1 Industrial Project', available: true },
        { feature: 'Certificate for Course Completion', available: true },
        { feature: 'Certificate for Internship Completion', available: true },
        { feature: 'Dedicated Telegram Group Access for 6 months', available: true },
        { feature: 'Personality Development Workshops', available: false },
        { feature: 'Outstanding Performance Certificate', available: false },
        { feature: 'Letter Of recommendation', available: false },
        { feature: 'Personality Development Certificate', available: false },
        { feature: '100% Placement Assistance', available: false },
      ],
    },
    {
      title: 'Long Term Internships',
      price: '₹ 12999/ 4-6 Months',
      background: '#e3f7fd',
      features: [
        { feature: 'Access to more than 1 Course', available: true },
        { feature: 'Dedicated Support', available: true },
        { feature: 'Live Mentor Training [Peer to Peer ]', available: true },
        { feature: '24x7 Support', available: true },
        { feature: 'Recorded video content access', available: true },
        { feature: 'Lifetime LMS access', available: true },
        { feature: '4 Industrial Project [2 minor & 2 major]', available: true },
        { feature: '100% Placement Assistance', available: true },
        { feature: 'Certificate for Course Completion', available: true },
        { feature: 'Certificate for Internship Completion', available: true },
        { feature: 'Dedicated Telegram Group Access for lifetime', available: true },
        { feature: 'Personality Development Workshops', available: true },
        { feature: 'Outstanding Performance Certificate', available: true },
        { feature: 'Personality Development Certificate', available: true },
        { feature: 'Letter Of recommendation', available: true },
        { feature: 'Custom Certificates', available: true },
        { feature: 'Group Mentorship', available: true },
      ],
    },
    {
      title: 'Intermediate Level',
      price: '₹ 6999/ 3-4 Months',
      background: '#edf4ff',
      features: [
        { feature: 'Live Mentor Training', available: true },
        { feature: '24x7 Support', available: true },
        { feature: 'Recorded video content access', available: true },
        { feature: '1 Year LMS access', available: true },
        { feature: '2 Industrial Project [1 minor & 1 major]', available: true },
        { feature: '100% Placement Assistance', available: true },
        { feature: 'Certificate for Course Completion', available: true },
        { feature: 'Certificate for Internship Completion', available: true },
        { feature: 'Dedicated Telegram Group Access for 1 year', available: true },
        { feature: 'Personality Development Workshops', available: true },
        { feature: 'Outstanding Performance Certificate', available: true },
        { feature: 'Personality Development Certificate', available: true },
        { feature: 'Letter Of recommendation', available: false },
      ],
    },
  ];

  return (
    <section id="benefits" className="py-5" style={{ background: '#f4f6f9' }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#003366' }} data-aos="fade-up">
          We are Offering Courses with Valuable Benefits for Your Career
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Discover the benefits of choosing Miranaya for your learning journey.
        </p>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div className="col-12 col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div
                className="card shadow-lg h-100 border-0 rounded-4"
                style={{
                  background: plan.background,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="card-header text-center" style={{ backgroundColor: '#003366', color: '#ffffff', padding: '1.5rem' }}>
                  <h4 className="fw-bold">{plan.title}</h4>
                  <h3 className="mt-2">{plan.price}</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {plan.features.map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-3">
                        {item.available ? (
                          <FaCheckCircle size={18} color="#ff6600" className="me-2" />
                        ) : (
                          <FaTimes size={18} color="#ccc" className="me-2" />
                        )}
                        <span className={item.available ? 'text-muted' : 'text-danger'}>{item.feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-primary w-100 rounded-pill">Start Learning</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us - Centered */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-8" data-aos="fade-up" data-aos-delay="300">
            <div
              className="card shadow-lg border-0 rounded-4 text-white text-center"
              style={{
                background: 'linear-gradient(to right, #003366, #005599)',
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
