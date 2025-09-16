import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import News from './components/News';
import Events from './components/Events';
import StudentCorner from './components/StudentCorner';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <News />
        <Events />
        <StudentCorner />
        <Gallery />
        <Contact />
        <Footer />
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-800 hover:scale-110 z-50 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </LanguageProvider>
  );
}

export default App;