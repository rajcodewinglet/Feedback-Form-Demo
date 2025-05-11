import React from 'react';

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

export default FeedbackForm;