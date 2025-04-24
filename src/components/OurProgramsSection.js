import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurProgramsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const programs = [
    {
      title: 'Full Stack Development',
      description: 'Master both frontend and backend development with real-world projects, mentorship, and certifications.',
      image: require('../assets/hero.png'),
    },
    {
      title: 'Data Science & AI',
      description: 'Learn data analysis, machine learning, and AI tools to solve complex problems and make smart decisions.',
      image: require('../assets/hero.png'),
    },
    {
      title: 'UI/UX & Product Design',
      description: 'Explore design thinking, wireframing, prototyping, and deliver delightful user experiences.',
      image: require('../assets/hero.png'),
    },
    {
      title: 'Coding for Kids',
      description: 'Interactive and gamified coding programs for kids to build logic and creativity in fun ways.',
      image: require('../assets/hero.png'),
    },
  ];

  return (
    <section id="programs" className="py-5" style={{ background: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
          Our <span style={{ color: '#003366' }}>Programs</span>
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Explore our variety of programs designed for different age groups, skill levels, and career goals.
        </p>

        <div className="row">
          {programs.map((program, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div
                className="card shadow-lg h-100 border-0 rounded-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #e6eef6, #ffffff)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="card-img-top"
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold" style={{ color: '#003366' }}>{program.title}</h5>
                  <p className="card-text text-muted small">{program.description}</p>
                  <button className="btn btn-outline-primary mt-3 w-100 rounded-pill">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProgramsSection;
