import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, Users, Globe, Award, ArrowRight, DollarSign } from 'lucide-react';

interface Stats {
  totalDonations: number;
  donorCount: number;
  volunteerCount: number;
}

export default function Home() {
  const [stats] = useState<Stats>({ totalDonations: 125000, donorCount: 1250, volunteerCount: 850 });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                CADPC Foundation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Championing Chess for All, Especially the Differently-Abled
              Empowering individuals with physical disabilities through the transformative power of chess. Join us in making the game accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </a>
              <Link
                to="/volunteer"
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">
                ${stats.totalDonations.toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium">Total Donations Raised</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{stats.donorCount}</h3>
              <p className="text-gray-600 font-medium">Generous Donors</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">{stats.volunteerCount}</h3>
              <p className="text-gray-600 font-medium">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in inclusivity, empowerment, and the unifying spirit of chess. Our mission is to enable physically challenged individuals to learn, play, and grow through chess—building confidence and breaking barriers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inclusive Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building an ecosystem where everyone—regardless of physical ability—can enjoy chess.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact, Local Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Sponsoring players, organizing accessible tournaments, and driving policy-level inclusion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowerment Through Action </h3>
              <p className="text-gray-600 leading-relaxed">
                From mentorship to logistics support, we help our players succeed on and off the board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Whether through donation, volunteering, or spreading awareness, every action counts. 
            Join our community of changemakers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
