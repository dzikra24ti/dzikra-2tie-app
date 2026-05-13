import React from 'react';

const Footer = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🍕</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Food Ajah.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Solusi terbaik untuk kulineran lezat tanpa keluar rumah. Kami antar kehangatan langsung ke pintu Anda.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit pb-1">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span>📍</span> Jl. Kuliner No. 123, Jakarta
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span> +62 812-3456-7890
              </li>
              <li className="flex items-center gap-3 underline hover:text-orange-500 transition-colors">
                <span>📧</span> hello@foodies.com
              </li>
            </ul>
          </div>

          {/* Kolom 3: Partner & Layanan */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit pb-1">Partner Kami</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-2 rounded text-center text-xs text-gray-300">Gofood Partner</div>
              <div className="bg-gray-800 p-2 rounded text-center text-xs text-gray-300">GrabFood</div>
              <div className="bg-gray-800 p-2 rounded text-center text-xs text-gray-300">ShopeeFood</div>
              <div className="bg-gray-800 p-2 rounded text-center text-xs text-gray-300">Traveloka Eat</div>
            </div>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit pb-1">Ikuti Kami</h4>
            <div className="flex gap-4">
              {/* Kamu bisa ganti teks ini dengan Icon Library seperti FontAwesome atau Lucide */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">FB</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">IG</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">TW</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">YT</a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Unduh Aplikasi:</p>
              <div className="flex gap-2">
                 <div className="bg-white text-black px-3 py-1 rounded text-[10px] font-bold">App Store</div>
                 <div className="bg-white text-black px-3 py-1 rounded text-[10px] font-bold">Play Store</div>
              </div>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Foodies App. Dibuat oleh **Dzikra Rizqullah** untuk Penilaian Landing Page.</p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;