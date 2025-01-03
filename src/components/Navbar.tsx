import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">PictCyberCell</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/events" active={location.pathname === '/events'}>Events</NavLink>
            <NavLink to="/team" active={location.pathname === '/team'}>Team</NavLink>
            <NavLink to="/resources" active={location.pathname === '/resources'}>Resources</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
            <Button as={Link} to="/developers">Join Now</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink to="/events" active={location.pathname === '/events'}>Events</MobileNavLink>
            <MobileNavLink to="/team" active={location.pathname === '/team'}>Team</MobileNavLink>
            <MobileNavLink to="/resources" active={location.pathname === '/resources'}>Resources</MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
            <Button as={Link} to="/developers" className="w-full mt-4">Join Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`text-gray-300 hover:text-blue-500 transition-colors ${active ? 'text-blue-500' : ''}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md ${
      active ? 'text-blue-500 bg-blue-500/10' : 'text-gray-300 hover:text-blue-500 hover:bg-blue-500/10'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;