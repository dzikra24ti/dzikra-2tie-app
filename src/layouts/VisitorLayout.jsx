import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VisitorLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar akan selalu muncul di atas untuk Guest */}
      <Navbar />

      {/* Konten halaman yang dinamis akan muncul di sini */}
      <main className="flex-grow: 1">
        {children}
      </main>
        <Footer />  
    </div>
  );
};

export default VisitorLayout;