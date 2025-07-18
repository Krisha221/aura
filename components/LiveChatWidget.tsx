
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Message, MessageAuthor } from '../types';
import { askGeneralQuestion } from '../services/geminiService';
import { SendIcon } from './icons';
import Logo from './Logo';
import AIChatButton from './AIChatButton';

const LiveChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isAiResponding, setIsAiResponding] = useState(false);
    const [input, setInput] = useState('');
    const [unreadCount, setUnreadCount] = useState(0);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const isOpenRef = useRef(isOpen);

    useEffect(() => {
        isOpenRef.current = isOpen;
    }, [isOpen]);

    const initializeChat = () => {
      setMessages([
        {
          id: 'initial-ai-message',
          author: MessageAuthor.AI,
          text: `Hello! I'm the Aura Dynamics AI assistant. How can I help you today? You can ask me about our company, products, or services.`,
        },
      ]);
    }

    useEffect(() => {
        if(isOpen && messages.length === 0) {
            initializeChat();
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleChat = useCallback(() => {
        setIsOpen(prev => {
            if (!prev) { // If about to open
                setUnreadCount(0);
            }
            return !prev;
        });
    }, []);
    
    const handleSendMessage = useCallback(async (text: string) => {
        const userMessage: Message = {
          id: `user-${Date.now()}`,
          author: MessageAuthor.USER,
          text,
        };
        setMessages((prev) => [...prev, userMessage]);
        setIsAiResponding(true);
        setInput('');
    
        try {
          const aiResponseText = await askGeneralQuestion(text);
          const aiMessage: Message = {
            id: `ai-${Date.now()}`,
            author: MessageAuthor.AI,
            text: aiResponseText,
          };
          setMessages((prev) => [...prev, aiMessage]);
          if (!isOpenRef.current) {
            setUnreadCount(prev => prev + 1);
          }
        } catch (error) {
          const errorMessage: Message = {
            id: `error-${Date.now()}`,
            author: MessageAuthor.AI,
            text: 'Sorry, something went wrong while getting your answer.',
          };
          setMessages((prev) => [...prev, errorMessage]);
        } finally {
          setIsAiResponding(false);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isAiResponding) {
          handleSendMessage(input.trim());
        }
    };

    return (
        <>
            {/* Chat Panel */}
            <div className={`fixed bottom-28 right-4 sm:right-6 w-[calc(100%-2rem)] sm:w-full max-w-sm flex flex-col pointer-events-auto transform transition-all duration-300 ease-in-out z-[99] max-h-[70vh] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
                <div className="flex-grow flex flex-col bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 min-h-0">
                    <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center flex-shrink-0">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Aura Dynamics AI Assistant</h2>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex items-end gap-2 ${msg.author === MessageAuthor.USER ? 'justify-end' : 'justify-start'}`}>
                                {msg.author === MessageAuthor.AI && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0"><Logo className="w-5 h-auto text-red-500 dark:text-red-400" /></div>
                                )}
                                <div className={`max-w-[85%] rounded-lg px-4 py-2 ${msg.author === MessageAuthor.USER ? 'bg-red-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white/90 rounded-bl-none'}`}>
                                    <p className="text-base whitespace-pre-wrap break-words">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isAiResponding && (
                             <div className="flex items-end gap-2 justify-start">
                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0"><Logo className="w-5 h-auto text-red-500 dark:text-red-400" /></div>
                                <div className="max-w-xs rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-bl-none">
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
                    
                    <div className="p-4 border-t border-gray-200 dark:border-white/10 flex-shrink-0">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." className="flex-grow bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-white/20 rounded-full py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" disabled={isAiResponding} />
                            <button type="submit" disabled={isAiResponding || !input.trim()} className="bg-red-600 text-white rounded-full p-3 flex-shrink-0 hover:bg-red-500 disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors">
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <AIChatButton onClick={toggleChat} isOpen={isOpen} unreadCount={unreadCount} />
        </>
    );
};

export default LiveChatWidget;
