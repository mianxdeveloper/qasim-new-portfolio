import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're in a dark section
      const scrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Check if we're on the home page
      const isHomePage = location.pathname === '/';
      
      if (isHomePage) {
        // Hero section is light, so after that it's dark
        if (scrollPos > viewportHeight * 0.7) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } else {
        // All other pages have dark backgrounds
        setIsDark(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Color classes based on scroll position
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const textColorHover = isDark ? 'hover:text-white' : 'hover:text-gray-900';
  const bgColor = isDark ? 'bg-white/10' : 'bg-white/10';
  const borderColor = isDark ? 'border-white/20' : 'border-white/20';

  return (
    <nav className="fixed top-0 w-full z-50 px-3 sm:px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-6">
          {/* Left Side - Logo & Available Badge */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className={`relative ${bgColor} backdrop-blur-xl ${textColor} px-4 py-2 rounded-full ${borderColor} border hover:bg-white/20 transition-all shadow-lg shadow-black/5`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-full pointer-events-none"></div>
                <span className="relative z-10 text-sm sm:text-base font-medium">Qasim A.</span>
              </div>
            </Link>

            {/* Available for Projects Badge - Desktop */}
            <div className={`hidden lg:flex items-center gap-1.5 px-3 py-2 ${bgColor} backdrop-blur-xl ${borderColor} border rounded-full shadow-lg shadow-black/5 relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-full pointer-events-none"></div>
              <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse relative z-10"></div>
              <span className={`text-xs ${textColor} relative z-10`}>Available for projects</span>
            </div>
          </div>

          {/* Center - Desktop Menu */}
          <div className={`hidden md:flex items-center gap-0.5 ${bgColor} backdrop-blur-xl ${borderColor} border rounded-full px-1.5 py-1.5 shadow-lg shadow-black/5 relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-full pointer-events-none"></div>
            {navLinks.map((link) => {
              const isHashLink = link.path.includes('#');
              
              if (isHashLink) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const sectionId = link.path.split('#')[1];
                        const element = document.getElementById(sectionId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="relative group px-3 py-1.5 rounded-full z-10 overflow-hidden"
                  >
                    {/* Animated background that comes from bottom */}
                    <motion.div
                      className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-full"
                      initial={{ y: '100%', opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    <span
                      className={`relative z-10 text-xs sm:text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      } ${textColorHover}`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-3 py-1.5 rounded-full z-10 overflow-hidden"
                >
                  {/* Animated background that comes from bottom */}
                  <motion.div
                    className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-full"
                    initial={{ y: '100%', opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  <span
                    className={`relative z-10 text-xs sm:text-sm transition-colors duration-300 ${
                      isActive(link.path)
                        ? `${textColor} font-medium`
                        : `${isDark ? 'text-gray-300' : 'text-gray-700'} ${textColorHover}`
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Side - CTA Button - Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className={`group relative ${bgColor} backdrop-blur-xl ${textColor} h-[42px] px-6 rounded-full ${borderColor} border shadow-lg shadow-black/5 overflow-hidden transition-all hover:scale-105 flex items-center`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-full pointer-events-none"></div>
              {/* Hover background animation from bottom */}
              <motion.div
                className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-full"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <span className={`btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2 ${textColor}`}>
                Get in Touch
                <ArrowRight size={14} className="animate-icon-pulse" />
              </span>
              <span className={`btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2 ${textColor}`}>
                <ArrowRight size={14} className="animate-icon-pulse" />
                Contact Me
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative p-2.5 ${bgColor} backdrop-blur-xl ${borderColor} border rounded-full shadow-lg shadow-black/5`}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-full pointer-events-none"></div>
            <div className={`relative z-10 ${textColor}`}>
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg shadow-black/5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="flex flex-col gap-2 relative z-10">
              {navLinks.map((link) => {
                const isHashLink = link.path.includes('#');
                
                if (isHashLink) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={(e) => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          e.preventDefault();
                          const sectionId = link.path.split('#')[1];
                          const element = document.getElementById(sectionId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      }}
                      className="px-4 py-2 rounded-full transition-all text-gray-700 hover:bg-white/30 hover:backdrop-blur-sm"
                    >
                      {link.name}
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      isActive(link.path)
                        ? 'bg-white/40 backdrop-blur-sm text-gray-900 font-medium'
                        : 'text-gray-700 hover:bg-white/30 hover:backdrop-blur-sm'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex items-center gap-2 px-4 py-2 bg-lime-500/20 backdrop-blur-sm border border-lime-500/30 rounded-full w-fit mt-2">
                <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-900">Available for projects</span>
              </div>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 group relative bg-white/10 backdrop-blur-xl text-gray-900 h-[48px] px-5 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all overflow-hidden flex items-center"
              >
                <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
                  Get in Touch
                  <ArrowRight size={14} className="animate-icon-pulse" />
                </span>
                <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
                  <ArrowRight size={14} className="animate-icon-pulse" />
                  Contact Me
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
