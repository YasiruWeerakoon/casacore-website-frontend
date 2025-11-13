import React from 'react';
// We'll use lucide-react here too
import { ShoppingCart, ArrowRight } from 'lucide-react';

// --- Placeholder Data ---
// This data will eventually come from your FastAPI backend
const featuredProducts = [
  {
    id: 1,
    name: 'Tiny Thorny',
    price: 'LKR 890.00',
    imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=Cute+Cactus',
    alt: 'A tiny cute cactus in a small pot',
  },
  {
    id: 2,
    name: 'Green Gem',
    price: 'LKR 1,150.00',
    imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=Cute+Cactus',
    alt: 'A small succulent with rounded leaves',
  },
  {
    id: 3,
    name: 'Kandy King',
    price: 'LKR 1,250.00',
    imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=Cute+Cactus',
    alt: 'A flowering cactus in a decorative pot',
  },
  {
    id: 4,
    name: 'Spikelet',
    price: 'LKR 990.00',
    imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=Cute+Cactus',
    alt: 'A tall, thin cactus',
  },
];

// --- Main HomePage Component ---
export default function HomePage({ setPage }) {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Build Your Space.</span>
                <span className="block text-green-600">Build Yourself.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Start with our tiny, adorable cacti. Grow into the home of your dreams.
                Welcome to CasaCore, Sri Lanka's future for home design.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  onClick={() => setPage('shop')}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-green-700"
                >
                  Shop All Plants
                </a>
                <a
                  href="#"
                  onClick={() => setPage('about')}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                >
                  Our Vision
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative h-64 w-full rounded-lg shadow-xl sm:h-80 lg:h-full">
              <img
                src="https://placehold.co/800x600/A3E635/FFFFFF?text=CasaCore+Cacti"
                alt="Beautifully arranged cactus plants"
                onError={(e) => { e.target.src = 'https://placehold.co/800x600/A3E635/FFFFFF?text=CasaCore'; }}
                className="absolute inset-0 h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Meet Your New Friends</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hand-picked, easy-to-care-for, and guaranteed to make you smile.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              onClick={() => setPage('shop')}
              className="inline-flex items-center text-lg font-medium text-green-600 hover:text-green-800"
            >
              Shop the full collection
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-green-700 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">From a tiny cactus...</h2>
              <p className="mt-6 text-xl text-green-100">
                ...to a complete home. We're starting CasaCore with these perfect little plants,
                but our vision is to become the single place for every Sri Lankan to
                design and decorate their entire space.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                onClick={() => setPage('about')}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-green-700 shadow-sm transition-colors hover:bg-gray-100 lg:w-auto"
              >
                Read Our Story
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Re-usable Product Card Component
function ProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.alt}
          onError={(e) => { e.target.src = 'https://placehold.co/400x400/EBF4E5/333333?text=Image+Error'; }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-md font-bold text-green-700">{product.price}</p>
      </div>
      
      <button className="absolute bottom-4 right-4 z-10 flex items-center rounded-full bg-green-600 p-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-700 group-hover:opacity-100 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
}