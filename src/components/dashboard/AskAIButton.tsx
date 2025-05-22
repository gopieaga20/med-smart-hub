
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AskAIButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/chat')}
      className="fixed right-6 bottom-6 bg-snapdoc-blue text-white p-4 rounded-full shadow-lg hover:bg-snapdoc-blue/90 hover:scale-105 transition-all z-50 flex items-center gap-2"
      style={{ background: 'linear-gradient(135deg, #39A9DB, #2b7da9)' }}
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium drop-shadow-sm">Ask AI</span>
    </button>
  );
};

export default AskAIButton;
