import React from 'react';
import { Search } from 'lucide-react';

// Helper component for filter checkboxes
function Checkbox({ label, id, ...props }) {
  return (
    <div className="flex items-center mb-2"> {/* Added mb-2 for vertical spacing between items */}
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
        {...props}
      />
      {/* FIX: Added ml-3 to give space between checkbox and text */}
      <label htmlFor={id} className="ml-3 text-sm text-gray-600 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

export default function FilterSidebar() {
  // 1. Define your data here (This is easy to edit!)
  const categories = [
    { id: 'cacti', name: 'Cacti' },
    { id: 'succulents', name: 'Succulents' },
    { id: 'pots', name: 'Pots' },
    { id: 'soil', name: 'Soil' },
    { id: 'seeds', name: 'Seeds' }, // Adding a new one is easy now
    { id: 'tools', name: 'Gardening Tools' }
  ];

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 p-6 bg-white rounded-lg shadow-sm h-fit">
      <h3 className="text-xl font-semibold mb-6 border-b pb-4 text-gray-900">Filters</h3>

      {/* Search Filter */}
      <div className="mb-8">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-all"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </span>
        </div>
      </div>

      {/* Category Filter (DYNAMIC NOW) */}
      <div className="mb-8">
        <h4 className="font-semibold mb-4 text-gray-800">Category</h4>
        <div className="space-y-1">
          {/* 2. Use .map() to loop through the list.
             This generates one <Checkbox> for every item in the 'categories' list.
          */}
          {categories.map((category) => (
            <Checkbox 
              key={category.id} // React needs a unique key
              id={`cat-${category.id}`} 
              label={category.name} 
            />
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">Price Range</h4>
        <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
          <span>LKR 0</span>
          <span>LKR 5,000</span>
        </div>
        <input
          type="range"
          min="0"
          max="5000"
          defaultValue="2500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
        />
      </div>
    </aside>
  );
}