import React from 'react';
import data from '../assets/data.json';

const ProductList = () => {
  // Simulasi data JSON Product
  const products = [
    {
      id: 1,
      name: "Classic Beef Burger",
      price: "Rp 45.000",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Pepperoni Pizza XL",
      price: "Rp 85.000",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500",
      tag: "Popular"
    },
    {
      id: 3,
      name: "Matcha Latte Art",
      price: "Rp 28.000",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=500",
      tag: "Fresh"
    },
    {
      id: 4,
      name: "Salmon Sushi Set",
      price: "Rp 62.000",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500",
      tag: "Premium"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Menu Favorit</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Pilihan Terbaik Untukmu</p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-orange-600 font-extrabold text-xl mb-4">
                  {product.price}
                </p>
                
                <button className="w-full py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Tambah
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductList;