import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function News() {
  const { t } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const newsItems = [
    {
      id: 1,
      title: 'Admission Open for Academic Year 2024-25',
      excerpt: 'Applications are now being accepted for all streams. Limited seats available.',
      content: 'We are pleased to announce that admissions for the academic year 2024-25 are now open for all streams - Science, Arts, and Commerce. Students who have passed Class 10 from UP Board or CBSE are eligible to apply. The admission process will be based on merit, and seats are limited. Interested candidates are advised to apply at the earliest.',
      date: '2024-01-15',
      time: '10:00 AM',
      category: 'Admission',
      important: true,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg'
    },
    {
      id: 2,
      title: 'Class 12 Board Exam Results 2024',
      excerpt: 'Our students achieve excellent results with 95% pass rate and multiple distinctions.',
      content: 'We are proud to announce that our Class 12 students have achieved outstanding results in the UP Board examinations 2024. With a 95% pass rate and 40+ students securing distinctions, our college continues to maintain its reputation for academic excellence. Special congratulations to Priya Sharma (Science) and Rahul Kumar (Commerce) for scoring above 90%.',
      date: '2024-01-10',
      time: '02:00 PM',
      category: 'Results',
      important: true,
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg'
    },
    {
      id: 3,
      title: 'Annual Sports Day 2024',
      excerpt: 'Join us for our grand Annual Sports Day celebrations on February 15th.',
      content: 'Mark your calendars for our Annual Sports Day scheduled for February 15th, 2024. The event will feature various competitions including athletics, cricket, football, badminton, and cultural performances. Students from all streams will participate in this grand celebration of sports and culture. Parents and guardians are cordially invited to attend.',
      date: '2024-01-08',
      time: '09:00 AM',
      category: 'Events',
      important: false,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg'
    },
    {
      id: 4,
      title: 'New Computer Lab Inaugurated',
      excerpt: 'State-of-the-art computer lab with 50 systems now operational for students.',
      content: 'We are excited to announce the inauguration of our new state-of-the-art computer lab equipped with 50 modern computers, high-speed internet, and latest software. This facility will greatly enhance the practical learning experience for our students, especially those in the commerce stream studying computer applications.',
      date: '2024-01-05',
      time: '11:30 AM',
      category: 'Infrastructure',
      important: false,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg'
    },
    {
      id: 5,
      title: 'Science Exhibition 2024',
      excerpt: 'Students showcase innovative projects in annual science exhibition.',
      content: 'Our annual science exhibition was a grand success with over 100 innovative projects displayed by students from the science stream. The exhibition featured projects on renewable energy, robotics, biotechnology, and environmental conservation. The event was judged by eminent scientists from nearby universities.',
      date: '2024-01-03',
      time: '03:00 PM',
      category: 'Events',
      important: false,
      image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg'
    },
    {
      id: 6,
      title: 'Fee Structure 2024-25',
      excerpt: 'Updated fee structure for the upcoming academic year has been released.',
      content: 'The fee structure for academic year 2024-25 has been finalized. Science stream: ₹25,000, Arts stream: ₹20,000, Commerce stream: ₹22,000 per annum. Fees can be paid in quarterly installments. Scholarship opportunities are available for meritorious and economically disadvantaged students.',
      date: '2024-01-01',
      time: '10:00 AM',
      category: 'Administration',
      important: true,
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg'
    }
  ];

  const categories = ['All', 'Admission', 'Results', 'Events', 'Infrastructure', 'Administration'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('latest_news')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Stay updated with the latest announcements and news from our college
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Important News Banner */}
        <div className="mb-8">
          {newsItems.filter(item => item.important).slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 cursor-pointer hover:from-red-700 hover:to-red-800 transition-all duration-300"
              onClick={() => setSelectedNews(item.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      IMPORTANT
                    </span>
                    <span className="text-red-200 text-sm">{item.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-red-100 mb-2">{item.excerpt}</p>
                  <div className="flex items-center space-x-4 text-red-200 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-8 h-8 text-white/70 ml-4" />
              </div>
            </div>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedNews(item.id)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.important 
                      ? 'bg-red-600 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('view_all')} News & Announcements
          </button>
        </div>

        {/* News Detail Modal */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-90vh overflow-y-auto">
              {(() => {
                const news = newsItems.find(item => item.id === selectedNews);
                if (!news) return null;
                
                return (
                  <>
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedNews(null)}
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          news.important 
                            ? 'bg-red-600 text-white' 
                            : 'bg-blue-600 text-white'
                        }`}>
                          {news.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {news.title}
                      </h3>
                      
                      <div className="flex items-center space-x-6 text-gray-500 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>{formatDate(news.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" />
                          <span>{news.time}</span>
                        </div>
                      </div>
                      
                      <div className="prose prose-lg text-gray-700 leading-relaxed">
                        {news.content}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}