import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('address'),
      content: ['Near Civil Court, Kachhi Road', 'Azamgarh, Uttar Pradesh - 276001', 'India'],
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Phone,
      title: t('phone'),
      content: ['+91-5462-234567', '+91-9876543210 (Mobile)', '+91-5462-234568 (Office)'],
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Mail,
      title: t('email'),
      content: ['info@rdpmcollege.edu.in', 'admissions@rdpmcollege.edu.in', 'principal@rdpmcollege.edu.in'],
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  const departments = [
    { name: 'Admissions Office', phone: '+91-5462-234567', email: 'admissions@rdpmcollege.edu.in' },
    { name: 'Academic Office', phone: '+91-5462-234568', email: 'academic@rdpmcollege.edu.in' },
    { name: 'Student Affairs', phone: '+91-5462-234569', email: 'students@rdpmcollege.edu.in' },
    { name: 'Accounts Department', phone: '+91-5462-234570', email: 'accounts@rdpmcollege.edu.in' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('get_in_touch')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${info.color}`}>
                <info.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.content.map((line, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="fees">Fees & Scholarships</option>
                      <option value="facilities">Facilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('send_message')}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/place/Rama-Deep+Paliwal+Memo.+Inter+College/@25.7955955,83.20931,17z/data=!3m1!4b1!4m6!3m5!1s0x3991c183ea190ff9:0xcb2e1f43a3eaf8b0!8m2!3d25.7955907!4d83.2118849!16s%2Fg%2F11gg_txh60?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Find Us</h4>
                <p className="text-gray-600 text-sm">
                  Located in the heart of Azamgarh, easily accessible by public transport and private vehicles.
                </p>
              </div>
            </div>

            {/* Department Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Department Contacts</h4>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-medium text-gray-900">{dept.name}</h5>
                    <div className="text-sm text-gray-600">
                      <p>📞 {dept.phone}</p>
                      <p>✉️ {dept.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-white text-left px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
                  <span className="font-medium text-gray-900">Download Admission Form</span>
                  <span className="text-blue-600">→</span>
                </button>
                <button className="w-full bg-white text-left px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
                  <span className="font-medium text-gray-900">View Fee Structure</span>
                  <span className="text-blue-600">→</span>
                </button>
                <button className="w-full bg-white text-left px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
                  <span className="font-medium text-gray-900">Schedule Campus Visit</span>
                  <span className="text-blue-600">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}