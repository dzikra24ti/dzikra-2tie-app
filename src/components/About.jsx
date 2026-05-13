import React from 'react';

const About = () => {
  const advantages = [
    {
      title: "Cepat & Tepat",
      desc: "Pengantaran kilat di bawah 30 menit agar makanan tetap segar.",
      icon: "🚀"
    },
    {
      title: "Kualitas Terjamin",
      desc: "Hanya bermitra dengan restoran yang memiliki standar kebersihan tinggi.",
      icon: "⭐"
    },
    {
      title: "Harga Jujur",
      desc: "Tanpa biaya tersembunyi, apa yang kamu lihat adalah yang kamu bayar.",
      icon: "💰"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Sisi Kiri: Gambar/Ilustrasi */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Foodies Team working" 
                className="rounded-3xl shadow-xl border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg hidden md:block">
                <p className="text-orange-500 font-bold text-3xl">10K+</p>
                <p className="text-gray-500 text-sm">Mitra Restoran</p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Penjelasan */}
          <div className="lg:w-1/2">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
              Tentang Food Ajah
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Menghubungkan Kelezatan <br /> Langsung ke Meja Makanmu.
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>Food Ajah</strong> adalah platform revolusioner yang bertujuan untuk mendemokrasi akses kuliner berkualitas. Kami percaya bahwa hidangan lezat bukan hanya soal rasa, tapi juga soal kemudahan dan pengalaman yang menyenangkan.
            </p>

            {/* Layanan & Keunggulan */}
            <div className="grid gap-6">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


