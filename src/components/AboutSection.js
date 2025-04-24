import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegLightbulb, FaBullseye, FaEye } from 'react-icons/fa';

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section py-5" style={{ background: 'linear-gradient(to bottom, #eef2f7, #ffffff)' }}>
      <div className="container" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* About Top Content */}
        <div className="row align-items-center mb-5">
          {/* Left Side: Text Content */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <h2 className="display-5 fw-bold text-dark mb-4">
              About <span style={{ color: '#003366' }}>Miranaya</span>
            </h2>
            <p className="lead text-muted">
              At <strong style={{ color: '#ff7f00' }}>Miranaya</strong>, we are dedicated to revolutionizing education through speed,
              innovation, and trust. Our goal is to empower learners everywhere with accessible and effective solutions.
            </p>
            <p className="text-secondary">
              With structured learning paths, a supportive community, and a cutting-edge platform, Miranaya ensures that learning is
              engaging, practical, and truly transformational.
            </p>

            <div className="d-flex align-items-center mt-4">
              <FaRegLightbulb size={40} color="#ff6600" />
              <div className="ms-3">
                <h5 className="fw-semibold text-dark mb-1">Innovation at Every Step</h5>
                <p className="mb-0 text-muted">
                  We combine technology with proven educational practices to create a seamless experience for our learners.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <img
              src={require('../assets/hero.png')}
              alt="About Miranaya"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="row text-center">
          {/* Mission */}
          <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up">
            <div className="p-4 border-0 rounded shadow-lg h-100" style={{ backgroundColor: '#003366', color: '#fff' }}>
              <FaBullseye size={40} />
              <h4 className="mt-3 fw-bold">Our Mission</h4>
              <p className="mt-2">
                To provide accessible, fast, and high-quality learning experiences to help every individual thrive in a digital-first world.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-12 col-md-6" data-aos="zoom-in-up" data-aos-delay="100">
            <div className="p-4 border-0 rounded shadow-lg h-100" style={{ backgroundColor: '#ff6600', color: '#fff' }}>
              <FaEye size={40} />
              <h4 className="mt-3 fw-bold">Our Vision</h4>
              <p className="mt-2">
                To be the most trusted and innovative learning platform, inspiring millions to learn smarter and grow faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
