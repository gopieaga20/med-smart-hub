
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const AskAIButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-6 bottom-6 bg-doctor-purple text-white p-4 rounded-full shadow-lg hover:bg-doctor-purple/90 transition-all z-50 flex items-center gap-2"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-medium">Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed right-6 bottom-6 bg-white rounded-lg shadow-xl w-96 z-50 border overflow-hidden flex flex-col">
          <div className="bg-doctor-purple text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h3 className="font-medium">AskAI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto">
            <div className="flex flex-col gap-3">
              <div className="bg-doctor-light-gray rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">Hi Dr. Johnson, how can I help you today?</p>
              </div>
              
              <div className="bg-doctor-light-purple rounded-lg p-3 max-w-[80%] ml-auto">
                <p className="text-sm">Show my patient list for today</p>
              </div>
              
              <div className="bg-doctor-light-gray rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">You have 8 patients scheduled for today. Would you like to see the full list or filter by specific criteria?</p>
              </div>
            </div>
          </div>
          
          <div className="border-t p-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-purple focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-doctor-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskAIButton;
