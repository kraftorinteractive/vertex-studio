import { Link } from 'react-router-dom';

const tickerLabels = ['Logo Design', 'Visual Identity', 'Website Development', 'Digital Marketing Assets', 'Packaging Design', 'Brochures'];

export default function FooterSection() {
  return <section className="section footer" id="contact">
    <div className="footer__top">
      <div>
        <h2 className="display">Let's Build Something<br /><span style={{ color: '#ff8c36' }}>Remarkable.</span></h2>
        <p className="muted">Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.</p>
        <a className="button button--outline" href="mailto:hello@vertexstudio.in">Start Your Project <span className="arrow">↗</span></a>
      </div>
      <img className="footer__art" src="/assets/Mask Group 3@2x.png" alt="Illuminated Vertex mark" />
    </div>
    <div className="vertex-section">
      <img className="vertex-image" src="/assets/Group 81@2x.png" alt="VERTEX" />
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-bar__glow" />
        <div className="marquee-bar__glass">
          <div className="track">{[...tickerLabels, ...tickerLabels].flatMap((label, i) => [<span className="dot" key={`b${i}`} />, <span key={`t${i}`}>{label}</span>])}</div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__identity"><div className="footer__brand"><span className="footer__brand-icon" aria-hidden="true" /><span className="footer__brand-name">VERTEX</span><span className="footer__brand-sub">STUDIO</span></div><p>Designing brands.<br />Creating experiences.<br />Building digital success.</p></div>
      <nav className="footer__links"><Link to="/about">About</Link><a href="/#work">Portfolio</a><a href="#contact">Contact</a></nav>
      <p className="copyright">© 2026 Vertex Studio. All Rights Reserved.</p>
    </div>
  </section>;
}
