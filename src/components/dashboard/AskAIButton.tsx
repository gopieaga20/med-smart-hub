
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AskAIButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/chat')}
      className="fixed right-6 bottom-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all z-50 flex items-center gap-2"
      style={{ 
        boxShadow: '0 4px 14px rgba(30, 103, 185, 0.4)'
      }}
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium text-white drop-shadow-md">Ask AI</span>
    </button>
  );
};

export default AskAIButton;
