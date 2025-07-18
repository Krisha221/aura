import React from 'react';
import Logo from './Logo';
import { MessageIcon, CloseIcon } from './icons';
import { useTheme } from '../hooks/useTheme';

interface AIChatButtonProps {
  onClick: () => void;
  isOpen?: boolean;
  unreadCount?: number;
}

const AIChatButton: React.FC<AIChatButtonProps> = ({ onClick, isOpen, unreadCount }) => {
  const { theme } = useTheme();

  return (
    <div className="fixed bottom-8 right-8 z-[100] pointer-events-auto">
      <div className="relative group">
        <button
          onClick={onClick}
          className="relative flex items-center justify-center w-16 h-16 bg-red-600 text-white  rounded-full shadow-2xl hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50 transform hover:scale-110 transition-all duration-200 ease-in-out"
          aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat Assistant'}
        >
          {isOpen ? (
            <CloseIcon className="w-8 h-8" />
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                <Logo className="w-9 h-auto" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <MessageIcon className="w-8 h-8" />
              </div>
            </>
          )}
        </button>
        {!isOpen && unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-black pointer-events-none">
            {unreadCount > 9 ? '9+' : unreadCount}
          </div>
        )}
        {!isOpen && (
          <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 px-3 py-1.5 bg-gray-800 dark:bg-gray-900 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
            Ask Assistant
            <div className={`absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-900'} rotate-45`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChatButton;