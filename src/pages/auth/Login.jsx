import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notesAPI } from "../../services/notesAPI"; // Import service API terpusat Anda
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Reset error setiap kali tombol submit diklik

        try {
            // 🚨 GANTI 'users' di bawah ini jika nama tabel kustom Anda di Supabase berbeda
            const namaTabelSupabase = "users"; 

            // Memanggil fungsi loginUser dari notesAPI
            const data = await notesAPI.loginUser(
                namaTabelSupabase, 
                dataForm.email, 
                dataForm.password
            );

            // Jika Supabase mengembalikan data di dalam array, artinya email & password COCOK
            if (data && data.length > 0) {
                const userActive = data[0];
                
                // Simpan data login user ke dalam LocalStorage sebagai session sederhana
                localStorage.setItem("user_session", JSON.stringify(userActive));

                // Alihkan halaman ke dashboard
                navigate("/dashboard");
            } else {
                // Jika array kosong ([]), berarti records tidak ditemukan
                setError("Email atau password salah!");
            }

        } catch (err) {
            console.error("Login Error:", err);
            if (err.response) {
                setError(`Error Server: ${err.response.data.message || "Gagal melakukan verifikasi"}`);
            } else {
                setError("Network Error: Periksa koneksi internet Anda atau pastikan BASE URL Supabase sudah benar.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            {/* Logo Restoran / Judul */}
            <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mt-1">Welcome Back 👋</p>
            </div>

            {/* Alert Box Menampilkan Pesan Error */}
            {error && (
                <div className="bg-red-100 border border-red-200 mb-5 p-4 text-sm font-medium text-red-700 rounded-xl flex items-center shadow-sm">
                    <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg flex-shrink-0" />
                    <span>{error}</span>
                </div>
            )}

            {/* Alert Box Menampilkan Status Loading */}
            {loading && (
                <div className="bg-gray-50 border border-gray-200 mb-5 p-4 text-sm rounded-xl text-gray-600 flex items-center shadow-sm">
                    <ImSpinner2 className="me-2 animate-spin text-green-500 text-lg" />
                    Memverifikasi akun, mohon tunggu...
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email" 
                        value={dataForm.email}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 disabled:opacity-60"
                        placeholder="Masukkan email Anda"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password" 
                        value={dataForm.password}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 disabled:opacity-60"
                        placeholder="Masukkan password Anda"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-green-200 transition duration-300 active:scale-[0.98] transform ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

        </div>
    );
}