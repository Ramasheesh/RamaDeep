import React, { useState } from 'react';
import { Monitor, BookOpen, FlaskConical, Trophy, Bed, Wifi, Bus, Utensils, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Facilities() {
  const { t } = useLanguage();
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const facilities = [
    {
      icon: Monitor,
      title: t('smart_classrooms'),
      description: 'Interactive digital boards, projectors, and modern teaching aids for enhanced learning experience',
      images: [
        'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
        'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg'
      ],
      details: [
        '30+ Smart classrooms with interactive whiteboards',
        'High-speed internet connectivity in all rooms',
        'Audio-visual systems for multimedia learning',
        'Air-conditioned environment for comfortable learning'
      ]
    },
    {
      icon: BookOpen,
      title: t('library'),
      description: 'Well-stocked library with over 15,000 books, journals, and digital resources',
      images: [
        'https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg',
        'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg'
      ],
      details: [
        '15,000+ books covering all subjects',
        'Digital library with e-books and journals',
        'Separate reading rooms for silent study',
        'Qualified librarians for research assistance'
      ]
    },
    {
      icon: FlaskConical,
      title: t('laboratories'),
      description: 'State-of-the-art Physics, Chemistry, Biology, and Computer labs with modern equipment',
      images: [
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
        'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg'
      ],
      details: [
        'Fully equipped Physics, Chemistry & Biology labs',
        'Modern computer lab with 50+ systems',
        'Safety equipment and trained lab assistants',
        'Regular maintenance and equipment upgrades'
      ]
    },
    {
      icon: Trophy,
      title: t('sports_facilities'),
      description: 'Comprehensive sports facilities including playground, indoor games, and fitness center',
      images: [
        'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg',
        'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg'
      ],
      details: [
        'Large playground for cricket, football, and athletics',
        'Indoor badminton and table tennis courts',
        'Well-equipped gymnasium',
        'Qualified sports instructors and coaches'
      ]
    },
    {
      icon: Bed,
      title: 'Hostel Facilities',
      description: 'Comfortable hostel accommodation for outstation students with all modern amenities',
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg'
      ],
      details: [
        'Separate hostels for boys and girls',
        '24/7 security and warden supervision',
        'Mess facility with nutritious meals',
        'Wi-Fi connectivity and study rooms'
      ]
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Safe and reliable bus service covering major routes in and around Azamgarh',
      images: [
        'https://images.pexels.com/photos/159658/school-bus-school-pupil-transport-159658.jpeg',
        'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg'
      ],
      details: [
        'Fleet of 15+ buses covering 25+ routes',
        'GPS tracking for safety and monitoring',
        'Trained drivers and attendants',
        'Regular maintenance and safety checks'
      ]
    }
  ];

  const quickFacts = [
    { icon: Monitor, label: 'Smart Classrooms', value: '30+' },
    { icon: BookOpen, label: 'Books in Library', value: '15,000+' },
    { icon: FlaskConical, label: 'Laboratories', value: '8' },
    { icon: Trophy, label: 'Sports Facilities', value: '10+' },
    { icon: Wifi, label: 'Wi-Fi Coverage', value: '100%' },
    { icon: Bus, label: 'Bus Routes', value: '25+' }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('our_facilities')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our modern infrastructure and world-class facilities provide students with an ideal environment for learning, growth, and development.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickFacts.map((fact, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3">
                <fact.icon className="w-6 h-6 text-blue-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{fact.value}</div>
              <div className="text-sm text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedFacility(index)}
            >
              <div className="relative">
                <img
                  src={facility.images[0]}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                <button className="mt-4 text-blue-700 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Utensils className="w-6 h-6 text-blue-700" />
              <span className="text-gray-700">Cafeteria & Canteen</span>
            </div>
            <div className="flex items-center space-x-3">
              <Wifi className="w-6 h-6 text-blue-700" />
              <span className="text-gray-700">Campus-wide Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-3">
              <Monitor className="w-6 h-6 text-blue-700" />
              <span className="text-gray-700">CCTV Surveillance</span>
            </div>
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-blue-700" />
              <span className="text-gray-700">Medical Room</span>
            </div>
          </div>
        </div>

        {/* Facility Detail Modal */}
        {selectedFacility !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-90vh overflow-y-auto">
              <div className="relative">
                <img
                  src={facilities[selectedFacility].images[0]}
                  alt={facilities[selectedFacility].title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {facilities[selectedFacility].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {facilities[selectedFacility].description}
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {facilities[selectedFacility].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities[selectedFacility].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${facilities[selectedFacility].title} ${index + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}