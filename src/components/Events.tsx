import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Events() {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const events = [
    {
      id: 1,
      title: 'Annual Sports Day 2024',
      date: '2024-02-15',
      time: '09:00 AM - 05:00 PM',
      location: 'College Playground',
      description: 'Grand celebration of sports with various competitions, cultural performances, and prize distribution ceremony.',
      category: 'Sports',
      participants: '500+',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg',
      highlights: ['Athletic competitions', 'Cultural performances', 'Prize distribution', 'Parent participation']
    },
    {
      id: 2,
      title: 'Science Exhibition 2024',
      date: '2024-02-28',
      time: '10:00 AM - 04:00 PM',
      location: 'Main Auditorium',
      description: 'Students showcase innovative science projects and experiments demonstrating practical applications of theoretical knowledge.',
      category: 'Academic',
      participants: '200+',
      image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg',
      highlights: ['Student projects', 'Innovation displays', 'Expert judging', 'Awards ceremony']
    },
    {
      id: 3,
      title: 'Cultural Fest - Kala Utsav',
      date: '2024-03-15',
      time: '06:00 PM - 10:00 PM',
      location: 'College Auditorium',
      description: 'Annual cultural festival featuring music, dance, drama, and literary competitions celebrating diverse talents.',
      category: 'Cultural',
      participants: '300+',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      highlights: ['Dance competitions', 'Music performances', 'Drama presentations', 'Art exhibitions']
    },
    {
      id: 4,
      title: 'Career Guidance Seminar',
      date: '2024-03-25',
      time: '02:00 PM - 05:00 PM',
      location: 'Conference Hall',
      description: 'Expert guidance on career opportunities, higher education options, and professional development for Class 12 students.',
      category: 'Educational',
      participants: '150+',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      highlights: ['Career counseling', 'University representatives', 'Scholarship information', 'Q&A sessions']
    },
    {
      id: 5,
      title: 'Teachers Day Celebration',
      date: '2024-09-05',
      time: '10:00 AM - 02:00 PM',
      location: 'Main Hall',
      description: 'Special celebration honoring our dedicated teachers with cultural programs and appreciation ceremonies.',
      category: 'Celebration',
      participants: '400+',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      highlights: ['Teacher appreciation', 'Student performances', 'Award presentations', 'Fellowship lunch']
    },
    {
      id: 6,
      title: 'Annual Day 2024',
      date: '2024-12-20',
      time: '06:00 PM - 09:00 PM',
      location: 'College Auditorium',
      description: 'Grand annual celebration showcasing the year\'s achievements with cultural performances and award ceremonies.',
      category: 'Annual',
      participants: '800+',
      image: 'https://images.pexels.com/photos/1181581/pexels-photo-1181581.jpeg',
      highlights: ['Annual report', 'Achievement awards', 'Cultural extravaganza', 'Alumni gathering']
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getEventsForMonth = (month: number, year: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const currentMonthEvents = getEventsForMonth(currentMonth, currentYear);
  const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).slice(0, 3);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('upcoming_events')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Join us in our exciting events and celebrations throughout the academic year
          </p>
        </div>

        {/* Upcoming Events Highlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-gray-600">
                        {months[new Date(event.date).getMonth()]}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants expected</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Calendar */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold">
                {months[currentMonth]} {currentYear}
              </h3>
              
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {currentMonthEvents.length > 0 ? (
              <div className="space-y-6">
                {currentMonthEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 lg:mb-0">{event.title}</h4>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start">
                            {event.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-900 mb-2">Event Highlights:</h5>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((highlight, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No events scheduled for {months[currentMonth]} {currentYear}</p>
              </div>
            )}
          </div>
        </div>

        {/* Past Events Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Past Events Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.slice(-8).map((event, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center px-2">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}