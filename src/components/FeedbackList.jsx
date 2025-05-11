import React from 'react';
import FeedbackItem from './FeedbackItem';
import { AlertCircle } from 'lucide-react';

const FeedbackList = ({ feedbackItems, onDelete }) => {
  // Add your conditional rendering logic here
  
  return (
    <div className="space-y-4">
      <FeedbackItem />
    </div>
  );
};

export default FeedbackList;