import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-16 py-10 flex items-center justify-between pointer-events-none">
      <div className="flex-shrink-0 pointer-events-auto">
        <Link to="/">
          <img src="/assets/White transparent@2x.png" alt="Vertex Studio Logo" className="h-10" />
        </Link>
      </div>
      
      <div className="flex gap-12 text-brand-700 pointer-events-auto ml-16 text-lg">
        <Link to="/about" className="hover:text-brand-accent transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link>
        <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
      </div>

      <div className="pointer-events-auto">
        <button className="bg-brand-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors cursor-pointer text-lg">
          Free Consultation
        </button>
      </div>
    </nav>
  );
}
