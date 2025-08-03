import { useState } from 'react';
import { Users, Heart, Globe, Clock, MapPin, Mail, Phone, Check } from 'lucide-react';

const volunteerOpportunities = [
  {
    title: 'Chess Mentors & Trainers',
    description: 'Support players with physical disabilities by coaching, sparring, or providing motivation and guidance.',
    icon: Heart,
    commitment: '4-6 hours per week',
    location: 'Local communities',
    skills: 'Chess knowledge, patience, encouragement'
  },
  {
    title: 'Social Media & Content Creators',
    description: 'Help us tell stories, grow our presence, and raise awareness through social media and design.',
    icon: Heart,
    commitment: '6-8 hours per week',
    location: 'Field locations',
    skills: 'Writing, design, content strategy'
  },
  {
    title: 'Event & Tournament Volunteers',
    description: 'Assist in organizing inclusive tournaments—set-up, registration, and player support.',
    icon: Users,
    commitment: '3-5 hours per week',
    location: 'Office or remote',
    skills: 'Coordination, crowd management, hospitality'
  },
  {
    title: ' Admin & Logistics Support',
    description: 'Help manage data, registrations, or communication between volunteers, coaches, and players.',
    icon: Globe,
    commitment: '5-7 hours per week',
    location: 'Various communities',
    skills: 'Organizing skills, documentation'
  },
  {
    title: 'Outreach & Awareness',
    description: 'Engage schools, NGOs, and communities to promote inclusive chess opportunities.',
    icon: Heart,
    commitment: 'Event-based',
    location: 'Various venues',
    skills: 'Public speaking, networking'
  },
  {
    title: 'Social Media & Communications',
    description: 'Create content and manage our social media presence and communications.',
    icon: Globe,
    commitment: '3-4 hours per week',
    location: 'Remote',
    skills: 'Social media, writing, design'
  }
];

export default function Volunteer() {
  const [submitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            You've been redirected to our volunteer application form. We'll review your information and get back to you within 5 business days.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Volunteer Family
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Make a real difference by supporting specially-abled chess players. Our volunteers are the heart of CADPC Foundation—bringing passion, empathy, and dedication to every move we make.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with Hope Foundation offers meaningful ways to contribute to positive change while developing new skills and connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Make Real Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Help differently-abled chess players access tournaments, training, and opportunities they deserve.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Become part of a diverse, inclusive group committed to empowerment through chess.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Develop Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain experience in event coordination, mentoring, communication, and social impact projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find a role that matches your passion and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-start text-gray-500">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{opportunity.skills}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply to Volunteer</h2>
            <p className="text-xl text-gray-600">
              Ready to make a difference?
              Fill out the form and our team will connect you with the right opportunity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Application Form</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Fill out our comprehensive volunteer application form to get started. 
              We'll review your information and match you with the perfect opportunity based on your skills and interests.
            </p>
            <a
              href="https://forms.gle/YOUR_VOLUNTEER_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Volunteering?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Our volunteer coordinator is here to help you find the perfect opportunity to match your interests and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:volunteers@hopefoundation.org"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              volunteers@cadpcfoundation.org
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
