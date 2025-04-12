import React from 'react';

const CallToAction = () => {
  return (
    <section id="call-to-action-2" className="call-to-action-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

          <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
            <span className="badge text-uppercase mb-2">Don't Miss</span>
            <h2>Revolutionize Your Digital Experience Today</h2>
            <p className="my-4">
              Strategia accelerates your business growth through innovative solutions and cutting-edge technology.
              Join thousands of satisfied customers who have transformed their operations.
            </p>

            <div className="features d-flex flex-wrap gap-3 mb-4">
              {['Premium Support', 'Cloud Integration', 'Real-time Analytics'].map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="cta-buttons d-flex flex-wrap gap-3">
              <a href="#" className="btn btn-primary">Start Free Trial</a>
              <a href="#" className="btn btn-outline">Learn More</a>
            </div>
          </div>

          <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
            <img src="assets/img/misc/misc-1.webp" alt="Digital Platform" className="img-fluid rounded-4" />
            <div className="floating-card">
              <div className="card-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="card-content">
                <span className="stats-number">245%</span>
                <span className="stats-text">Growth Rate</span>
              </div>
            </div>
          </div>

          <div className="decoration">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
