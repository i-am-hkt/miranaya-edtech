import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-5 text-white" style={{ backgroundColor: '#003366' }}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Miranaya</h5>
            <p className="small text-light">
              Empowering learners and educators through innovative tech. Shaping the future of education.
            </p>
            <p className="mb-0 small"><i className="bi bi-telephone-fill me-2"></i>+91 9693927130</p>
            <p className="small"><i className="bi bi-envelope-fill me-2"></i>contact@miranaya.com</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#programs" className="text-white text-decoration-none">Our Programs</a></li>
              <li className="mb-2"><a href="#request-call" className="text-white text-decoration-none">Request a Call</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Stay Connected</h6>
            <p className="small text-light">Subscribe to get the latest updates & offers.</p>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Your Email" />
              <button className="btn btn-outline-light" type="submit">Subscribe</button>
            </form>

            <div className="mt-3 d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-light pt-3 mt-4 text-center small text-white-50">
          © {new Date().getFullYear()} Miranaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
