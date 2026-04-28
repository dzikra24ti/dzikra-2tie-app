import { FaSignOutAlt } from "react-icons/fa"; 
import { AiFillHome } from "react-icons/ai"; 
import { FaHistory } from "react-icons/fa"; 
import { FaWallet } from "react-icons/fa"; 
import { BiWallet } from "react-icons/bi"; 
import { AiFillBook } from "react-icons/ai"; 
export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white border-r border-yellow-100 flex flex-col p-6 z-[999]">
      
      {/* JUDUL SIDEBAR */}
      <div className="hidden md:block mb-10">
        <h2 className="text-[#F59E0B] font-black text-2xl tracking-tighter italic">JAGO AYAM.</h2>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Manajemen Kasir</p>
      </div>

      {/* DAFTAR MENU */}
      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-4 p-4 text-gray-400 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#F59E0B] hover:text-white hover:shadow-xl hover:shadow-yellow-200 group">
          <div className="w-6 text-center"><i><AiFillHome /></i></div>
          <span className="hidden md:block font-bold text-sm">Dashboard</span>
        </button>

        <button className="flex items-center gap-4 p-4 text-gray-400 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#F59E0B] hover:text-white hover:shadow-xl hover:shadow-yellow-200 group">
          <div className="w-6 text-center"><i><FaHistory /></i></div>
          <span className="hidden md:block font-bold text-sm">Riwayat</span>
        </button>

        <button className="flex items-center gap-4 p-4 text-gray-400 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#F59E0B] hover:text-white hover:shadow-xl hover:shadow-yellow-200 group">
          <div className="w-6 text-center"><i><FaWallet /></i></div>
          <span className="hidden md:block font-bold text-sm">Pengeluaran</span>
        </button>

        <button className="flex items-center gap-4 p-4 text-gray-400 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#F59E0B] hover:text-white hover:shadow-xl hover:shadow-yellow-200 group">
          <div className="w-6 text-center"><i><AiFillBook/></i></div>
          <span className="hidden md:block font-bold text-sm">Laporan</span>
        </button>
      </div>

      <div className="mt-auto pt-6 border-t border-yellow-50 space-y-4">
        
        <div className="hidden md:flex items-center gap-3 px-2">
          <img 
            src="public/img/img3.jpg" 
            alt="Profile" 
            className="w-10 h-10 rounded-xl shadow-sm border border-yellow-100"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-black text-gray-800 truncate">Admin Jagoan</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Owner</p>
          </div>
        </div>

        <button className="flex items-center gap-4 p-4 text-gray-400 hover:text-red-600 transition-all w-full text-left rounded-2xl hover:bg-red-50 group">
          <div className="w-6 text-center">
            <i><FaSignOutAlt /></i>
          </div>
          <span className="hidden md:block font-bold text-sm">Keluar</span>
        </button>
      </div>

    </div>
  );
}