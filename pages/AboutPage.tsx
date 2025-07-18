
import React from 'react';
import { aboutContent, timeline, leadership } from '../data/content';
import { products } from '../data/products';
import InlineModelViewer from '../components/InlineModelViewer';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{aboutContent.headline}</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">{aboutContent.mission}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-red-500/10 dark:lg:border-t dark:lg:border-t-white/5">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 divide-y divide-red-500/10 text-center sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:max-w-none lg:grid-cols-3">
              <div className="px-8 py-10"><p className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">Robots Deployed</p><p className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">5,000+</p></div>
              <div className="px-8 py-10"><p className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">AI Models Trained</p><p className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">100+</p></div>
              <div className="px-8 py-10"><p className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">Countries Served</p><p className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">25</p></div>
          </div>
        </div>
      </div>

       {/* Timeline Section */}
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Journey Since 2020</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">From a bold idea to a global leader in intelligent automation.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {timeline.map((item, itemIdx) => (
            <div key={item.year}>
              <div className="flex items-center text-sm font-semibold leading-6 text-red-600 dark:text-red-500">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.year}
                <div className="absolute -ml-2 h-px w-screen-xl bg-gray-200 dark:bg-gray-800/60 sm:ml-4 sm:w-auto lg:left-1/2 lg:ml-0" aria-hidden="true" />
              </div>
              <p className="mt-2 text-base font-semibold text-gray-900 dark:text-white">{item.title}</p>
              <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Content and Model Section */}
       <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50 dark:bg-white/5"></div>
        <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
             <div className="relative lg:col-span-5 lg:-mr-8 xl:-mr-16">
                 <InlineModelViewer modelUrl={products[0].modelUrl} className="w-full h-[28rem] sm:h-[32rem] lg:h-[40rem] rounded-2xl" />
            </div>
            <div className="max-w-2xl lg:col-span-7 lg:pl-8 mt-12 lg:mt-0">
                <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Our Foundation</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Built on First Principles</p>
                <p className="mt-6 max-w-xl text-xl leading-8 text-gray-600 dark:text-gray-300">
                    {aboutContent.history}
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-gray-500 dark:text-gray-400">
                     <div className="border-l-2 border-red-500 pl-6">
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{aboutContent.scientific.title}</h3>
                        <p className="mt-2 text-lg leading-8">{aboutContent.scientific.description}</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-6">
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{aboutContent.locations.title}</h3>
                        <p className="mt-2 text-lg leading-8">{aboutContent.locations.description}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* Leadership Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The driving force behind our commitment to quality, innovation, and customer success.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {leadership.map((person) => (
              <li key={person.id}>
                <img className="aspect-[3/4] w-full rounded-2xl object-cover bg-gray-100 dark:bg-gray-800" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-base leading-7 text-red-600 dark:text-red-500">{person.title}</p>
                 <p className="text-base mt-2 leading-7 text-gray-600 dark:text-gray-400">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
