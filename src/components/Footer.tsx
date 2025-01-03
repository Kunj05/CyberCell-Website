import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">PictCyberCell</h3>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of cyber defenders.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/events">Events</FooterLink>
              <FooterLink to="/team">Team</FooterLink>
              <FooterLink to="/resources">Resources</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              Email: contact@pictcybercell.com
            </p>
            <p className="text-gray-400 text-sm mt-2 ">
              Location: SCTR'S Pune Institute of Computer Technology,
              Dhankawadi, Pune, Maharashtra.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/5 flex justify-between  list-none">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PictCyberCell. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            <FooterLink to="/developers" className="ml-1 text-blue-500">
              by Web Developers
            </FooterLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={to}
      className="relative group text-gray-400 hover:text-white transition-colors"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -z-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-sm" />
    </Link>
  </li>
);

export default Footer;
