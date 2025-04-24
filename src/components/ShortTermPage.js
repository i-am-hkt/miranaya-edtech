import React from 'react';
import './ShortTermPage.css'; // Add custom styling
import { Link } from 'react-router-dom';
import { angularImg, heroImg, nodejsImg, phpImg, reactImg, pythonImg, javaImg, dockerImg, awsImg, rubyImg, flutterImg } from '../assets/images'; // Add new images

function ShortTermPage() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="short-term-hero text-white py-5 text-center">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4">Short Term Courses</h1>
            <p className="lead">Enhance your skills with our expert-led short-term courses.</p>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="course-overview py-5">
        <div className="container">
          <h2 className="text-center mb-4">LATEST DOMAINS</h2>
          <div className="row">
            {/* Angular JS Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Beginner & Popular</div>
                <img src={angularImg} alt="Angular JS" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Angular JS</h5>
                  <p className="card-text">AngularJS is a JavaScript-based framework for building dynamic web applications, enabling developers to create responsive, interactive, and feature-rich user interfaces with ease.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Node JS Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Intermediate</div>
                <img src={nodejsImg} alt="Node JS" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Node JS</h5>
                  <p className="card-text">Node.js is a JavaScript runtime enabling developers to create fast, scalable, and efficient server-side applications with real-time capabilities.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* PHP Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Advanced with Hands-on Project</div>
                <img src={phpImg} alt="PHP" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">PHP</h5>
                  <p className="card-text">PHP is a server-side scripting language designed for web development, enabling dynamic content, database interaction, and efficient backend functionality.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* React JS Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Beginner</div>
                <img src={nodejsImg} alt="React JS" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">React JS</h5>
                  <p className="card-text">Learn how to build dynamic and modern user interfaces using ReactJS, a popular JavaScript library for building user interfaces.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Python Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Beginner</div>
                <img src={nodejsImg} alt="Python" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">Master the fundamentals of Python programming language and unlock the power of one of the most versatile languages in the tech industry.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Java Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Intermediate</div>
                <img src={nodejsImg} alt="Java" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Java</h5>
                  <p className="card-text">Learn Java, one of the most widely used programming languages, used for building web, mobile, and enterprise applications.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Docker Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Intermediate</div>
                <img src={phpImg} alt="Docker" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Docker</h5>
                  <p className="card-text">Understand containerization and how Docker helps in the development, deployment, and running of applications within containers.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* AWS Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Advanced</div>
                <img src={angularImg} alt="AWS" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">AWS</h5>
                  <p className="card-text">Learn how to leverage AWS (Amazon Web Services) for scalable cloud-based solutions, covering key services and tools.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Ruby Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Beginner</div>
                <img src={nodejsImg} alt="Ruby" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Ruby</h5>
                  <p className="card-text">Learn Ruby programming language, popular for its simplicity and productivity, especially for web development with Ruby on Rails.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Flutter Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="course-tag">Beginner</div>
                <img src={nodejsImg} alt="Flutter" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Flutter</h5>
                  <p className="card-text">Develop beautiful and performant cross-platform apps using Flutter, the open-source UI toolkit by Google for building natively compiled applications.</p>
                  <Link to="/request-call" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="course-benefits py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">Why Choose Our Short Term Courses?</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="benefit-card text-center shadow-sm p-4 rounded">
          <div className="benefit-icon mb-3">
            <i className="fas fa-chalkboard-teacher fa-2x text-primary"></i>
          </div>
          <h5 className="fw-bold mb-2">Expert Trainers</h5>
          <p>Learn from industry professionals with deep domain knowledge and real-world experience.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="benefit-card text-center shadow-sm p-4 rounded">
          <div className="benefit-icon mb-3">
            <i className="fas fa-laptop-code fa-2x text-success"></i>
          </div>
          <h5 className="fw-bold mb-2">Hands-On Learning</h5>
          <p>Work on real-world projects that enhance your practical skills and confidence.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="benefit-card text-center shadow-sm p-4 rounded">
          <div className="benefit-icon mb-3">
            <i className="fas fa-clock fa-2x text-warning"></i>
          </div>
          <h5 className="fw-bold mb-2">Flexible Timings</h5>
          <p>Schedule your learning around your commitments with our flexible batch options.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default ShortTermPage;
