import React from 'react';
import { ShoppingCart } from 'lucide-react';

// This is our re-usable component.
// We pass 'product' in as a prop.
export default function ProductCard({ product }) {
  // --- FIX ---
  // Add a guard clause to prevent crashing if the product prop is missing.
  // This handles cases where the component might be rendered before the product data is loaded.
  if (!product) {
    // You can return null or a placeholder loading skeleton
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl bg-white animate-pulse">
        <div className="relative h-64 w-full bg-gray-200"></div>
        <div className="p-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  // --- END FIX ---

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl bg-white">
      {/* Product Image */}
      <div className="relative h-64 w-full">
        <img
          src={product.imageUrl}
          alt={product.alt}
          onError={(e) => { e.target.src = 'https://placehold.co/400x400/EBF4E5/333333?text=Image+Error'; }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Add to Cart button (appears on hover) */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-300
                     translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-green-700"
          aria-label="Add to cart"
        >
          <ShoppingCart size={20} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-md font-bold text-green-700">{product.price}</p>
      </div>
    </div>
  );
}