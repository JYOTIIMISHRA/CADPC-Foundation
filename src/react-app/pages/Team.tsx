import { Mail, Linkedin, Users, Heart } from 'lucide-react';

// Static team data - no database needed
const teamMembers = [
  {
    id: 1,
    name: "Yamini Arora",
    role: "President",
    bio: "Founder and President of CADPC Foundation, Yamini leads with heart and purpose. As a mother to a young chess enthusiast, she started CADPC to eliminate barriers faced by specially-abled players, creating a space of equal opportunity.",
    image_url: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Surendra Singh Bisht",
    role: "Treasurer",
    bio: "Father of Sonu Bisht, a physically challenged chess player, Mr. Bisht brings firsthand understanding to his role. He ensures the foundation's resources are efficiently used to support talented individuals who need financial and emotional backing.",
    image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 
  },
  {
    id: 3,
    name: "Manoj Gautam",
    role: "Secretary",
    bio: "Inspired by his son Vaibhav—whose love for chess sparked the beginning of CADPC—Mr. Gautam dedicates his time to enabling similar players with physical disabilities to access the same opportunities.",
    image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
   
  },
  {
    id: 4,
    name: "Sushant Tiwari",
    role: "Joint Secretary",
    bio: "With a hands-on approach, Sushant plays a key role in managing logistics, event execution, and community coordination—ensuring smooth experiences for players, families, and volunteers.",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  }
];

export default function Team() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Dedicated Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our committed team brings together lived experiences, professional passion, and a shared mission to empower differently-abled individuals through the game of chess. Each member plays a vital role in creating a more inclusive, opportunity-driven ecosystem.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={member.image_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-emerald-200 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At CADPC Foundation, we are fueled by values that reflect empathy, equity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                We center our work around real people, their challenges, and their dreams—always responding with care.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
               We build strong partnerships—with families, volunteers, schools, and chess bodies—to create collective impact.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We commit to doing everything with integrity, purpose, and a vision for lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We welcome volunteers, mentors, coaches, and supporters who believe in inclusive progress.
        Whether you're looking to teach chess, assist at events, or help us grow our outreach—there’s a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-lg font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
