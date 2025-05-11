import React from 'react';
import { Trash2 } from 'lucide-react';

const FeedbackItem = ({ feedback, onDelete }) => {
  // Add your feedback item rendering logic here
  
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

export default FeedbackItem;