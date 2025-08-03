import { Link } from 'react-router';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CADPC Foundation</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building a better future together through community empowerment, sustainable development, and compassionate action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://forms.gle/YOUR_GOOGLE_FORM_ID" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Make a Donation
                </a>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  CADPC Foundation Panchsheel Enclave, New Delhi - 110017 (Include full address if needed)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">cadpcfoundation@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CADPG Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                MADE by JYOTI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
