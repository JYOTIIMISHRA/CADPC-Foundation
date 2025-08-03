import { Heart, Target, Eye, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              CADPC Foundation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CADPC Foundation (Chess Ability Development for the Physically Challenged) is a not-for-profit NGO based in Delhi-NCR. We are dedicated to making chess accessible to individuals with physical disabilities by providing training, support, and inclusive opportunities.
            Founded on a simple act of kindness for a young player named Vaibhav, CADPC has grown into a powerful movement—supporting players across India with training, sponsorship, advocacy, and inclusive tournaments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  What began as a mission to support one child's love for chess has become a vibrant community. CADPC Foundation now unites volunteers, players, and supporters committed to ensuring that no one is left behind due to physical challenges.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Community gathering"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our approach to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To promote inclusivity and equal opportunity in the world of chess by enabling physically challenged individuals to participate fully—on and off the board.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where chess becomes a bridge that connects abilities, breaks social barriers, and builds confidence in every individual—regardless of physical limitations.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Compassion, integrity, respect, and transparency guide our work. We believe in community-led solutions, cultural sensitivity, and sustainable development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that represent real lives changed and communities empowered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">50K+</h3>
              <p className="text-gray-600 font-medium">Tournaments Supported</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">25</h3>
              <p className="text-gray-600 font-medium">Players Benefitted</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Volunteer Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Whether you choose to volunteer, donate, or simply spread awareness, 
            you become part of a global community working toward positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </a>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
