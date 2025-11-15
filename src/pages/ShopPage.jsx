import React from 'react';
import FilterSidebar from '../components/FilterSidebar.jsx';
import ProductCard from '../components/ProductCard.jsx';

// Placeholder data for the shop page
// In the future, this will come from your FastAPI backend!
const shopProducts = [
  { id: 1, name: 'Tiny Thorny', price: 'LKR 890.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A tiny cute cactus in a small pot' },
  { id: 2, name: 'Green Gem', price: 'LKR 1,150.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A small succulent with rounded leaves' },
  { id: 3, name: 'Spikelet', price: 'LKR 990.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A tall, thin cactus' },
  { id: 4, name: 'Kandy King', price: 'LKR 1,250.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A flowering cactus in a decorative pot' },
  { id: 5, name: 'Moonstone', price: 'LKR 1,400.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A plump, pale green succulent' },
  { id: 6, name: 'Desert Star', price: 'LKR 1,050.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A small, star-shaped cactus' },
  { id: 7, name: 'Mini Jade', price: 'LKR 950.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A miniature jade plant' },
  { id: 8, name: 'Sunset Glow', price: 'LKR 1,300.00', imageUrl: 'https://placehold.co/400x400/EBF4E5/333333?text=CasaCore+Cactus', alt: 'A succulent with reddish-orange tips' },
];

export default function ShopPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Shop Our Collection</h1>
          <p className="text-lg text-gray-600">Find the perfect green friend for your space.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters (Sidebar) */}
          <FilterSidebar />
          
          {/* Product Grid (Main Content) */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {/* Sort & View Options */}
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
              <span className="text-sm text-gray-600">Showing 8 of 12 products</span>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
                <select 
                  id="sort" 
                  className="pl-3 pr-8 py-2 text-sm border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none'}}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {shopProducts.map(product => (
                <a href="#" key={product.id} onClick={(e) => e.preventDefault()} className="block">
                  <ProductCard product={product} />
                </a>
              ))}
            </div>
            
            {/* Pagination (Static for now) */}
            <nav className="flex items-center justify-center border-t border-gray-200 px-4 py-6 mt-12 sm:px-0">
              <div className="flex -mt-px">
                <a
                  href="#"
                  className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <span className="text-gray-300">Previous</span>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="inline-flex items-center border-t-2 border-green-600 px-4 pt-4 text-sm font-medium text-green-700"
                >
                  1
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  2
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Next
                </a>
              </div>
            </nav>
          </main>
          
        </div>
      </div>
    </div>
  );
}