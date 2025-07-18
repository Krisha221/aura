
import React from 'react';
import { products } from '../data/products';

const ProductListPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <main className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Explore Our Fleet</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover Aura Dynamics' cutting-edge robots. Select a product below to explore it in an interactive 3D environment.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <a href={`#/product/${product.id}`} key={product.id} className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 dark:bg-black">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{product.description}</p>
                </div>
                <div className="mt-6 text-red-500 dark:text-red-400 font-semibold group-hover:text-red-600 dark:group-hover:text-white transition-colors">
                  View in 3D & AR &rarr;
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
