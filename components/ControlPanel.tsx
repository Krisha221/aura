
import React, { useState, useRef, useEffect } from 'react';
import { Message, MessageAuthor } from '../types';
import { SendIcon } from './icons';
import Logo from './Logo';

interface ControlPanelProps {
  isOpen: boolean;
  messages: Message[];
  onSendMessage: (message: string) => void;
  isAiResponding: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  isOpen,
  messages,
  onSendMessage,
  isAiResponding,
}) => {
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isAiResponding) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-md z-30 flex flex-col pointer-events-auto transform transition-transform duration-300 ease-in-out sm:inset-y-4 sm:right-4 sm:max-w-md ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex-grow flex flex-col bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-none sm:rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">AI Companion</h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.author === MessageAuthor.USER ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.author === MessageAuthor.AI && (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Logo className="w-5 h-auto text-red-500 dark:text-red-400" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2 text-white/90 ${
                  msg.author === MessageAuthor.USER
                    ? 'bg-red-600 text-white rounded-br-none'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white/90 rounded-bl-none'
                }`}
              >
                <p className="text-base whitespace-pre-wrap break-words">{msg.text}</p>
              </div>
            </div>
          ))}
          {isAiResponding && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                <Logo className="w-5 h-auto text-red-500 dark:text-red-400" />
              </div>
              <div className="max-w-xs md:max-w-sm rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-bl-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full animate-pulse delay-0"></span>
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full animate-pulse delay-200"></span>
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full animate-pulse delay-400"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-200 dark:border-white/10 flex-shrink-0">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the robot..."
              className="flex-grow bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-white/20 rounded-full py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
              disabled={isAiResponding}
            />
            <button
              type="submit"
              disabled={isAiResponding || !input.trim()}
              className="bg-red-600 text-white rounded-full p-3 flex-shrink-0 hover:bg-red-500 disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
