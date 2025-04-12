import React, { useState } from 'react';

const CallToActionNewsletter = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('sent');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="call-to-action" className="call-to-action section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="cta-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Subscribe to our newsletter{status}</h2>
              <p>
                Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur aliquet quam id dui posuere blandit.
              </p>
              <form onSubmit={handleSubmit} className="php-email-form cta-form" data-aos="fade-up" data-aos-delay="300">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-primary" type="submit" id="button-subscribe">
                    Subscribe
                  </button>
                </div>

                {status === 'loading' && <div className="loading">Loading...</div>}
                {status === 'error' && <div className="error-message">Please enter a valid email address!</div>}
                {status === 'sent' && <div className="sent-message">Your subscription request has been sent. Thank you!</div>}
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cta-image" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/cta/cta-1.webp" alt="Subscribe" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionNewsletter;
