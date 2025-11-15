import React from 'react';
import { Search } from 'lucide-react';

// Helper component for filter checkboxes
function Checkbox({ label, id, ...props }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
        {...props}
      />
      <label htmlFor={id} className="ml-3 text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
}

export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6 border-b pb-4 text-gray-900">Filters</h3>

      {/* Search Filter */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search size={18} className="text-gray-400" />
          </span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-800">Category</h4>
        <div className="space-y-2">
          <Checkbox label="Cacti" id="cat-cacti" defaultChecked />
          <Checkbox label="Succulents" id="cat-succulents" />
          <Checkbox label="Pots" id="cat-pots" />
          <Checkbox label="Soil" id="cat-soil" />
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">Price Range</h4>
        <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
          <span>LKR 800</span>
          <span>LKR 2,500</span>
        </div>
        <input
          type="range"
          min="800"
          max="2500"
          defaultValue="2500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg text-green-600"
          style={{ accentColor: '#16a34a' }} // Tailwind doesn't have an accent-color utility by default
        />
      </div>
    </aside>
  );
}