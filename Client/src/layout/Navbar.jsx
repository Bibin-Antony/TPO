import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  XMarkIcon 
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const NavLinks = [
  { 
    name: 'Home', 
    path: '/', 
    Icon: HomeIcon 
  },
  { 
    name: 'For Students', 
    path: '/students', 
    Icon: UserGroupIcon 
  },
  { 
    name: 'For TPOs', 
    path: '/tpo', 
    Icon: AcademicCapIcon 
  },
  { 
    name: 'For Recruiters', 
    path: '/recruiters', 
    Icon: BriefcaseIcon 
  }
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: '-100%',
      transition: { 
        duration: 0.5,
        ease: 'easeInOut' 
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeInOut' 
      }
    }
  };

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: (custom) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.5 
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
        >
          <div className="container mx-auto px-4 pt-20 h-full flex flex-col">
            {/* Close Button */}
            <button 
              onClick={toggleMenu} 
              className="absolute top-6 right-6"
            >
              <XMarkIcon className="w-10 h-10" />
            </button>

            {/* Navigation Links */}
            <nav className="flex-grow space-y-8">
              {NavLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  className="flex items-center space-x-4"
                >
                  <link.Icon className="w-8 h-8" />
                  <Link 
                    to={link.path} 
                    onClick={toggleMenu}
                    className="text-3xl font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pb-12 text-center"
            >
              <p className="text-sm opacity-70">
                © 2024 TalentBridge. All Rights Reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <Link 
                  to="/privacy" 
                  className="hover:underline text-sm"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="hover:underline text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent '
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? 'text-blue-600' : 'text-white'
        }`}>
          TalentBridge
        </Link>

        <div className="hidden md:flex space-x-6">
          {NavLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-gray-100 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <Link 
            to="/login" 
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              isScrolled 
                ? 'text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Login
          </Link>
          <Link 
            to="/Signup" 
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-900 hover:bg-gray-100'
            }`}
          >
            Get Started
          </Link>
        </div>

        <button 
          onClick={toggleMobileMenu} 
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        <MobileMenu 
          isOpen={mobileMenuOpen} 
          toggleMenu={toggleMobileMenu} 
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
