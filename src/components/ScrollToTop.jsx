import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  if (typeof window !== 'undefined' && window.location.hash) {
    window.history.replaceState(null, '', pathname);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force fullpage.js to reset to the very first section without animating
    if (window.fullpage_api) {
      window.fullpage_api.silentMoveTo(1);
    }
  }, [pathname]);

  return null;
}
