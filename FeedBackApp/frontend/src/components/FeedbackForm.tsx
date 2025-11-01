import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface FeedbackFormProps {
  onSubmit: (feedback: { name: string; email: string; message: string }) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() && email.trim() && message.trim()) {
      onSubmit({ name, email, message });
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="mb-6 text-purple-600">Submit Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-gray-200 focus:border-purple-400 focus:ring-purple-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-gray-200 focus:border-purple-400 focus:ring-purple-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Share your thoughts with us..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="border-gray-200 focus:border-purple-400 focus:ring-purple-400 resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Feedback
        </Button>
      </form>
    </div>
  );
};
