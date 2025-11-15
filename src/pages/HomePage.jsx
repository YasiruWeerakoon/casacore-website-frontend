import React from 'react';
// --- (NEW) Import the ProductCard component ---
import ProductCard from '../components/ProductCard.jsx';
import { ArrowRight } from 'lucide-react';

// Placeholder data for featured products
const featuredProducts = [
  { id: 1, name: 'Tiny Thorny', price: 'LKR 890.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A tiny cute cactus in a small pot' },
  { id: 2, name: 'Green Gem', price: 'LKR 1,150.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A small succulent with rounded leaves' },
  { id: 3, name: 'Spikelet', price: 'LKR 990.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A tall, thin cactus' },
];

export default function HomePage({ setPage }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-extrabold text-gray-900 lg:text-6xl">
                Build Your Space.
                <br />
                <span className="text-green-600">Build Yourself.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Start with our tiny, adorable cacti. Grow into the home of your dreams.
                Welcome to CasaCore: Sri Lanka's future for home design.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setPage('shop')}
                  className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Shop All Plants
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => setPage('about')}
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-green-600 shadow-lg ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Our Vision
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex h-80 lg:h-96 items-center justify-center rounded-lg bg-green-100 shadow-xl">
              <span className="text-3xl font-bold text-green-700">CasaCore Cacti</span>
              {/* You can replace this with an actual image later */}
              {/* <img src="/path/to/hero-image.jpg" alt="Beautiful cactus arrangement" className="h-full w-full object-cover rounded-lg" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Meet Your New Friends</h2>
            <p className="mt-4 text-lg text-gray-600">
              A curated selection of our most popular cacti, perfect for any space.
            </p>
          </div>
          
          {/* --- (NEW) Using the ProductCard component --- */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(product => (
              <a href="#" key={product.id} onClick={(e) => { e.preventDefault(); setPage('shop'); }} className="block">
                <ProductCard product={product} />
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button
              onClick={() => setPage('shop')}
              className="text-lg font-semibold text-green-600 transition-all hover:text-green-700"
            >
              See the Full Collection &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}