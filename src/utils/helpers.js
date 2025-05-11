

export const generateId = () => {
  return Math.random().toString(36).substring(2, 11);
};

export const getFeedbackTypeColor = (type) => {
  switch (type) {
    case 'Bug':
      return 'bg-red-100 text-red-800';
    case 'Feature Request':
      return 'bg-blue-100 text-blue-800';
    case 'Other':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getFeedbackTypeIcon = (type) => {
  switch (type) {
    case 'Bug':
      return '🐞';
    case 'Feature Request':
      return '💡';
    case 'Other':
      return '💬';
    default:
      return '💬';
  }
};