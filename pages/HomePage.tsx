
import React, { useState, useEffect, useCallback } from 'react';
import { products } from '../data/products';
import { testimonials } from '../data/content';
import { ShieldCheckIcon, LightBulbIcon, UserGroupIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/icons';
import InlineModelViewer from '../components/InlineModelViewer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsCount = testimonials.length;

  const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsCount);
  }, [testimonialsCount]);

  const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
  };
  
  useEffect(() => {
      const timer = setTimeout(nextSlide, 7000); // Autoplay every 7 seconds
      return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  const whyChooseUs = [
    { name: 'Advanced Autonomy', icon: ShieldCheckIcon, description: 'Our robots leverage cutting-edge AI to navigate complex environments, make intelligent decisions, and operate with minimal human intervention.' },
    { name: 'Modular Hardware', icon: LightBulbIcon, description: 'We design our platforms for flexibility. Easily swap modules, sensors, and end-effectors to adapt our robots to your specific application.' },
    { name: 'Ethical AI Core', icon: UserGroupIcon, description: 'We are committed to responsible innovation. Our systems are built around a core ethical framework to ensure safe, reliable, and transparent operation.' },
  ];

  const industries = ['Logistics & Warehousing', 'Healthcare Support', 'Advanced Manufacturing', 'Aerospace & Defense', 'Public Safety', 'Domestic Assistance'];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Engineering the Future of Autonomy.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
              Aura Dynamics is a world leader in advanced robotics and AI. We build intelligent systems that enhance human potential and solve the world's most complex challenges.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#/products" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Explore Our Fleet
              </a>
              <a href="#/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img src={products[0].imageUrl} alt="Featured Product" className="mx-auto w-[32rem] max-w-full rounded-2xl object-cover shadow-2xl shadow-red-500/10" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 dark:bg-white/5 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Our Commitmens</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Excellence in Every Circuit
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our focus is singular: to build the most reliable, capable, and intelligent robotic systems in the world. This commitment is reflected in our products, our people, and our partnerships.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {whyChooseUs.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <feature.icon className="h-6 w-6 flex-none text-red-600 dark:text-red-500" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-gray-500 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Technology in Action Section */}
       <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
         <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="max-w-2xl lg:col-span-7 lg:pl-8">
                <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Our Engineering</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Technology in Action</p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Explore our flagship Orion Mark IV humanoid robot in interactive 3D. See the precision engineering and advanced systems that define Aura Dynamics.
                </p>
                <div className="mt-8">
                    <a href="#/product/orion-mk4" className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        View Product Details & AR
                    </a>
                </div>
            </div>
            <div className="relative mt-12 lg:col-span-5 lg:mt-0">
                <div className="absolute -inset-x-4 -inset-y-8 sm:-inset-x-8 sm:-inset-y-12 rounded-3xl blur-2xl"></div>
                <InlineModelViewer modelUrl={products[0].modelUrl} className="w-auto h-[28rem] sm:h-[32rem] lg:h-[40rem] rounded-2xl" />
            </div>
        </div>
      </div>

       {/* Industries Served Section */}
      <div className="bg-gray-50 dark:bg-white/5 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Our Reach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Serving Diverse Industries</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our expertise in robotics and AI is trusted by leaders across a wide range of global industries.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="-m-2 grid grid-cols-2 rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-black/5 dark:ring-white/10 lg:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry} className="p-4 text-center text-sm font-medium leading-6 text-gray-600 dark:text-gray-300">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="relative isolate bg-white dark:bg-black py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600 dark:text-red-500">From Our Partners</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Building Success Together
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                    <div
                        className="flex transition-transform ease-in-out duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                                <figure className="bg-gray-100 dark:bg-gray-900/50 p-8 sm:p-10 text-sm leading-6 border border-gray-200 dark:border-white/10 h-full flex flex-col justify-center min-h-[280px] rounded-xl">
                                    <blockquote className="text-lg text-center text-gray-700 dark:text-gray-300">
                                        <p>{`“${testimonial.quote}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-8 flex items-center justify-center gap-x-4">
                                        <img className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800 object-cover" src={testimonial.imageUrl} alt={testimonial.author} />
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                                            <div className="text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
                    aria-label="Next testimonial"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-gray-800 dark:bg-white scale-125' : 'bg-gray-400 dark:bg-white/40 hover:bg-gray-500 dark:hover:bg-white/70'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
