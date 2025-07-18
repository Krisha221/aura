
import React from 'react';
import Logo from './Logo';
import { contactInfo } from '../data/content';

const Footer = () => {
  const primaryNavigation = [
    { name: 'Robots', href: '#/products' },
    { name: 'Solutions', href: '#/services' },
    { name: 'Software', href: '#/services' },
    { name: 'News', href: '#/news'},
  ];

  const secondaryNavigation = [
      { name: 'About Us', href: '#/about' },
      { name: 'Contact Us', href: '#/contact' },
      { name: 'Careers', href: '#' },
      { name: 'Research', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-screen-2xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="h-10 text-white" />
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Engineering the Future of Autonomy.
            </p>
            <div className="flex space-x-6">
              {contactInfo.socials.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Offerings</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {primaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 md:grid md:grid-cols-1 md:gap-8 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <div className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                    <p>{contactInfo.address}</p>
                    <p>
                        <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white">P: {contactInfo.phone}</a>
                    </p>
                    <p>
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-white">E: {contactInfo.email}</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} Aura Dynamics, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
