import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FeedbackForm } from './components/FeedbackForm';
import { FeedbackList } from './components/FeedbackList';

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
}

const API_URL = 'http://127.0.0.1:5000';

function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch feedbacks from backend when component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(`${API_URL}/feedbacks`);
      setFeedbacks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setLoading(false);
    }
  };

  const handleAddFeedback = async (newFeedback: { name: string; email: string; message: string }) => {
    try {
      // Send to backend
      const response = await axios.post(`${API_URL}/submit`, newFeedback);
      
      if (response.status === 201) {
        // Refresh the feedback list from backend
        await fetchFeedbacks();
        alert('Feedback submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Feedback App
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8">
          {/* Feedback Form Section */}
          <FeedbackForm onSubmit={handleAddFeedback} />

          {/* Feedback List Section */}
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Loading feedbacks...</p>
            </div>
          ) : (
            <FeedbackList feedbacks={feedbacks} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 text-center text-gray-600">
        <p>Made with care for your feedback</p>
      </footer>
    </div>
  );
}

export default App;