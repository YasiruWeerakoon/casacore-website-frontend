import React, { useState } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {

  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-900">
      {/* Header component will get the 'setPage' function so nav links can change the page */}
      <Header setPage={setPage} />

      {/* This 'main' element will grow to fill the available space */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer is at the bottom */}
      <Footer />
    </div>
  );
}