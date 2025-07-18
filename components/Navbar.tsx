
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useHashRoute } from '../hooks/useHashRoute';
import { Bars3Icon, XMarkIcon } from './icons';
import ThemeToggleButton from './ThemeToggleButton';

const navigation = [
  { name: 'Home', href: '#/' },
  { name: 'About', href: '#/about' },
  { name: 'Products', href: '#/products' },
  { name: 'Services', href: '#/services' },
  { name: 'Training', href: '#/training' },
  { name: 'News', href: '#/news'},
  { name: 'Contact', href: '#/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = useHashRoute();

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [route]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-red-600 sticky top-0 z-40 border-b border-red-700/50">
        <nav className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <a href="#/" className="-m-1.5 p-1.5">
            <span className="sr-only">Aura Dynamics</span>
            <Logo className="h-8 w-auto text-white" />
          </a>
          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  route === item.href ? 'text-white font-bold' : 'text-red-100 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
             <ThemeToggleButton />
          </div>
          <div className="flex items-center lg:hidden">
            <ThemeToggleButton />
            <button
              type="button"
              className="-m-2.5 ml-2 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open main menu"}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open main menu"}</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Mobile Menu Card */}
      <div
        className={`lg:hidden fixed inset-x-4 top-20 z-40 origin-top transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="divide-y divide-red-500/50 overflow-hidden rounded-lg bg-red-600 shadow-2xl ring-1 ring-red-700">
          <div className="space-y-2 p-5">
             {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                  route === item.href 
                    ? 'bg-red-700 text-white' 
                    : 'text-red-100 hover:bg-red-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
