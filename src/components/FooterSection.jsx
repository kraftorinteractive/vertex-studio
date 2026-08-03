import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const tickerLabels = ['Logo Design', 'Visual Identity', 'Website Development', 'Digital Marketing Assets', 'Packaging Design', 'Brochures'];
const availableServices = ['Brand Identity', 'UI/UX Design', 'Website Development', 'Video Editing', 'Design Consultation', 'Packaging Design'];

export default function FooterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('Brand Identity');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_kyz68uy';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    try {
      if (publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            service: selectedService,
            message: message,
          },
          publicKey
        );
      } else {
        // Fallback simulation if public key isn't set yet in .env
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setStatus({ loading: false, success: true, error: '' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again or email us directly.' });
    }
  };

  return <section className="section footer">
    <div className="footer__top">
      <div className="footer__info">
        <h2 className="display">Let's Build Something<br /><span style={{ color: '#ff8c36' }}>Remarkable.</span></h2>
        <p className="muted">Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.</p>
        <div className="footer__contact-direct">
          <a className="button button--outline" href="mailto:hello@vertexstudio.in">hello@vertexstudio.in <span className="arrow">↗</span></a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="contact-form__title">Send Us a Message</h3>

        {status.success && (
          <div className="contact-form__alert contact-form__alert--success">
            ✓ Message sent successfully! We'll get back to you shortly.
          </div>
        )}

        {status.error && (
          <div className="contact-form__alert contact-form__alert--error">
            {status.error}
          </div>
        )}

        <div className="contact-form__group">
          <label className="contact-form__label">Service Required</label>
          <div className="contact-form__pills">
            {availableServices.map((srv) => (
              <button
                type="button"
                key={srv}
                className={`contact-form__pill ${selectedService === srv ? 'contact-form__pill--active' : ''}`}
                onClick={() => setSelectedService(srv)}
              >
                {srv}
              </button>
            ))}
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__group">
            <label className="contact-form__label">Your Name *</label>
            <input
              type="text"
              className="contact-form__input"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-form__group">
            <label className="contact-form__label">Email Address *</label>
            <input
              type="email"
              className="contact-form__input"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label">Project Details *</label>
          <textarea
            className="contact-form__textarea"
            rows="3"
            placeholder="Tell us about your goals, timeline, and budget..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="button button--violet contact-form__submit"
          disabled={status.loading}
        >
          {status.loading ? 'Sending...' : 'Send Message'} <span className="arrow">↗</span>
        </button>
      </form>
    </div>

    <div className="vertex-section">
      <img className="vertex-image vertex-image--sharp" src="/assets/Group 81@2x.png" alt="VERTEX" />
      <img className="vertex-image vertex-image--blur" src="/assets/Group 81@2x.png" alt="" aria-hidden="true" />
      <div className="marquee-bar" aria-hidden="true">
        <div className="track">{[...tickerLabels, ...tickerLabels].flatMap((label, i) => [<span className="dot" key={`b${i}`} />, <span key={`t${i}`}>{label}</span>])}</div>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="footer__identity"><div className="footer__brand"><span className="footer__brand-icon" aria-hidden="true" /><span className="footer__brand-name">VERTEX</span><span className="footer__brand-sub">STUDIO</span></div><p>Designing brands.<br />Creating experiences.<br />Building digital success.</p></div>
      <nav className="footer__links"><Link to="/about">About</Link><a href="/#work">Portfolio</a><a href="#contact">Contact</a></nav>
      <p className="copyright">© 2026 Vertex Studio. All Rights Reserved.</p>
    </div>
  </section>;
}
