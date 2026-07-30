import { Link } from 'react-router-dom';

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
    <div className="footer__word">VERTEX</div>
    <div className="ticker"><span>•</span><span>Logo Design</span><span>•</span><span>Visual Identity</span><span>•</span><span>Website Development</span><span>•</span><span>Digital Marketing Assets</span><span>•</span><span>Packaging Design</span><span>•</span><span>Brochures</span></div>
    <div className="footer__bottom">
      <div className="footer__identity"><img src="/assets/Group 43@2x.png" alt="Vertex Studio" /><p>Designing brands.<br />Creating experiences.<br />Building digital success.</p></div>
      <nav className="footer__links"><Link to="/about">About</Link><a href="/#work">Portfolio</a><a href="#contact">Contact</a></nav>
      <p className="copyright">© 2026 Vertex Studio. All Rights Reserved.</p>
    </div>
  </section>;
}
