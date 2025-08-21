import React, { useState } from 'react';
import { User, Edit, Save, X, Camera, MapPin, Briefcase, GraduationCap, Target, Calendar } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  expertise: string[];
  goals: string[];
  availability: string;
  profileType: 'mentor' | 'mentee' | 'both';
  image: string;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    title: 'Software Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with 3 years of experience in web development. Looking to grow my skills and help others learn.',
    expertise: ['React', 'JavaScript', 'Node.js', 'CSS'],
    goals: ['Learn TypeScript', 'Master React Hooks', 'Build a Portfolio Project'],
    availability: 'Weekdays 6-9 PM PST, Weekends 10 AM-2 PM PST',
    profileType: 'mentee',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  });

  const [editForm, setEditForm] = useState<UserProfile>(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const addExpertise = (expertise: string) => {
    if (expertise && !editForm.expertise.includes(expertise)) {
      setEditForm({ ...editForm, expertise: [...editForm.expertise, expertise] });
    }
  };

  const removeExpertise = (index: number) => {
    setEditForm({
      ...editForm,
      expertise: editForm.expertise.filter((_, i) => i !== index)
    });
  };

  const addGoal = (goal: string) => {
    if (goal && !editForm.goals.includes(goal)) {
      setEditForm({ ...editForm, goals: [...editForm.goals, goal] });
    }
  };

  const removeGoal = (index: number) => {
    setEditForm({
      ...editForm,
      goals: editForm.goals.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600">Manage your profile and preferences</p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-primary flex items-center"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="btn-primary flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="btn-secondary flex items-center"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card text-center">
              <div className="relative mb-6">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.name}</h2>
              <p className="text-gray-600 mb-1">{profile.title}</p>
              <p className="text-gray-500 text-sm mb-4">{profile.company}</p>
              
              <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {profile.location}
              </div>
              
              <div className="bg-primary-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-primary-700">
                  Profile Type: {profile.profileType === 'mentor' ? 'Mentor (Big)' : 
                               profile.profileType === 'mentee' ? 'Mentee (Small)' : 'Both'}
                </p>
              </div>
              
              {!isEditing && (
                <div className="space-y-2">
                  <button className="w-full btn-primary">View Public Profile</button>
                  <button className="w-full btn-secondary">Share Profile</button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-600" />
                Basic Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="input-field"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="input-field"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="input-field"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.title}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.company}
                      onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                      className="input-field"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.company}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                {isEditing ? (
                  <textarea
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    rows={3}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profile.bio}</p>
                )}
              </div>
            </div>

            {/* Expertise */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
                Expertise & Skills
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm flex items-center"
                  >
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => removeExpertise(index)}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add new skill..."
                    className="input-field flex-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addExpertise((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.querySelector('input[placeholder="Add new skill..."]') as HTMLInputElement;
                      if (input) {
                        addExpertise(input.value);
                        input.value = '';
                      }
                    }}
                    className="btn-secondary"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>

            {/* Goals */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary-600" />
                Learning Goals
              </h3>
              
              <div className="space-y-2 mb-4">
                {profile.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-900">{goal}</span>
                    {isEditing && (
                      <button
                        onClick={() => removeGoal(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add new goal..."
                    className="input-field flex-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addGoal((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.querySelector('input[placeholder="Add new goal..."]') as HTMLInputElement;
                      if (input) {
                        addGoal(input.value);
                        input.value = '';
                      }
                    }}
                    className="btn-secondary"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>

            {/* Availability */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                Availability
              </h3>
              
              {isEditing ? (
                <textarea
                  value={editForm.availability}
                  onChange={(e) => setEditForm({ ...editForm, availability: e.target.value })}
                  rows={3}
                  className="input-field"
                  placeholder="Describe your availability for mentoring sessions..."
                />
              ) : (
                <p className="text-gray-900">{profile.availability}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;