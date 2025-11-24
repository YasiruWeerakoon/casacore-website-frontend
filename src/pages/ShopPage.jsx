import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { Loader2 } from 'lucide-react';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function runs when the page loads
    const fetchProducts = async () => {
      try {
        console.log("Fetching products from backend...");
        // 1. Call your FastAPI Backend
        const response = await fetch('http://127.0.0.1:8000/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        // 2. Get the JSON data
        const data = await response.json();
        console.log("Data received:", data);

        // 3. Transform data to match what ProductCard expects
        // (The backend sends 'image_urls', but ProductCard expects 'imageUrl')
        const formattedProducts = data.map(product => ({
          ...product,
          imageUrl: product.image_urls && product.image_urls.length > 0 
            ? product.image_urls[0] 
            : 'https://placehold.co/400x400/EBF4E5/333333?text=No+Image',
          alt: product.description || product.name,
          // Format price to look like currency if it's just a number
          price: typeof product.price === 'number' 
            ? `LKR ${product.price.toFixed(2)}` 
            : product.price
        }));

        setProducts(formattedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Could not load products. Is the backend running?");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Shop Our Collection</h1>
          <p className="text-lg text-gray-600">Find the perfect green friend for your space.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters (Sidebar) */}
          <FilterSidebar />
          
          {/* Main Content */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {/* Sort & View Options */}
            <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
              <span className="text-sm text-gray-600">
                {loading ? 'Loading...' : `Showing ${products.length} products`}
              </span>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
                <select 
                  id="sort" 
                  className="pl-3 pr-8 py-2 text-sm border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-green-600" size={48} />
                <span className="ml-4 text-lg text-gray-600">Loading your cacti...</span>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            {/* Products Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.length === 0 ? (
                  <div className="col-span-full text-center py-10 text-gray-500">
                    No products found in the database. Go add some via the API!
                  </div>
                ) : (
                  products.map(product => (
                    <a href="#" key={product.id || product._id} onClick={(e) => e.preventDefault()} className="block">
                      <ProductCard product={product} />
                    </a>
                  ))
                )}
              </div>
            )}
            
          </main>
          
        </div>
      </div>
    </div>
  );
}