import "./assets/tailwind.css"; 
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
import Riwayat from "./pages/Riwayat";
import Pengeluaran from "./pages/Pengeluaran";
import Laporan from "./pages/Laporan";
import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // min-h-screen agar background penuh, overflow-x-hidden untuk mencegah scroll samping
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      
      {/* Sidebar kita biarkan fixed (sesuai kode Sidebar kamu) */}
      <Sidebar />

      {/* Main Content: Berikan margin-left (ml-20 atau ml-64) agar tidak tertutup sidebar */}
      {/* ml-20 untuk ukuran mobile/kecil, md:ml-64 untuk ukuran desktop */}
      <div className="flex flex-col min-h-screen ml-20 md:ml-64 transition-all duration-300">
        
        {/* Header Tetap di Atas */}
        <Header />

        {/* Isi Halaman */}
        <main className="p-4 md:p-8">
          <PageHeader />
          <div className="mt-6">
            <Routes>
              <Route path="/laporan" element={<Laporan />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/riwayat" element={<Riwayat />} />
              <Route path="/pengeluaran" element={<Pengeluaran />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default App;