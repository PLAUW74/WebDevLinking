import React from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

interface FeedbackCardProps {
  name: string;
  email: string;
  message: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, email, message }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <User className="w-4 h-4 text-purple-500" />
          <span className="text-gray-900">{name}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="w-4 h-4 text-pink-500" />
          <span className="break-all">{email}</span>
        </div>
        
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-start gap-2 text-gray-700">
            <MessageSquare className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
            <p className="text-gray-800 leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
