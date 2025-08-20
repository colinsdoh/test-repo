import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Clock, Star, ArrowRight, Play } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Connect with Experts',
      description: 'Find mentors who have walked the path you want to take and learn from their experiences.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Set Clear Goals',
      description: 'Define your objectives and track your progress with structured mentoring programs.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule with mentors from around the world.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Proven Results',
      description: 'Join thousands of mentees who have achieved their goals through our platform.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Mentors' },
    { number: '50,000+', label: 'Successful Mentees' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '200+', label: 'Expertise Areas' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect
              <span className="text-primary-600 block">Mentor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with industry experts, accelerate your career growth, and achieve your goals 
              through personalized mentoring relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mentors"
                className="btn-primary inline-flex items-center justify-center"
              >
                Find a Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MentorConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make mentoring accessible, effective, and rewarding for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of mentees who have transformed their careers and lives through mentoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/mentors"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Browse Mentors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;