// src/components/common/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ArrowUpRightIcon
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const FooterSections = {
  Platform: [
    { name: 'For Students', path: '/students' },
    { name: 'For TPOs', path: '/tpo' },
    { name: 'For Recruiters', path: '/recruiters' },
    { name: 'Pricing', path: '/pricing' }
  ],
  Resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Webinars', path: '/webinars' }
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' }
  ]
};

const SocialIcons = [
  { 
    name: 'LinkedIn', 
    icon: '/icons/linkedin.svg', 
    path: 'https://linkedin.com/company/talentbridge' 
  },
  { 
    name: 'Twitter', 
    icon: '/icons/twitter.svg', 
    path: 'https://twitter.com/talentbridge' 
  },
  { 
    name: 'Instagram', 
    icon: '/icons/instagram.svg', 
    path: 'https://instagram.com/talentbridge' 
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              TalentBridge
            </h2>
            <p className="text-gray-300 mb-6">
              Connecting talents with opportunities, transforming careers 
              through intelligent placement solutions.
            </p>
            <div className="flex space-x-4">
              {SocialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-6 h-6" 
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Sections */}
          {Object.entries(FooterSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4 text-xl">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRightIcon className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-xl">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPinIcon className="w-6 h-6 mr-3 text-blue-400" />
                <span>San Francisco, CA, USA</span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 mr-3 text-blue-400" />
                <span>support@talentbridge.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} TalentBridge. All Rights Reserved.
            </p>
            <div className="space-x-4 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;