import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'academics', label: t('academics') },
    { id: 'facilities', label: t('facilities') },
    { id: 'news', label: t('news') },
    { id: 'events', label: t('events') },
    { id: 'student-corner', label: t('student_corner') },
    { id: 'gallery', label: t('gallery') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">RD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                {language === 'en' ? 'RDPM Inter College' : 'आर.डी.पी.एम. इंटर कॉलेज'}
              </h1>
              <p className="text-sm text-gray-600">Azamgarh, Uttar Pradesh</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>

            {/* Admission CTA */}
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              {t('admission_open')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors duration-200 p-2"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
      } overflow-hidden bg-white border-t border-gray-200`}>
        <nav className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200">
            {t('admission_open')}
          </button>
        </nav>
      </div>
    </header>
  );
}