import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'academics', label: t('academics_gallery') },
    { id: 'sports', label: t('sports_gallery') },
    { id: 'cultural', label: t('cultural_gallery') },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'events', label: 'Events' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      alt: 'Teachers in classroom',
      category: 'academics',
      title: 'Interactive Teaching Session',
      description: 'Our experienced faculty using modern teaching methods'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      alt: 'Science Laboratory',
      category: 'academics',
      title: 'Science Laboratory',
      description: 'Students conducting experiments in our well-equipped lab'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg',
      alt: 'Sports Day Activity',
      category: 'sports',
      title: 'Annual Sports Day',
      description: 'Students participating in athletic competitions'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg',
      alt: 'Basketball Court',
      category: 'sports',
      title: 'Basketball Championship',
      description: 'Inter-house basketball tournament in progress'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      alt: 'Cultural Performance',
      category: 'cultural',
      title: 'Cultural Festival',
      description: 'Students performing traditional dance at annual cultural fest'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181581/pexels-photo-1181581.jpeg',
      alt: 'Drama Performance',
      category: 'cultural',
      title: 'Drama Performance',
      description: 'Annual day drama presentation by students'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
      alt: 'College Building',
      category: 'infrastructure',
      title: 'Main College Building',
      description: 'Our modern academic block with smart classrooms'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg',
      alt: 'Library',
      category: 'infrastructure',
      title: 'Central Library',
      description: 'Well-stocked library with over 15,000 books'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg',
      alt: 'Classroom',
      category: 'academics',
      title: 'Modern Classroom',
      description: 'Interactive learning environment with digital boards'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
      alt: 'Sports Ground',
      category: 'sports',
      title: 'Sports Ground',
      description: 'Large playground for various outdoor sports'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg',
      alt: 'Science Exhibition',
      category: 'events',
      title: 'Science Exhibition',
      description: 'Students showcasing innovative science projects'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      alt: 'Career Seminar',
      category: 'events',
      title: 'Career Guidance Seminar',
      description: 'Expert guidance session for students'
    },
    {
      id: 13,
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      alt: 'Smart Classroom',
      category: 'infrastructure',
      title: 'Smart Classroom',
      description: 'Technology-enabled learning environment'
    },
    {
      id: 14,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      alt: 'Chemistry Lab',
      category: 'academics',
      title: 'Chemistry Laboratory',
      description: 'Advanced chemistry lab with modern equipment'
    },
    {
      id: 15,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      alt: 'Teacher Training',
      category: 'academics',
      title: 'Faculty Development',
      description: 'Regular training programs for our teaching staff'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('campus_gallery')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Take a visual journey through our vibrant campus life and academic excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-blue-700">{images.filter(img => img.category === 'academics').length}</div>
            <div className="text-sm text-gray-600">Academic Photos</div>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-green-700">{images.filter(img => img.category === 'sports').length}</div>
            <div className="text-sm text-gray-600">Sports Activities</div>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-purple-700">{images.filter(img => img.category === 'cultural').length}</div>
            <div className="text-sm text-gray-600">Cultural Events</div>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-orange-700">{images.filter(img => img.category === 'infrastructure').length}</div>
            <div className="text-sm text-gray-600">Infrastructure</div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{image.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredImages.length > 12 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Load More Images
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative max-w-6xl max-h-full p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-200">{selectedImageData.description}</p>
                <span className="inline-block mt-2 bg-blue-600 px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {selectedImageData.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎥 Campus Video Tour</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
                <img
                  src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg"
                  alt="Campus Tour Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Play className="w-12 h-12 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Virtual Campus Tour</h4>
                  <p className="text-sm opacity-90">5:30 minutes</p>
                </div>
              </div>
              
              <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
                  alt="Annual Day Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Play className="w-12 h-12 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Annual Day Highlights</h4>
                  <p className="text-sm opacity-90">8:45 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}