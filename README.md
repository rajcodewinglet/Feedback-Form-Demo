# Feedback Board Application

A React application that allows users to submit and manage feedback. This project is designed to test your React skills in implementing business logic and state management.

## Project Structure

```
src/
├── components/
│   └── Feedback.jsx        # All feedback components in one file
├── services/
│   └── api.js             # APIs to retrieve and delete the feedback
└── App.jsx                # Main application component
```

## Implementation Requirements

### 1. State Management in Feedback Component
- Use a single state object to manage all form values
- Implement state management for feedback items
- Track the current filter selection
- Handle loading and error states

### 2. Form Section Implementation
- Implement form validation:
  - Name is required
  - Message must be at least 10 characters
- Handle form submission:
  - Create a new feedback object with unique ID
  - Add timestamp to the feedback
  - Add the new feedback to the list
  - Reset form after successful submission
- Show validation errors
- Implement loading state during submission

### 3. List Section Implementation
- Display feedback items in a list
- Show empty state when no feedback exists
- Implement conditional rendering based on filter:
  - Show all feedback when 'All' is selected
  - Show only bug feedback when 'Bug' is selected
  - Show only feature requests when 'Feature Request' is selected
  - Show only other feedback when 'Other' is selected

### 4. Item Section Implementation
- Display feedback details:
  - Name
  - Type (with appropriate styling)
  - Message
  - Date (formatted)
- Implement delete functionality:
  - Remove the feedback item from the list
  - Update the filter counts
- Add appropriate hover and interaction states

### 5. Filter Section Implementation
- Implement filter functionality for:
  - All feedback
  - Bugs
  - Feature Requests
  - Other
- Show count for each filter type
- Highlight active filter
- Handle filter changes:
  - Update the current filter
  - Filter the feedback list accordingly
  - Update the counts for each filter type

## Component Structure

The `Feedback.jsx` file contains all the necessary components:

```jsx
// Feedback.jsx
import React from 'react';

// Form Section
const FeedbackForm = ({ onAddFeedback }) => {
  // Add your form logic here
};

// List Section
const FeedbackList = ({ feedbackItems, onDelete }) => {
  // Add your list logic here
};

// Item Section
const FeedbackItem = ({ feedback, onDelete }) => {
  // Add your item logic here
};

// Filter Section
const FeedbackFilter = ({ currentFilter, onChange, counts }) => {
  // Add your filter logic here
};

// Main Component
const Feedback = () => {
  // Add your state management and business logic here
  return (
    <div>
      <FeedbackForm />
      <FeedbackFilter />
      <FeedbackList />
    </div>
  );
};

export default Feedback;
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Testing Your Implementation

1. Form Validation:
   - Try submitting empty form
   - Try submitting with short message
   - Verify error messages appear
   - Verify form resets after successful submission

2. Feedback Management:
   - Add new feedback items
   - Verify they appear in the list
   - Check if timestamps are correct
   - Verify feedback types are displayed correctly

3. Filter Functionality:
   - Test each filter type
   - Verify correct items are shown
   - Check if counts update correctly
   - Verify active filter is highlighted

4. Delete Functionality:
   - Delete feedback items
   - Verify they are removed from the list
   - Check if filter counts update
   - Verify list updates correctly

## Notes

- The UI structure and styling are already implemented
- Focus on implementing the business logic and state management
- Use React hooks for state management
- Implement proper error handling
- Add loading states where appropriate
- Keep all components in a single file for easier navigation
- Use a single state object for form values
- Implement proper feedback filtering logic
- Handle feedback deletion correctly
- Handle all data operations through the API service
- All components are in one file for easier implementation
- Focus on the business logic rather than file structure
