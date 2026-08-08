import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Navbar({ scoped = false }) {
  const { pathname } = useLocation();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const listener = () => setCompact(window.scrollY > 32);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handlePortfolioClick = (e) => {
    setMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      if (window.fullpage_api) {
        window.fullpage_api.moveTo('work');
      } else {
        window.location.hash = 'work';
      }
    }
  };

  return (
    <header className={`topbar ${scoped ? 'topbar--scoped' : ''} ${compact ? 'topbar--dark' : ''}`}>
      <Link to="/" aria-label="Vertex Studio home"><img className="brand-mark" src="/assets/Group 19.svg" alt="" /></Link>
      <nav className="topnav" aria-label="Main navigation">
        <Link to="/about" aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
        <Link to="/#work" onClick={handlePortfolioClick}>Portfolio</Link>
        <Link to="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
      </nav>
      <Link className="consultation" to="/contact">Free Consultation <img className="button__arrow-icon" src="/assets/Group 51.svg" alt="" aria-hidden="true" /></Link>
      <button type="button" className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
        <span /><span /><span />
      </button>
      {createPortal(
        <nav className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
          <Link to="/about" aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
          <Link to="/#work" onClick={handlePortfolioClick}>Portfolio</Link>
          <Link to="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className="mobile-nav__cta" to="/contact" onClick={() => setMenuOpen(false)}>Free Consultation <img className="button__arrow-icon" src="/assets/Group 51.svg" alt="" aria-hidden="true" /></Link>
        </nav>,
        document.body
      )}
    </header>
  );
}
