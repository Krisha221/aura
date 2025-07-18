import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  productName?: string;
}

const Header: React.FC<HeaderProps> = ({ productName }) => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 z-20 pointer-events-none">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <a href="#/products" className="flex items-center gap-4 pointer-events-auto" title="Back to Product Catalog">
            <Logo className="h-10 w-auto" />
            <div className="h-8 w-px bg-gray-500/30 dark:bg-white/30"></div>
            <h1 className="text-xl font-light tracking-wider text-gray-800/90 dark:text-white/90">3D Product Explorer</h1>
        </a>
        {productName && (
            <>
                <div className="h-8 w-px bg-gray-500/30 dark:bg-white/30"></div>
                <h2 className="text-xl font-semibold text-gray-800/90 dark:text-white/90">{productName}</h2>
            </>
        )}
      </div>
    </header>
  );
};

export default Header;