import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRocket, FaUserGraduate, FaLock, FaHeadset } from 'react-icons/fa';

function WhyChooseUsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaRocket size={36} />,
      title: 'Fast & Practical Learning',
      desc: 'We focus on speed and efficiency to help learners master concepts faster and apply them in real-world scenarios.',
      color: '#003366',
    },
    {
      icon: <FaUserGraduate size={36} />,
      title: 'Expert-Led Courses',
      desc: 'Our mentors are industry professionals who know exactly what skills matter in today’s job market.',
      color: '#ff6600',
    },
    {
      icon: <FaLock size={36} />,
      title: 'Trust & Transparency',
      desc: 'We are committed to building trust through honest feedback, certifications, and secure learning.',
      color: '#003366',
    },
    {
      icon: <FaHeadset size={36} />,
      title: '24/7 Learner Support',
      desc: 'Your success matters. Our support team is always ready to help — anytime you need it.',
      color: '#ff6600',
    },
  ];

  return (
    <section id="why-choose-us" className="py-5" style={{ background: '#f9f9f9', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" data-aos="fade-down">
          Why <span style={{ color: '#003366' }}>Choose Us</span>
        </h2>
        <p className="text-muted mb-5" data-aos="fade-down" data-aos-delay="100">
          Discover what makes <strong>Miranaya</strong> stand out in the world of modern digital learning.
        </p>

        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 rounded shadow-lg h-100" style={{ backgroundColor: '#ffffff' }}>
                <div
                  className="d-inline-flex justify-content-center align-items-center mb-3 rounded-circle"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: item.color + '20',
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-2" style={{ color: item.color }}>{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
