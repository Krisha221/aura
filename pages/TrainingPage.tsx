import React from 'react';
import { trainingCourses } from '../data/content';
import { AcademicCapIcon } from '../components/icons';

const TrainingPage = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600 dark:text-red-500">Professional Training</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Advance Your Team's Expertise
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            Our certified training programs provide immersive, hands-on learning experiences in a real-world manufacturing setting, led by industry experts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-12">
          {trainingCourses.map((course) => (
            <div key={course.id} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-x-4">
                    <div className="flex-shrink-0">
                        <AcademicCapIcon className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
                </div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{course.description}</p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">Upcoming Dates:</h4>
                <ul className="mt-2 list-disc list-inside text-gray-500 dark:text-gray-400">
                  {course.schedule.map((date, index) => (
                    <li key={index}>{date}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                  <a href="#/contact" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
                    Register Now
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;