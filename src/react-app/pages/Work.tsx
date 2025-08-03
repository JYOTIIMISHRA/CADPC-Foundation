import { GraduationCap, Heart, Leaf, Home, Users, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Inclusive Chess Tournaments',
    description: 'We organize accessible, inclusive chess tournaments where physically challenged players can compete with dignity and confidence.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '15K+', locations: '12 Countries' },
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Coaching & Mentorship',
    description: 'From one-on-one coaching to group mentorship by volunteers, we ensure every aspiring player gets the guidance they need.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '25K+', locations: '8 Countries' },
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Sponsorship & Travel Support',
    description: 'We sponsor tournament fees, travel, and accommodation for players who otherwise can’t afford to participate.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1541087182050-49cb4e77e73a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '30K+', locations: '15 Countries' },
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: ' Awareness & Advocacy',
    description: 'By engaging with schools, chess bodies, and media, we’re spreading awareness and pushing for systemic inclusion.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '10K+', locations: '6 Countries' },
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Shelter & Housing',
    description: 'Building affordable housing and emergency shelters for displaced families and communities.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '5K+', locations: '10 Countries' },
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Community Engagement',
    description: 'We build a supportive network of parents, coaches, and volunteers committed to long-term empowerment.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { beneficiaries: '8K+', locations: '18 Countries' },
    color: 'from-purple-500 to-indigo-600'
  }
];

export default function Work() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Work & Impact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through focused initiatives, strategic support, and inclusive programs, we’re enabling differently-abled individuals to thrive through the game of chess. Every step we take is designed to create lasting change—on and off the board.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across multiple dimensions to remove barriers and open doors for specially-abled chess players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-semibold text-emerald-600">{project.stats.beneficiaries}</span>
                        <span className="text-gray-500 ml-1">Beneficiaries</span>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">{project.stats.locations}</span>
                        <span className="text-gray-500 ml-1">Locations</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Spotlight</h2>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">All-Inclusive Chess Open</h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Held in Delhi, the All-Inclusive Chess Open was a pioneering event with ramps, accessible seating, and inclusive pairing systems—welcoming over 150 players of all abilities.
                  The event received national recognition and set a benchmark for accessible tournament design.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-emerald-600">150+</div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Accessible Venues</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600"> NGOs & Chess Bodies Collaborated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Children in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach is community-centered, sustainable, and designed for long-term impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Led</h3>
              <p className="text-gray-600 leading-relaxed">
                We work hand-in-hand with families, coaches, and local leaders to ensure solutions are relevant and respectful.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable & Scalable</h3>
              <p className="text-gray-600 leading-relaxed">
                From mentorship models to tournament formats, we build programs that can be replicated across geographies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Network</h3>
              <p className="text-gray-600 leading-relaxed">
               We partner with schools, chess federations, and disability organizations to create greater impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Support Our Work</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Your contribution helps a differently-abled child play their next tournament, receive expert coaching, or find their place in a larger community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
