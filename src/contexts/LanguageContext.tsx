import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    academics: 'Academics',
    facilities: 'Facilities',
    news: 'News',
    events: 'Events',
    student_corner: 'Student Corner',
    gallery: 'Gallery',
    contact: 'Contact',
    admission_open: 'Admission Open',
    
    // Hero
    college_name: 'Rama Deep Paliwal MIC And Convent School',
    tagline: 'Quality Education for a Bright Future',
    apply_now: 'Apply Now',
    learn_more: 'Learn More',
    
    // About
    about_us: 'About Us',
    our_legacy: 'Our Legacy',
    mission: 'Mission',
    vision: 'Vision',
    values: 'Values',
    principal_message: 'Principal\'s Message',
    
    // Academics
    streams: 'Academic Streams',
    science: 'Science',
    arts: 'Arts',
    commerce: 'Commerce',
    admission_process: 'Admission Process',
    our_faculty: 'Our Faculty',
    
    // Facilities
    our_facilities: 'Our Facilities',
    smart_classrooms: 'Smart Classrooms',
    library: 'Library',
    laboratories: 'Laboratories',
    sports_facilities: 'Sports Facilities',
    
    // News & Events
    latest_news: 'Latest News',
    upcoming_events: 'Upcoming Events',
    view_all: 'View All',
    
    // Student Corner
    student_resources: 'Student Resources',
    download_syllabus: 'Download Syllabus',
    results: 'Results',
    student_handbook: 'Student Handbook',
    
    // Gallery
    campus_gallery: 'Campus Gallery',
    academics_gallery: 'Academics',
    sports_gallery: 'Sports',
    cultural_gallery: 'Cultural',
    
    // Contact
    get_in_touch: 'Get in Touch',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    send_message: 'Send Message',
    
    // Footer
    quick_links: 'Quick Links',
    follow_us: 'Follow Us',
    copyright: '© 2025 Rama Deep Paliwal Memorial Inter College. All rights reserved.',
  },
  hi: {
    // Header
    home: 'होम',
    about: 'परिचय',
    academics: 'शिक्षा',
    facilities: 'सुविधाएं',
    news: 'समाचार',
    events: 'कार्यक्रम',
    student_corner: 'छात्र कॉर्नर',
    gallery: 'गैलरी',
    contact: 'संपर्क',
    admission_open: 'प्रवेश खुला',
    
    // Hero
    college_name: 'रामदीप पालीवाल मेमोरियल इंटर कॉलेज',
    tagline: 'हुनर और शिक्षा का संगम',
    apply_now: 'आवेदन करें',
    learn_more: 'और जानें',
    
    // About
    about_us: 'हमारे बारे में',
    our_legacy: 'हमारी विरासत',
    mission: 'मिशन',
    vision: 'दृष्टिकोण',
    values: 'मूल्य',
    principal_message: 'प्रधानाचार्य का संदेश',
    
    // Academics
    streams: 'शैक्षणिक धाराएं',
    science: 'विज्ञान',
    arts: 'कला',
    commerce: 'वाणिज्य',
    admission_process: 'प्रवेश प्रक्रिया',
    our_faculty: 'हमारे शिक्षक',
    
    // Facilities
    our_facilities: 'हमारी सुविधाएं',
    smart_classrooms: 'स्मार्ट कक्षाएं',
    library: 'पुस्तकालय',
    laboratories: 'प्रयोगशालाएं',
    sports_facilities: 'खेल सुविधाएं',
    
    // News & Events
    latest_news: 'नवीनतम समाचार',
    upcoming_events: 'आगामी कार्यक्रम',
    view_all: 'सभी देखें',
    
    // Student Corner
    student_resources: 'छात्र संसाधन',
    download_syllabus: 'पाठ्यक्रम डाउनलोड',
    results: 'परिणाम',
    student_handbook: 'छात्र पुस्तिका',
    
    // Gallery
    campus_gallery: 'कैंपस गैलरी',
    academics_gallery: 'शिक्षा',
    sports_gallery: 'खेल',
    cultural_gallery: 'सांस्कृतिक',
    
    // Contact
    get_in_touch: 'संपर्क करें',
    address: 'पता',
    phone: 'फोन',
    email: 'ईमेल',
    send_message: 'संदेश भेजें',
    
    // Footer
    quick_links: 'त्वरित लिंक',
    follow_us: 'हमें फॉलो करें',
    copyright: '© 2024 रामदीप पालीवाल मेमोरियल इंटर कॉलेज. सभी अधिकार सुरक्षित।',
  }
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}