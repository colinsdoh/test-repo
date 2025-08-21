import React from 'react';
import { Calendar, Clock, MessageCircle, BookOpen, TrendingUp, Users, Target, Award } from 'lucide-react';

interface Session {
  id: number;
  mentorName: string;
  topic: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface Activity {
  id: number;
  type: 'session' | 'message' | 'goal' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const upcomingSessions: Session[] = [
    {
      id: 1,
      mentorName: 'Sarah Johnson',
      topic: 'React Performance Optimization',
      date: '2024-01-15',
      time: '2:00 PM',
      duration: '1 hour',
      status: 'upcoming'
    },
    {
      id: 2,
      mentorName: 'Michael Chen',
      topic: 'Product Strategy Planning',
      date: '2024-01-18',
      time: '10:00 AM',
      duration: '1.5 hours',
      status: 'upcoming'
    }
  ];

  const recentActivities: Activity[] = [
    {
      id: 1,
      type: 'session',
      title: 'Completed session with Sarah Johnson',
      description: 'React Performance Optimization - Great insights on code splitting and lazy loading',
      timestamp: '2 hours ago',
      icon: <BookOpen className="h-5 w-5 text-green-600" />
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from Michael Chen',
      description: 'Shared additional resources for product strategy',
      timestamp: '1 day ago',
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />
    },
    {
      id: 3,
      type: 'goal',
      title: 'Goal achieved: React Fundamentals',
      description: 'Completed all React basics modules and exercises',
      timestamp: '3 days ago',
      icon: <Target className="h-5 w-5 text-purple-600" />
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Earned "Quick Learner" badge',
      description: 'Completed 5 sessions in your first month',
      timestamp: '1 week ago',
      icon: <Award className="h-5 w-5 text-yellow-600" />
    }
  ];

  const stats = [
    { label: 'Total Sessions', value: '12', icon: <BookOpen className="h-6 w-6" />, change: '+2 this month' },
    { label: 'Active Mentors', value: '3', icon: <Users className="h-6 w-6" />, change: '+1 this month' },
    { label: 'Goals Completed', value: '8', icon: <Target className="h-6 w-6" />, change: '+3 this month' },
    { label: 'Progress Score', value: '85%', icon: <TrendingUp className="h-6 w-6" />, change: '+5% this month' }
  ];

  const currentGoals = [
    { id: 1, title: 'Master React Hooks', progress: 75, deadline: '2024-02-01' },
    { id: 2, title: 'Learn TypeScript', progress: 45, deadline: '2024-02-15' },
    { id: 3, title: 'Build Portfolio Project', progress: 30, deadline: '2024-03-01' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your mentoring progress and upcoming sessions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
                <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Sessions</h2>
                <button className="btn-primary">Schedule New</button>
              </div>
              
              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{session.mentorName}</h3>
                            <p className="text-sm text-gray-600">{session.topic}</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {session.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(session.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {session.time} ({session.duration})
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-3">
                        <button className="btn-primary text-sm px-3 py-1">Join Session</button>
                        <button className="btn-secondary text-sm px-3 py-1">Reschedule</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No upcoming sessions</p>
                  <button className="btn-primary mt-2">Schedule Your First Session</button>
                </div>
              )}
            </div>
          </div>

          {/* Current Goals */}
          <div>
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Goals</h2>
              
              <div className="space-y-4">
                {currentGoals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{goal.title}</h3>
                      <span className="text-sm text-gray-500">
                        Due {new Date(goal.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="w-full btn-secondary text-sm">
                      Update Progress
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full btn-primary mt-4">Add New Goal</button>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="btn-secondary">View All Activities</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;