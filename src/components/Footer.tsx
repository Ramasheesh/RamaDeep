import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('about'), href: '#about' },
    { label: t('academics'), href: '#academics' },
    { label: t('facilities'), href: '#facilities' },
    { label: 'Admission', href: '#contact' },
    { label: t('gallery'), href: '#gallery' },
    { label: t('contact'), href: '#contact' }
  ];

  const academicLinks = [
    { label: 'Science Stream', href: '#academics' },
    { label: 'Arts Stream', href: '#academics' },
    { label: 'Commerce Stream', href: '#academics' },
    { label: 'Syllabus', href: '#student-corner' },
    { label: 'Results', href: '#student-corner' },
    { label: 'Faculty', href: '#academics' }
  ];

  const importantLinks = [
    { label: 'Fee Structure', href: '#' },
    { label: 'Scholarship', href: '#' },
    { label: 'Transfer Certificate', href: '#' },
    { label: 'Library', href: '#facilities' },
    { label: 'Sports', href: '#facilities' },
    { label: 'Transport', href: '#facilities' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RDPM Inter College</h3>
                <p className="text-gray-400 text-sm">Quality Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing quality education for over 25 years in Azamgarh district. 
              Nurturing young minds to become future leaders and responsible citizens.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Near Civil Court, Kachhi Road, Azamgarh, UP</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+91-5462-234567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">info@rdpmcollege.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('quick_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Important Links</h4>
            <ul className="space-y-3 mb-6">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold mb-3">{t('follow_us')}</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for latest news, events, and announcements
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t('copyright')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliation */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-400 text-xs">
              Affiliated to UP Board | Recognized by Government of Uttar Pradesh | 
              <span className="text-blue-400"> Estd. 1999</span> | 
              <span className="text-green-400"> 25+ Years of Excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}