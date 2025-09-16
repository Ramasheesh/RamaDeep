import React, { useState } from 'react';
import { BookOpen, Users, ChevronRight, Download, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Academics() {
  const { t } = useLanguage();
  const [activeStream, setActiveStream] = useState('science');

  const streams = {
    science: {
      title: t('science'),
      description: 'Comprehensive Science education with Physics, Chemistry, Biology, and Mathematics',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Hindi'],
      careers: ['Medical', 'Engineering', 'Research', 'Biotechnology', 'Pharmacy'],
      color: 'blue'
    },
    arts: {
      title: t('arts'),
      description: 'Liberal Arts education focusing on Literature, Social Sciences, and Humanities',
      subjects: ['History', 'Geography', 'Political Science', 'Economics', 'English', 'Hindi'],
      careers: ['Civil Services', 'Teaching', 'Journalism', 'Law', 'Social Work'],
      color: 'green'
    },
    commerce: {
      title: t('commerce'),
      description: 'Business and Commerce education for future entrepreneurs and professionals',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English', 'Hindi'],
      careers: ['CA/CS', 'Banking', 'Business', 'Finance', 'Management'],
      color: 'purple'
    }
  };

  const faculty = [
    {
      name: 'Dr. Priya Singh',
      subject: 'Physics & Mathematics',
      qualification: 'Ph.D. Physics, M.Sc., B.Ed.',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg'
    },
    {
      name: 'Prof. Amit Kumar',
      subject: 'Chemistry & Biology',
      qualification: 'M.Sc. Chemistry, B.Ed.',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    },
    {
      name: 'Mrs. Sunita Devi',
      subject: 'History & Geography',
      qualification: 'M.A. History, B.Ed.',
      experience: '18 years',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Mr. Vikash Gupta',
      subject: 'Commerce & Economics',
      qualification: 'M.Com, MBA, B.Ed.',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg'
    },
    {
      name: 'Dr. Kavita Sharma',
      subject: 'English Literature',
      qualification: 'Ph.D. English, M.A., B.Ed.',
      experience: '20 years',
      image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg'
    },
    {
      name: 'Prof. Rajesh Yadav',
      subject: 'Mathematics',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '14 years',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Fill out the online application form or collect from college office'
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit required documents including previous academic records'
    },
    {
      step: 3,
      title: 'Merit List',
      description: 'Check merit list based on previous academic performance'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Pay admission fees and confirm your seat'
    },
    {
      step: 5,
      title: 'Registration',
      description: 'Complete registration process and receive student ID'
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('academics')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Academic Streams */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('streams')}</h3>
          
          {/* Stream Tabs */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-2 sm:space-y-0 sm:space-x-4">
            {Object.entries(streams).map(([key, stream]) => (
              <button
                key={key}
                onClick={() => setActiveStream(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeStream === key
                    ? `bg-${stream.color}-700 text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {stream.title}
              </button>
            ))}
          </div>

          {/* Active Stream Content */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {streams[activeStream as keyof typeof streams].title} Stream
                </h4>
                <p className="text-gray-600 mb-6">
                  {streams[activeStream as keyof typeof streams].description}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {streams[activeStream as keyof typeof streams].subjects.map((subject, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {streams[activeStream as keyof typeof streams].careers.map((career, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={`https://images.pexels.com/photos/${
                    activeStream === 'science' ? '256490' : 
                    activeStream === 'arts' ? '301920' : '416405'
                  }/pexels-photo-${
                    activeStream === 'science' ? '256490' : 
                    activeStream === 'arts' ? '301920' : '416405'
                  }.jpeg`}
                  alt={`${streams[activeStream as keyof typeof streams].title} Stream`}
                  className="rounded-xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('admission_process')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full font-bold text-xl mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {index < admissionSteps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 absolute top-6 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
              <Download className="w-5 h-5" />
              <span>Download Admission Form</span>
            </button>
          </div>
        </div>

        {/* Faculty Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('our_faculty')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-700 font-medium mb-2">{member.subject}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.qualification}</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{member.experience} teaching experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}