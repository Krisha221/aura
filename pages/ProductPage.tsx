
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from '../components/Header';
import ModelViewer from '../components/ModelViewer';
import ControlPanel from '../components/ControlPanel';
import ViewControls from '../components/ViewControls';
import { Message, MessageAuthor, Product } from '../types';
import { askAboutMachine } from '../services/geminiService';
import AIChatButton from '../components/AIChatButton';
import { useARSupport } from '../hooks/useARSupport';
import { useTheme } from '../hooks/useTheme';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-ai-message',
      author: MessageAuthor.AI,
      text: `Hello! I'm the Aura Dynamics AI Companion. I'm here to answer any questions you have about the ${product.name}. What would you like to know?`,
    },
  ]);
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [isAutoRotateEnabled, setIsAutoRotateEnabled] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isInAR, setIsInAR] = useState(false);
  const [arScale, setArScale] = useState(1);
  const [unreadCount, setUnreadCount] = useState(0);
  const isChatOpenRef = useRef(isChatOpen);
  const arButtonRef = useRef<HTMLButtonElement | null>(null);
  const { theme } = useTheme();

  const isARSupported = useARSupport();

  useEffect(() => {
    isChatOpenRef.current = isChatOpen;
  }, [isChatOpen]);

  useEffect(() => {
    if (!isInAR) {
      setArScale(1);
    }
  }, [isInAR]);

  const handleSendMessage = useCallback(async (text: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      author: MessageAuthor.USER,
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsAiResponding(true);

    try {
      const questionWithContext = `Regarding the ${product.name} robot, ${text}`;
      const aiResponseText = await askAboutMachine(questionWithContext);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        author: MessageAuthor.AI,
        text: aiResponseText,
      };
      setMessages((prev) => [...prev, aiMessage]);
      if (!isChatOpenRef.current) {
        setUnreadCount((prev) => prev + 1);
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
  }, [product.name]);

  const handleToggleAutoRotate = useCallback(() => {
    setIsAutoRotateEnabled((prev) => !prev);
  }, []);

  const handleResetView = useCallback(() => {
    setResetTrigger((prev) => prev + 1);
  }, []);

  const handleEnterAR = useCallback(() => {
    arButtonRef.current?.click();
  }, []);

  const onARButtonReady = useCallback((button: HTMLButtonElement) => {
    arButtonRef.current = button;
  }, []);

  const toggleChat = useCallback(() => {
    setIsChatOpen((prev) => {
      if (!prev) { // If about to open
        setUnreadCount(0);
      }
      return !prev;
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black font-sans">
      <ModelViewer
        key={product.id}
        modelUrl={product.modelUrl}
        autoRotate={isAutoRotateEnabled}
        resetTrigger={resetTrigger}
        onARButtonReady={onARButtonReady}
        setIsInAR={setIsInAR}
        arScale={arScale}
        theme={theme}
      />
      {!isInAR && <Header productName={product.name} />}

      {!isInAR && (
         <ControlPanel
            isOpen={isChatOpen}
            messages={messages}
            onSendMessage={handleSendMessage}
            isAiResponding={isAiResponding}
        />
      )}
      
      {isInAR && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-xs px-4">
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 dark:border-white/10 p-2 flex items-center gap-3">
                <label htmlFor="ar-scale-slider" className="text-gray-900 dark:text-white text-sm font-medium pl-2 pr-1 whitespace-nowrap">Size</label>
                <input
                    id="ar-scale-slider"
                    type="range"
                    min="0.2"
                    max="2.0"
                    step="0.05"
                    value={arScale}
                    onChange={(e) => setArScale(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </div>
      )}

      {!isInAR && (
        <>
            <ViewControls
                isARSupported={isARSupported}
                onEnterAR={handleEnterAR}
                isAutoRotateEnabled={isAutoRotateEnabled}
                onToggleAutoRotate={handleToggleAutoRotate}
                onResetView={handleResetView}
            />
            <AIChatButton onClick={toggleChat} isOpen={isChatOpen} unreadCount={unreadCount} />
        </>
      )}
    </div>
  );
};

export default ProductPage;
