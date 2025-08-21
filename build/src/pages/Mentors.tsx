import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  expertise: string[];
  rating: number;
  hourlyRate: number;
  availability: string;
  image: string;
  description: string;
}

const Mentors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      expertise: ['React', 'TypeScript', 'Node.js'],
      rating: 4.9,
      hourlyRate: 150,
      availability: 'Weekdays 6-9 PM PST',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      description: 'Experienced full-stack developer with 8+ years building scalable web applications.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      expertise: ['Product Strategy', 'User Research', 'Agile'],
      rating: 4.8,
      hourlyRate: 200,
      availability: 'Weekends 10 AM-2 PM PST',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Product leader with expertise in B2B SaaS and enterprise software.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'UX Designer',
      company: 'Airbnb',
      location: 'New York, NY',
      expertise: ['UI/UX Design', 'User Research', 'Figma'],
      rating: 4.9,
      hourlyRate: 175,
      availability: 'Weekdays 7-10 PM EST',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Creative designer focused on user-centered design and accessibility.'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Data Scientist',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      expertise: ['Machine Learning', 'Python', 'Data Analysis'],
      rating: 4.7,
      hourlyRate: 180,
      availability: 'Weekdays 5-8 PM PST',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'ML engineer specializing in recommendation systems and predictive analytics.'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Marketing Director',
      company: 'Stripe',
      location: 'San Francisco, CA',
      expertise: ['Digital Marketing', 'Growth Strategy', 'Branding'],
      rating: 4.8,
      hourlyRate: 160,
      availability: 'Weekends 9 AM-1 PM PST',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      description: 'Marketing expert with 10+ years in B2B and B2C growth marketing.'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'DevOps Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      expertise: ['AWS', 'Docker', 'Kubernetes'],
      rating: 4.6,
      hourlyRate: 170,
      availability: 'Weekdays 6-9 PM PST',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      description: 'Infrastructure specialist with deep knowledge of cloud technologies.'
    }
  ];

  const expertiseOptions = ['all', 'React', 'TypeScript', 'Node.js', 'Product Strategy', 'UI/UX Design', 'Machine Learning', 'Digital Marketing', 'AWS'];
  const locationOptions = ['all', 'San Francisco, CA', 'Seattle, WA', 'New York, NY', 'Los Angeles, CA'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise);
    const matchesLocation = selectedLocation === 'all' || mentor.location === selectedLocation;
    
    return matchesSearch && matchesExpertise && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Mentor</h1>
          <p className="text-gray-600">Connect with industry experts who can guide you on your journey</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="input-field"
            >
              <option value="all">All Expertise</option>
              {expertiseOptions.filter(exp => exp !== 'all').map(expertise => (
                <option key={expertise} value={expertise}>{expertise}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="input-field"
            >
              <option value="all">All Locations</option>
              {locationOptions.filter(loc => loc !== 'all').map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <button className="btn-secondary flex items-center justify-center">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="card hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm">{mentor.title}</p>
                  <p className="text-gray-500 text-sm">{mentor.company}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(mentor.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{mentor.rating}</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{mentor.description}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {mentor.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {mentor.availability}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  ${mentor.hourlyRate}/hour
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="btn-primary flex-1 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </button>
                <button className="btn-secondary px-4">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No mentors found matching your criteria.</p>
            <p className="text-gray-400">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;