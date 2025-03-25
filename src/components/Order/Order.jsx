import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const formatRupiah = (angka) => {
  return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState(""); // Pilihan pembayaran
  const [showPopup, setShowPopup] = useState(false); // Pop-up "Terima Kasih"
  const navigate = useNavigate(); // Gunakan useNavigate

  useEffect(() => {
    const storedCart = localStorage.getItem("cartSummary");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "QRIS") return; // Cegah konfirmasi jika QRIS

    localStorage.removeItem("cartSummary"); // Hapus keranjang setelah checkout
    setCartItems([]);
    setShowPopup(true); // Tampilkan pop-up
  };

  return (
    <div className="container py-20">
      {/* Header */}
      <div className="flex justify-center mb-10" data-aos="fade-down">
        <div className="relative">
          <div className="absolute inset-0 bg-[#00CED1] rounded-lg transform rotate-1 shadow-lg"></div>
          <h1 className="relative text-4xl font-bold px-8 py-4 bg-[#00CED1] rounded-lg text-white shadow-md">
            Formulir Pemesanan
          </h1>
        </div>
      </div>

      {/* Ringkasan Pesanan */}
      {cartItems.length > 0 && (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg mb-6" data-aos="zoom-in">
          <h2 className="text-xl font-semibold mb-4">Pesanan Anda</h2>
          <ul className="space-y-3">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>
                  {item.name} x {item.qty}
                </span>
                <span className="text-[#0f766e] font-semibold">
                  {formatRupiah(item.qty * item.price)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">
            Total:{" "}
            {formatRupiah(
              cartItems.reduce((total, item) => total + item.qty * item.price, 0)
            )}
          </p>
        </div>
      )}

      {/* Formulir Pemesanan */}
      {cartItems.length > 0 && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
          data-aos="zoom-in"
        >
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Nomor Telepon</label>
            <input
              type="text"
              placeholder="0812xxxxxxx"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Pesanan</label>
            <textarea
              placeholder="Tulis detail tambahan..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
              rows="4"
            ></textarea>
          </div>

          {/* Pilihan Metode Pembayaran */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Metode Pembayaran</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Pilih Metode Pembayaran</option>
              <option value="QRIS">QRIS</option>
              <option value="COD">Cash On Delivery (COD)</option>
            </select>
          </div>

          {/* Jika QRIS dipilih, tampilkan QR Code */}
          {paymentMethod === "QRIS" && (
            <div className="text-center mb-6">
              <p className="text-gray-700 font-semibold">Silakan scan QRIS di bawah:</p>
              <img
                src="/public/qrcode.png"
                alt="QRIS Payment"
                className="w-40 h-40 mx-auto my-4"
              />
              <p className="text-red-600 font-semibold">
                Konfirmasi pesanan akan aktif setelah pembayaran diterima.
              </p>
            </div>
          )}

          {/* Tombol Kirim Pesanan */}
          <button
            type="submit"
            className={`w-full text-white py-3 rounded-lg font-semibold transition-transform duration-200 ${
              paymentMethod === "QRIS"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00CED1] hover:scale-105 active:scale-95"
            }`}
            disabled={paymentMethod === "QRIS"} // Tombol mati jika QRIS
          >
            Konfirmasi Pesanan
          </button>
        </form>
      )}

      {/* Pop-up "Terima Kasih" dengan Pilihan */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Terima Kasih!</h2>
            <p className="mt-2 text-gray-600">Pesanan Anda telah berhasil dikonfirmasi.</p>
            <p className="mt-2 text-gray-600">Mohon Tunggu Barang Akan di Kirim!!!</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/"); // Kembali ke halaman home
                }}
                className="bg-[#00CED1] text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                Kembali ke Home
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/cart");
                }}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                Belanja Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
