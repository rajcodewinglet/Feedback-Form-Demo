import React from 'react';
import { feedbackApi } from '../services/api';

/*
Task: Create a User Feedback Board

Requirements:

1. Form (30 points)
   - Create a form with: name, type (Bug/Feature Request/Other), message
   - Validate: name required, message min 10 chars
   - Clear form after submission

2. List (30 points)
   - Show all feedback items with: name, type, message
   - Add delete button for each item
   - Show "No feedback yet!" when empty

3. Filter (20 points)
   - Add buttons/dropdown to filter by type
   - Show total count of feedback
   - Update list when filter changes

4. API Integration (20 points)
   - Use provided API methods:
     feedbackApi.getFeedback()    // Get all feedback
     feedbackApi.addFeedback()    // Add new feedback
     feedbackApi.deleteFeedback() // Delete feedback by id

Bonus:
- Add loading states
- Add error handling
- Style your components
*/

function Feedback() {
  // Student implementation goes here
  return null;
}

export default Feedback;