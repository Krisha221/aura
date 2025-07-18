
import React from 'react';
import { newsArticles } from '../data/content';

const NewsPage = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">News & Announcements</h2>
                    <p className="mt-2 text-xl leading-8 text-gray-600 dark:text-gray-300">
                        Stay up-to-date with the latest press releases, product launches, and stories from Aura Dynamics.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {newsArticles.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                                        {post.date}
                                    </time>
                                    <span className="relative z-10 rounded-full bg-gray-100 dark:bg-gray-900 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-base leading-7 text-gray-600 dark:text-gray-400">{post.summary}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
