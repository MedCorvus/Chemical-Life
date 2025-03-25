import React, { useState } from "react";

const formatRupiah = (angka) => {
  return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Paracetamol",
      qty: 0,
      price: 10000,
      image: "/paracetamol.png",
    },
    {
      id: 2,
      name: "Amoxicillin",
      qty: 0,
      price: 15000,
      image: "/Amoxicillin.png",
    },
    {
      id: 3,
      name: "Omeprazole",
      qty: 0,
      price: 20000,
      image: "/Omeprazole.png",
    },
    {
      id: 4,
      name: "Bioderma",
      qty: 0,
      price: 50000,
      image: "/Bioderma.png",
    },
    {
      id: 5,
      name: "Chanca Piedra",
      qty: 0,
      price: 30000,
      image: "/Chanca Piedra.png",
    },
    {
      id: 6,
      name: "Cetyl Pure",
      qty: 0,
      price: 40000,
      image: "/Cetyl Pure.png",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    const selected = cart.filter((item) => item.qty > 0);
    if (selected.length === 0) {
      alert("Keranjang kosong! Silakan pilih obat terlebih dahulu.");
      return;
    }

    setSelectedItems(selected);
    setIsModalOpen(true);
  };

  return (
    <div className="container py-20">
      {/* HEADER */}
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl font-bold text-white px-6 py-2 bg-[#00CED1] rounded-xl shadow-lg">
          Keranjang Pembelian
        </h1>
      </div>

      {/* KERANJANG */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3 transform transition hover:scale-105 hover:shadow-md duration-300 bg-white/70 rounded-lg p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-[#0f766e] font-semibold italic tracking-wide text-sm">
                  {formatRupiah(item.price)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-[#00CED1] text-white px-3 rounded-full hover:scale-110 transition"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-[#00CED1] text-white px-3 rounded-full hover:scale-110 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}

        {/* Tombol Masuk Keranjang */}
        <button
          className="w-full mt-6 bg-gradient-to-r from-[#00CED1] to-[#20b2aa] text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          onClick={handleCheckout}
        >
          Masuk Keranjang
        </button>
      </div>

      {/* MODAL POP-UP */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Pesanan Anda</h2>
            <ul className="space-y-2">
              {selectedItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} x {item.qty}</span>
                  <span>{formatRupiah(item.qty * item.price)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-bold">
              <span>Total:</span>
              <span>
                {formatRupiah(
                  selectedItems.reduce(
                    (total, item) => total + item.qty * item.price,
                    0
                  )
                )}
              </span>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  localStorage.setItem(
                    "cartSummary",
                    JSON.stringify(selectedItems)
                  );
                  setIsModalOpen(false);
                  // Arahkan ke halaman order (gantilah "/order" dengan path yang benar)
                  window.location.href = "/Order";
                }}
                className="bg-[#00CED1] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
              >
                Lanjut ke Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
