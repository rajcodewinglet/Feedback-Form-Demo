// Simple mock API service
export const feedbackApi = {
  getFeedback: () => {
    return new Promise((resolve) => {
      const data = require('../assets/data.json');
      resolve(data.feedbackItems);
    });
  },

  addFeedback: (feedback) => {
    return new Promise((resolve) => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        ...feedback
      });
    });
  },

  deleteFeedback: (id) => {
    return new Promise((resolve) => {
      resolve({ success: true });
    });
  }
};