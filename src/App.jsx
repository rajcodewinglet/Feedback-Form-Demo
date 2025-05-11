import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackFilter from './components/FeedbackFilter';
import { MessageSquare } from 'lucide-react';

function App() {
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
}

export default App;