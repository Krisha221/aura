
import React from 'react';
import * as THREE from 'three';
import { services } from '../data/content';
import InlineModelViewer from '../components/InlineModelViewer';
import { products } from '../data/products';

const ServicesPage = () => {
  const [customService, aiService, supportService] = services;
  const CustomIcon = customService.icon;
  const AiIcon = aiService.icon;
  const SupportIcon = supportService.icon;

  return (
    <div className="bg-white dark:bg-black">
      {/* Header */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comprehensive Solutions for Your Success
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
              Aura Dynamics is more than a manufacturer; we are your partner in automation. Our services are designed to optimize your processes, empower your team, and maximize your robotic investment.
            </p>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">

        {/* Custom Solutions Section */}
        <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8 bg-gray-50 dark:bg-white/5">
          <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="max-w-2xl lg:col-span-7 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                      <CustomIcon className="h-10 w-10 text-red-500" />
                      <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{customService.title}</h3>
                  </div>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                      {customService.description}
                  </p>
                  <div className="mt-8">
                      <a href="#/contact" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                          Consult Our Engineers
                      </a>
                  </div>
              </div>
              <div className="relative mt-12 lg:col-span-5 lg:mt-0">
                  <InlineModelViewer modelUrl={products[0].modelUrl} className="w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] rounded-2xl" />
              </div>
          </div>
        </div>

        {/* AI Integration Section */}
        <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="relative mt-12 lg:col-span-5 lg:mt-0 lg:order-last">
                  <InlineModelViewer modelUrl={products[0].modelUrl} cameraPosition={new THREE.Vector3(2.9, 0.8, 0)} className="w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] rounded-2xl" />
              </div>
              <div className="max-w-2xl lg:col-span-7 lg:pr-8">
                  <div className="flex items-center gap-x-4">
                      <AiIcon className="h-10 w-10 text-red-500" />
                      <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{aiService.title}</h3>
                  </div>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                      {aiService.description}
                  </p>
                  <div className="mt-8">
                      <a href="#/contact" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                          Explore Integrations
                      </a>
                  </div>
              </div>
          </div>
        </div>

        {/* Lifecycle Support Section */}
        <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8 bg-gray-50 dark:bg-white/5">
          <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="max-w-2xl lg:col-span-7 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                      <SupportIcon className="h-10 w-10 text-red-500" />
                      <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{supportService.title}</h3>
                  </div>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                      {supportService.description}
                  </p>
                  <div className="mt-8">
                      <a href="#/training" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                          View Training Courses
                      </a>
                  </div>
              </div>
              <div className="relative mt-12 lg:col-span-5 lg:mt-0">
                  <InlineModelViewer modelUrl={products[0].modelUrl} cameraPosition={new THREE.Vector3(-2, 0.8, 2)} className="w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] rounded-2xl" />
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
