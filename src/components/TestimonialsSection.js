import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'B.Tech Student, Delhi University',
    testimonial: 'Miranaya’s internship program was a turning point. The mentorship, hands-on projects, and placement support were top-notch!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'MCA Graduate, Hyderabad',
    testimonial: 'The live mentor sessions and real-world projects helped me bridge the gap between academics and industry expectations.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4.5,
  },
  {
    name: 'Rohit Sharma',
    role: 'Software Intern, Pune',
    testimonial: 'I gained not just technical skills, but also soft skills through personality development workshops. 100% recommended!',
    image: 'https://randomuser.me/api/portraits/men/63.jpg',
    rating: 4,
  },
];

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color="#ff6600" />
      ))}
      {halfStar && <FaStarHalfAlt color="#ff6600" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color="#ff6600" />
      ))}
    </>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-5" style={{ backgroundColor: '#f4f6f9' }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#003366' }} data-aos="fade-up">
          Hear From Our Students
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Real experiences, real results — see how Miranaya has made a difference.
        </p>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="card mx-auto shadow-lg border-0 rounded-4" style={{ maxWidth: '700px', backgroundColor: '#fff' }}>
                  <div className="card-body p-4">
                    <FaQuoteLeft size={30} color="#ff6600" className="mb-3" />
                    <p className="text-muted fst-italic">"{item.testimonial}"</p>
                    <div className="d-flex align-items-center mt-4 justify-content-center gap-3 flex-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-circle"
                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      />
                      <div className="text-start">
                        <h5 className="mb-0" style={{ color: '#003366' }}>{item.name}</h5>
                        <small className="text-muted d-block mb-1">{item.role}</small>
                        <div className="d-flex">{renderStars(item.rating)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
