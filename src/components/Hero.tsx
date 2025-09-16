import React from 'react';
import { GraduationCap, Award, Users, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const stats = [
    { icon: GraduationCap, value: '1000+', label: 'Students' },
    { icon: Users, value: '50+', label: 'Faculty' },
    { icon: Award, value: '25+', label: 'Years of Excellence' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
          alt="Educational Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* College Name */}
          <h1 className="text-4xl md:text-5xl mt-20 ,mb-4 lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in-up">{t('college_name')}</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            {t('tagline')}
          </p>

          {/* Location */}
          <p className="text-base md:text-lg text-blue-200 mb-12 animate-fade-in-up animation-delay-300">
            Kharihani, Azamgarh, Uttar Pradesh, India
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>{t('apply_now')}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>{t('learn_more')}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}