import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RequestACallSection.css';

function RequestACallSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    });
  };

  return (
    <section
      className="py-5"
      id="request-call"
      style={{
        background: 'linear-gradient(135deg, #e8f0ff, #ffffff)',
      }}
    >
      <div className="container px-4 px-md-5">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-right">
            <h2 className="fw-bold display-5 mb-4" style={{ color: '#003366' }}>
              Need A Free Demo? Please Feel Free to Contact Us
            </h2>

            <p className="text-muted mb-4">
              <strong>Miranaya</strong> is committed to revolutionizing education through innovative technology that empowers learners and educators alike.
            </p>

            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-award-fill text-primary me-2 fs-5"></i>
                <strong>Certified Courses</strong>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-person-badge-fill text-success me-2 fs-5"></i>
                <strong>Professional Mentors</strong>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-headset text-danger me-2 fs-5"></i>
                <strong>24/7 Support</strong>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-currency-rupee text-warning me-2 fs-5"></i>
                <strong>Fair Prices</strong>
              </li>
            </ul>

            <p className="mt-4 fw-semibold">
              <i className="bi bi-telephone-forward-fill text-primary me-2"></i>
              Call to ask any question: <span className="text-dark">+91 9693927130</span>
            </p>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
              {submitted ? (
                <div className="alert alert-success text-center" role="alert">
                  ✅ Thank you! We'll get back to you shortly.
                </div>
              ) : (
                <>
                  <h5 className="text-center fw-bold text-primary mb-4">Request a Call</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control shadow-sm"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control shadow-sm"
                        placeholder="Your Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        className="form-select shadow-sm"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Program</option>
                        <option value="Web Development">Certified Course</option>
                        <option value="Data Science">Short term Internship</option>
                        <option value="Machine Learning">Long term Internship</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control shadow-sm"
                        rows="4"
                        placeholder="Message (Optional)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 shadow-sm">
                      <i className="bi bi-telephone-inbound me-2"></i>Request a Call
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestACallSection;
