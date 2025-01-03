import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <StarsBackground starDensity={0.0002} />
        <ShootingStars 
          starColor="#4F46E5"
          trailColor="#60A5FA"
          starWidth={3}
          starHeight={3}
          minSpeed={15}
          maxSpeed={40}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;