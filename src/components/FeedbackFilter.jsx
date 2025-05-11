import React from 'react';

const FeedbackFilter = ({ currentFilter, onChange, counts }) => {
  // Add your filter logic here
  
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

export default FeedbackFilter;