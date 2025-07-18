import React from 'react';
import { useHashRoute } from './hooks/useHashRoute';
import { getProductById } from './data/products';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';

const App: React.FC = () => {
  const route = useHashRoute();
  
  const renderPage = () => {
    if (route.startsWith('#/product/')) {
      const productId = route.replace('#/product/', '');
      const product = getProductById(productId);
      return product ? <ProductPage product={product} /> : <NotFoundPage />;
    }

    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/products':
        return <ProductListPage />;
      case '#/services':
        return <ServicesPage />;
      case '#/training':
        return <TrainingPage />;
      case '#/news':
        return <NewsPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  const isImmersivePage = route.startsWith('#/product/');

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col transition-colors duration-300">
      {!isImmersivePage && <Navbar />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isImmersivePage && <Footer />}
      {!isImmersivePage && <LiveChatWidget />}
    </div>
  );
};

const NotFoundPage = () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">We couldn't find the page you were looking for.</p>
        <a href="#/" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Back to Homepage
        </a>
    </div>
);

export default App;