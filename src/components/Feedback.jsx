import React from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';

// Form Section
const FeedbackForm = ({ onAddFeedback }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Share your feedback</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="type" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Feedback Type
          </label>
          <select
            id="type"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
          >
            <option value="Bug">Bug</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            placeholder="Please describe your feedback in detail"
          />
          <p className="mt-1 text-xs text-gray-500">
            Minimum 10 characters
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

// List Section
const FeedbackList = ({ feedbackItems, onDelete }) => {
  return (
    <div className="space-y-4">
      <FeedbackItem />
    </div>
  );
};

// Item Section
const FeedbackItem = ({ feedback, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Name</h3>
          <div className="flex items-center mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Type
            </span>
            <span className="text-xs text-gray-500 ml-2">Date</span>
          </div>
        </div>
        <button
          onClick={() => onDelete(feedback?.id)}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200 focus:outline-none"
          aria-label="Delete feedback"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <p className="text-gray-600 whitespace-pre-line">Message</p>
    </div>
  );
};

// Filter Section
const FeedbackFilter = ({ currentFilter, onChange, counts }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => onChange('All')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-purple-600 text-white"
        >
          All
        </button>
        <button 
          onClick={() => onChange('Bug')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Bugs
        </button>
        <button 
          onClick={() => onChange('Feature Request')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Feature Requests
        </button>
        <button 
          onClick={() => onChange('Other')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Other
        </button>
      </div>
    </div>
  );
};

// Main Component
const Feedback = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <div className="flex justify-center mb-3">
            <div className="bg-purple-600 text-white p-3 rounded-full">
              <MessageSquare size={24} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">User Feedback Board</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Share your thoughts, report bugs, or request features. We value your input!
          </p>
        </header>

        <main>
          <FeedbackForm />
          <section className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Feedback
              </h2>
            </div>
            
            <FeedbackFilter />
            <FeedbackList />
          </section>
        </main>
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 User Feedback Board. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Feedback;