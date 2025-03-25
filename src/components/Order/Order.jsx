import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const formatRupiah = (angka) => {
  return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartSummary");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "QRIS") return;

    localStorage.removeItem("cartSummary");
    setCartItems([]);
    setShowPopup(true);
  };

  return (
    <div className="container py-20">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold bg-[#00CED1] text-white px-8 py-4 rounded-lg shadow-md">
          Formulir Pemesanan
        </h1>
      </div>

      {/* Ringkasan Pesanan */}
      {cartItems.length > 0 && (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg mb-6">
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
        >
          {/* Nama */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan Nama Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Nomor Telepon</label>
            <input
              type="text"
              placeholder="0812xxxxxxx"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
              required
            />
          </div>


          {/* Alamat */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Alamat Lengkap</label>
            <textarea
              placeholder="Masukkan Alamat Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] resize-none"
              rows="3"
              required
            />
          </div>


          {/* Pilihan Metode Pembayaran */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Metode Pembayaran</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
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
                src="/qrcode.png"
                alt="QRIS Payment"
                className="w-40 h-40 mx-auto my-4"
              />
              <p className="text-red-600 font-semibold">
                Konfirmasi pesanan akan aktif setelah pembayaran diterima.
              </p>
            </div>
          )}

          {/* Tombol Konfirmasi */}
          <button
            type="submit"
            className={`w-full text-white py-3 rounded-lg font-semibold transition-transform duration-200 ${
              paymentMethod === "QRIS"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00CED1] hover:scale-105 active:scale-95"
            }`}
            disabled={paymentMethod === "QRIS"}
          >
            Konfirmasi Pesanan
          </button>

          {/* Tombol Kembali ke Cart */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => navigate("/cart")}
              type="button"
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Kembali ke Cart
            </button>
          </div>
        </form>
      )}

{/* Pop-up Sukses */}
{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">🎉 Terima Kasih!</h2>
      <p>Pesanan Anda telah berhasil dikonfirmasi.</p>
      
      <div className="mt-4 flex justify-center gap-4">
        {/* Tombol Kembali ke Beranda */}
        <button
          className="bg-[#00CED1] text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
          onClick={() => {
            setShowPopup(false);
            navigate("/");
          }}
        >
          Kembali ke Beranda
        </button>

        {/* Tombol Belanja Lagi */}
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
          onClick={() => {
            setShowPopup(false);
            navigate("/cart");
          }}>
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
