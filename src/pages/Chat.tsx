
import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { Input } from '../components/ui/input';
import { Send, Bot, User, PanelRight, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define message types
type MessageRole = 'user' | 'assistant' | 'system';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello Dr. Johnson, how can I assist you with patient care today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message to state
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        'patient': 'You have 8 patients scheduled for today. Your first appointment is with James Wilson at 9:00 AM for a follow-up consultation.',
        'lab': 'Emily Carter\'s latest labs show improved A1C levels (6.5%, down from 7.2%). Potassium levels are within normal range.',
        'medication': 'Based on the patient\'s profile and recent labs, I recommend considering a reduction in the Metformin dosage. Would you like me to draft the prescription update?',
        'summary': 'Based on the last 3 visits: James Wilson has shown steady improvement in blood pressure control, maintained medication compliance, and reported reduced symptoms.',
      };

      // Check if input contains any keywords
      const keyword = Object.keys(aiResponses).find(key => 
        inputValue.toLowerCase().includes(key)
      );

      let responseContent = keyword 
        ? aiResponses[keyword] 
        : "I'll help you with that. What specific information would you like about this patient or medical question?";

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestions = [
    "Show my patient list for today",
    "Summarize Emily Carter's recent labs",
    "Suggest treatment for hypertension with diabetes",
    "Draft a progress note for James Wilson"
  ];

  return (
    <Layout>
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="p-4 bg-white border-b flex justify-between items-center">
            <h1 className="text-xl font-bold text-doctor-purple flex items-center gap-2">
              <Bot size={24} />
              AskAI Assistant
            </h1>
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="text-doctor-neutral-gray hover:text-doctor-purple"
            >
              <PanelRight size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-doctor-light-gray">
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-doctor-light-purple text-doctor-dark'
                        : 'bg-white border shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === 'assistant' ? (
                        <Bot size={16} className="text-doctor-purple" />
                      ) : (
                        <User size={16} />
                      )}
                      <span className="font-medium">
                        {message.role === 'assistant' ? 'AskAI Assistant' : 'Dr. Johnson'}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <div className="text-xs text-doctor-neutral-gray mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-white border shadow-sm">
                    <div className="flex items-center gap-2">
                      <Bot size={16} className="text-doctor-purple" />
                      <span className="font-medium">AskAI Assistant</span>
                    </div>
                    <div className="mt-2 flex gap-1">
                      <div className="w-2 h-2 bg-doctor-purple/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-doctor-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-doctor-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 bg-white border-t">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about your patients or medical questions..."
                  className="pr-10"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-full ${
                    !inputValue.trim() || isLoading
                      ? 'bg-doctor-purple/50 cursor-not-allowed'
                      : 'bg-doctor-purple hover:bg-doctor-purple/80'
                  }`}
                >
                  <Send size={16} />
                </button>
              </div>

              {messages.length <= 2 && (
                <div className="mt-4">
                  <p className="text-sm text-doctor-neutral-gray mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInputValue(suggestion);
                          // Focus the input after clicking a suggestion
                          document.querySelector('input')?.focus();
                        }}
                        className="text-sm bg-doctor-purple/10 text-doctor-purple px-3 py-1 rounded-full hover:bg-doctor-purple/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {showInfo && (
          <div className="w-72 bg-white border-l overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">AskAI Information</h2>
                <button 
                  onClick={() => setShowInfo(false)}
                  className="text-doctor-neutral-gray hover:text-doctor-purple"
                >
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-sm mb-2">What can AskAI do?</h3>
              <ul className="text-xs space-y-1 text-doctor-neutral-gray">
                <li>• Get quick patient summaries</li>
                <li>• Analyze lab results</li>
                <li>• Draft clinical notes</li>
                <li>• Suggest treatment options</li>
                <li>• Access medical guidelines</li>
                <li>• Answer medical questions</li>
              </ul>
              
              <h3 className="font-medium text-sm mt-4 mb-2">Patient Context</h3>
              <p className="text-xs text-doctor-neutral-gray">
                AskAI has access to your patient records and can provide personalized insights based on medical histories and recent test results.
              </p>
              
              <div className="mt-4 p-2 bg-doctor-light-gray rounded-lg">
                <p className="text-xs font-medium">Try asking about:</p>
                <ul className="text-xs text-doctor-neutral-gray mt-1">
                  <li>• "Summarize James Wilson's cardiac history"</li>
                  <li>• "What are Emily Carter's latest A1C trends?"</li>
                  <li>• "Draft a referral to cardiology for Robert Lee"</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Chat;
