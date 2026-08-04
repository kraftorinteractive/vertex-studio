import { Link } from 'react-router-dom';

const tickerLabels = ['Logo Design', 'Visual Identity', 'Website Development', 'Digital Marketing Assets', 'Packaging Design', 'Brochures'];

export default function FooterSection() {
  return (
    <section className="section footer fp-auto-height">
      <div className="footer__cta-block">
        <img className="footer__art-bg" src="/assets/Mask Group 3@2x.png" alt="" aria-hidden="true" />
        <div className="footer__cta-content">
          <h2 className="display">Let's Build Something<br /><span style={{ color: '#ff8c36' }}>Remarkable.</span></h2>
          <p className="muted">Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.</p>
          <Link className="button button--outline" to="/contact">Start Your Project <span className="arrow">↗</span></Link>
        </div>
      </div>

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
            <div className="footer__brand">
              <span className="footer__brand-icon" aria-hidden="true" />
              <span className="footer__brand-name">VERTEX</span>
              <span className="footer__brand-sub">STUDIO</span>
            </div>
            <p>Designing brands.<br />Creating experiences.<br />Building digital success.</p>
          </div>
          <nav className="footer__links">
            <Link to="/about">About</Link>
            <a href="/#work">Portfolio</a>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <p className="copyright">© 2026 Vertex Studio. All Rights Reserved.</p>
      </div>
    </section>
  );
}


