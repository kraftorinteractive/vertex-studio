import { Link } from 'react-router-dom';

const tickerLabels = [
  'UI UX Design',
  'Product Design',
  'Website Design',
  'Website Development',
  'Brand Identity',
  'Logo Design',
  'Graphic Design',
  'Creative Agency',
  'Digital Design',
  'UX Research',
  'Web Development',
  'Responsive Website',
  'Landing Page Design',
  'E-commerce Website',
  'Social Media Design',
  'Print Design',
  'Packaging Design',
  'Branding Agency',
  'Design Consultancy',
  'Creative Studio',
];

export default function FooterSection() {
  return (
    <section className="section footer fp-auto-height">
      <div className="footer__cta-block">
        <img className="footer__art-bg" src="/assets/Mask Group 3@2x.png" alt="" aria-hidden="true" />
        <div className="footer__cta-content">
          <h2 className="display"><span style={{ whiteSpace: 'nowrap' }}>Let's Build Something</span><br /><span style={{ color: '#ff8c36' }}>Remarkable.</span></h2>
          <p className="muted">Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.</p>
          <Link className="button button--outline" to="/contact">Start Your Project <span className="arrow">↗</span></Link>
        </div>
      </div>

      <div className="footer__separator" aria-hidden="true" />

      <div className="footer__main-block">
        <div className="vertex-section">
          <img className="vertex-image vertex-image--sharp" src="/assets/Group 81@2x.png" alt="VERTEX" />
          <img className="vertex-image vertex-image--blur" src="/assets/Group 81@2x.png" alt="" aria-hidden="true" />
          <div className="marquee-bar" aria-hidden="true">
            <div className="track">
              {[...tickerLabels, ...tickerLabels].flatMap((label, i) => [
                <span className="dot" key={`b${i}`} />,
                <span key={`t${i}`}>{label}</span>
              ])}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__identity">
            <img className="footer__brand-img" src="/assets/Group 79@2x.png" alt="Vertex Studio" />
            <div className="footer__slogan">
              <span>Designing brands.</span>
              <span>Creating experiences.</span>
              <span>Building digital success.</span>
            </div>
          </div>
          <nav className="footer__links">
            <Link to="/about" className="footer__link--active">About</Link>
            <a href="/#work">Portfolio</a>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <p className="copyright">© 2026 Vertex Studio. All Rights Reserved.</p>
      </div>
    </section>
  );
}


