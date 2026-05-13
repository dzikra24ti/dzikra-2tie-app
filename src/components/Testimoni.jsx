import React from 'react';
import testimoni from '../assets/testimoni.json';

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Testimoni</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Apa Kata Pelanggan Kami?</p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* List Testimoni (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimoni.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              {/* Icon Kutip */}
              <div className="absolute top-6 right-8 text-orange-200 text-5xl font-serif">“</div>
              
              <div className="flex flex-col h-full">
                {/* Isi Ulasan */}
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                  "{item.review}"
                </p>

                {/* Profil Pengguna (Avatar & Nama) */}
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full border-2 border-orange-500 p-0.5 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <div className="flex text-orange-400 text-xs">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;