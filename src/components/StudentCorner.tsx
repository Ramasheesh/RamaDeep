import React, { useState } from 'react';
import { Download, FileText, GraduationCap, BookOpen, Search, Eye, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function StudentCorner() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('resources');
  const [loginModal, setLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ rollNumber: '', password: '' });

  const resources = [
    {
      title: 'Class 11 Science Syllabus',
      subject: 'Science Stream',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      icon: FileText
    },
    {
      title: 'Class 12 Arts Syllabus',
      subject: 'Arts Stream',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 890,
      icon: FileText
    },
    {
      title: 'Commerce Stream Syllabus',
      subject: 'Commerce Stream',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 760,
      icon: FileText
    },
    {
      title: 'Admission Form 2024-25',
      subject: 'Administration',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 2100,
      icon: FileText
    },
    {
      title: 'Fee Structure Document',
      subject: 'Administration',
      type: 'PDF',
      size: '0.8 MB',
      downloads: 1800,
      icon: FileText
    },
    {
      title: 'Previous Year Question Papers',
      subject: 'All Streams',
      type: 'ZIP',
      size: '15.6 MB',
      downloads: 3200,
      icon: BookOpen
    }
  ];

  const studyMaterials = [
    {
      title: 'Physics Notes - Class 11',
      subject: 'Physics',
      chapter: 'Mechanics & Waves',
      downloads: 850,
      rating: 4.8
    },
    {
      title: 'Chemistry Practical Manual',
      subject: 'Chemistry',
      chapter: 'Laboratory Experiments',
      downloads: 620,
      rating: 4.6
    },
    {
      title: 'Mathematics Solutions',
      subject: 'Mathematics',
      chapter: 'Calculus & Algebra',
      downloads: 940,
      rating: 4.9
    },
    {
      title: 'History Timeline Charts',
      subject: 'History',
      chapter: 'Indian Independence',
      downloads: 520,
      rating: 4.4
    },
    {
      title: 'Economics Case Studies',
      subject: 'Economics',
      chapter: 'Market Economy',
      downloads: 380,
      rating: 4.7
    },
    {
      title: 'English Grammar Guide',
      subject: 'English',
      chapter: 'Advanced Grammar',
      downloads: 710,
      rating: 4.5
    }
  ];

  const mockResults = [
    { rollNumber: '202401001', name: 'Priya Sharma', class: '12th Science', percentage: '89.2%', result: 'First Division' },
    { rollNumber: '202401002', name: 'Rahul Kumar', class: '12th Commerce', percentage: '85.7%', result: 'First Division' },
    { rollNumber: '202401003', name: 'Anita Singh', class: '11th Arts', percentage: '78.4%', result: 'First Division' },
    { rollNumber: '202401004', name: 'Vikash Gupta', class: '12th Science', percentage: '92.1%', result: 'Distinction' },
    { rollNumber: '202401005', name: 'Sunita Devi', class: '11th Commerce', percentage: '81.3%', result: 'First Division' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (loginForm.rollNumber && loginForm.password) {
      alert(`Welcome ${loginForm.rollNumber}! This is a demo login.`);
      setLoginModal(false);
    }
  };

  const tabs = [
    { id: 'resources', label: 'Study Resources', icon: BookOpen },
    { id: 'results', label: 'Results', icon: GraduationCap },
    { id: 'handbook', label: 'Student Handbook', icon: FileText }
  ];

  return (
    <section id="student-corner" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('student_corner')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Access study materials, check results, and find important resources for your academic journey
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Study Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            {/* Quick Downloads */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 {t('download_syllabus')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <resource.icon className="w-6 h-6 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{resource.title}</h4>
                          <p className="text-gray-600 text-xs">{resource.subject}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.type} • {resource.size}</span>
                      <span>{resource.downloads.toLocaleString()} downloads</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Materials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📖 Study Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studyMaterials.map((material, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-bold text-gray-900 mb-2">{material.title}</h4>
                    <p className="text-blue-700 font-medium text-sm mb-1">{material.subject}</p>
                    <p className="text-gray-600 text-sm mb-4">{material.chapter}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{material.downloads} downloads</span>
                      <div className="flex items-center space-x-1">
                        <span>⭐ {material.rating}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-100 text-blue-700 py-2 px-4 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View & Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 {t('results')}</h3>
              
              {/* Login Form */}
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Student Login</h4>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                    <input
                      type="text"
                      value={loginForm.rollNumber}
                      onChange={(e) => setLoginForm({ ...loginForm, rollNumber: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your roll number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Login to View Results</span>
                  </button>
                </form>
              </div>
              
              {/* Sample Results (Demo) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Sample Results (Demo)</h4>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No.</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {mockResults.map((result, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.rollNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.class}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{result.percentage}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                result.result === 'Distinction' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {result.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Handbook Tab */}
        {activeTab === 'handbook' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 {t('student_handbook')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Academic Guidelines</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular attendance is mandatory (minimum 75%)</li>
                    <li>• Assignment submission deadlines must be followed</li>
                    <li>• Uniform is compulsory for all students</li>
                    <li>• Mobile phones are restricted during class hours</li>
                    <li>• Library books must be returned on time</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Code of Conduct</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Respect teachers, staff, and fellow students</li>
                    <li>• Maintain discipline in classrooms and campus</li>
                    <li>• No ragging or bullying will be tolerated</li>
                    <li>• Keep the campus clean and green</li>
                    <li>• Report any misconduct to authorities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Examination Rules</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Arrive 30 minutes before exam time</li>
                    <li>• Carry valid ID card and admit card</li>
                    <li>• No electronic devices allowed in exam hall</li>
                    <li>• Follow seating arrangements strictly</li>
                    <li>• Any malpractice will result in disqualification</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Support Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Academic counseling available</li>
                    <li>• Career guidance sessions</li>
                    <li>• Scholarship information desk</li>
                    <li>• Grievance redressal committee</li>
                    <li>• Medical assistance on campus</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
                  <Download className="w-5 h-5" />
                  <span>Download Complete Handbook</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}