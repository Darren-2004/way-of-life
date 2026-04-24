import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Reset scroll on route change
  }, [location.pathname]);

  const baseHeaderClass = `site-header relative ${isHome ? 'z-50' : 'bg-[#30d5c8] text-[#12322f] z-60'}`;
  const scrolledClass = isScrolled ? (isHome ? 'is-home scrolled' : 'not-home scrolled') : '';

  return (
    <header className={`${baseHeaderClass} ${scrolledClass}`}>
      <div className="section-wrap flex items-center justify-between py-5">
        <nav className={`hidden md:flex items-center text-xs uppercase ${isHome ? 'gap-7 tracking-[0.22em] text-white/95' : 'gap-6 tracking-[0.15em]'}`}>
          <Link to="/" className={`${isHome ? 'opacity-80 hover:opacity-100 transition' : 'hover:text-white'}`}>Accueil</Link>
          <Link to="/services" className={`${isHome ? 'opacity-80 hover:opacity-100 transition' : location.pathname === '/services' ? 'text-white' : 'hover:text-white'}`}>Planning</Link>
        </nav>
        
        <Link to="/" className={`logo-font text-2xl md:text-3xl ${isHome ? 'text-white' : 'text-[#12322f]'}`}>way of life</Link>
        
        <div className={`hidden md:flex items-center ${isHome ? 'gap-7' : 'gap-6 text-xs uppercase tracking-[0.15em]'}`}>
          <Link to="/contact" className={`${isHome ? 'text-xs tracking-[0.22em] uppercase text-white/95 opacity-80 hover:opacity-100 transition' : location.pathname === '/contact' ? 'text-white' : 'hover:text-white'}`}>À propos</Link>
          <Link to="/contact" className={`${isHome ? 'border border-white/80 text-[11px] tracking-[0.18em] uppercase rounded-sm px-4 py-2 text-white hover:bg-white hover:text-[#12322f] transition' : 'hover:text-white'}`}>{isHome ? 'Réserver' : 'Contact'}</Link>
        </div>
        
        <button className={`md:hidden text-2xl ${isHome ? 'text-white' : 'text-[#12322f]'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">&#9776;</button>
      </div>
      
      {mobileMenuOpen && (
        <ul className="mobile-nav-open text-sm uppercase tracking-[0.15em] text-[#4f372d] md:hidden">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Planning</Link></li>
          <li><Link to="/contact">À propos</Link></li>
          <li><Link to="/contact">{isHome ? 'Réserver' : 'Contact'}</Link></li>
        </ul>
      )}
    </header>
  );
}
