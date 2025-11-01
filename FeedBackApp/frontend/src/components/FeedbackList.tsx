import React from 'react';
import { FeedbackCard } from './FeedbackCard';

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

export const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md p-8">
      <h2 className="mb-6 text-purple-600">Feedback Dashboard</h2>
      
      {feedbacks.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-500">
              No feedback yet. Be the first to share your thoughts!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              name={feedback.name}
              email={feedback.email}
              message={feedback.message}
            />
          ))}
        </div>
      )}
    </div>
  );
};
