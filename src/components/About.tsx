import React from 'react';
import { Target, Eye, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about_us')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Our Legacy */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('our_legacy')}</h3>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Established in 2003, Rama Deep Paliwal Memorial Inter College has been a beacon of quality education in Azamgarh district. Named in honor of the visionary educationist Late Shri Rama Deep Paliwal, our institution has consistently strived to provide comprehensive education that nurtures both academic excellence and character development.
                </p>
                <p>
                  Over the past 20 years, we have educated thousands of students who have gone on to excel in various fields including medicine, engineering, civil services, and entrepreneurship. Our commitment to holistic education has made us one of the most trusted educational institutions in Eastern Uttar Pradesh.
                </p>
                <p>
                  We follow the UP Board curriculum and provide education from Class 6 to Class 12 in Science, Arts, and Commerce streams, ensuring students have diverse pathways to achieve their career aspirations.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
                  alt="College Building"
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-blue-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('mission')}</h4>
            <p className="text-gray-600 text-center">
              To provide quality education that empowers students with knowledge, skills, and values necessary for their personal growth and contribution to society.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <Eye className="w-8 h-8 text-green-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('vision')}</h4>
            <p className="text-gray-600 text-center">
              To be a leading educational institution that nurtures future leaders with strong academic foundation, ethical values, and global perspective.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <Heart className="w-8 h-8 text-red-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('values')}</h4>
            <p className="text-gray-600 text-center">
              Integrity, Excellence, Respect, Innovation, and Community Service form the cornerstone of our educational philosophy and institutional culture.
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 p-8 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Principal"
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20"
                />
                <h4 className="text-xl font-bold mb-2">Dr. Rajesh Kumar Sharma(Demo)</h4>
                <p className="text-blue-200 mb-4">Principal</p>
                <p className="text-sm text-blue-200">M.A., B.Ed., Ph.D. in Education<br />25+ Years Experience</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{t('principal_message')}</h4>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  "Dear Students and Parents,
                </p>
                <p>
                  It gives me immense pleasure to welcome you to Rama Deep Paliwal Memorial Inter College. As we embark on another academic year, I want to assure you that our institution remains committed to providing the highest quality education that prepares students for the challenges of the 21st century.
                </p>
                <p>
                  Our experienced faculty, modern infrastructure, and student-centered approach ensure that each child receives personalized attention and opportunities to excel in academics, sports, and extracurricular activities. We believe in nurturing not just academic excellence but also character, creativity, and critical thinking skills.
                </p>
                <p>
                  Together, let us continue our journey of learning, growing, and contributing to the betterment of our society."
                </p>
                <p className="font-medium text-gray-900">
                  Warm Regards,<br />
                  Dr. Rajesh Kumar Sharma(Demo)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Near Civil Court, Kachhi Road<br />
                        Azamgarh, Uttar Pradesh - 276001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91-5462-234567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@rdpmcollege.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 lg:h-full bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/place/Rama-Deep+Paliwal+Memo+Convent/@25.816013,83.2019768,365m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3991c10bf47ca8e7:0x46a23dd011f70012!2sRama-Deep+Paliwal+Memo+Convent!8m2!3d25.8160031!4d83.2018876!16s%2Fg%2F11f5d2xy4d!3m5!1s0x3991c10bf47ca8e7:0x46a23dd011f70012!8m2!3d25.8160031!4d83.2018876!16s%2Fg%2F11f5d2xy4d?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-r-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}