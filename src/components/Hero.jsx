const Hero = () => {
  return (
     <section id="home" className="py-20 bg-white">
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Konten Kiri (Headline & Deskripsi) */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Lapar Melanda?</span>
              <span className="block text-orange-500">Food Ajah Solusinya.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Pesan makanan favoritmu dari restoran terbaik hanya dalam hitungan detik. 
              Hangat, cepat, dan sampai tepat di depan pintumu.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 shadow-lg shadow-orange-200 transition-all transform hover:scale-105">
                Pesan Sekarang
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Konten Kanan (Gambar/Ilustrasi) */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
                alt="Delicious healthy food bowl"
              />
              {/* Dekorasi Aksen */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Populer</p>
                  <p className="text-sm font-bold text-gray-800">Diskon 50% Hari Ini!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </section>
  );
};

export default Hero;