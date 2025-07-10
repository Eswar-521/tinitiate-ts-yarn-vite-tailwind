import { useState } from "react";
import { FaShoppingCart, FaTrashAlt, FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 99.99, qty: 1 },
    { id: 2, name: "Bluetooth Speaker", price: 49.99, qty: 2 },
  ]);

  const handleRemove = (id: number) => {
    if (confirm("Are you sure you want to remove this item?")) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleClearCart = () => {
    if (confirm("Clear all items in your cart?")) {
      setCartItems([]);
    }
  };

  const handleIncrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="min-h-screen bg-amber-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-8 border-2 border-amber-600">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-8 flex items-center justify-center gap-2">
          <FaShoppingCart className="text-amber-600" /> Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-amber-50 border border-amber-300 rounded p-4 shadow hover:bg-amber-100 transition"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start w-full sm:w-auto">
                  <div className="flex flex-col items-center sm:items-start">
                    <h2 className="font-bold text-amber-800">{item.name}</h2>
                    <p className="text-amber-700">
                      ${item.price.toFixed(2)} x {item.qty} ={" "}
                      <strong>${(item.price * item.qty).toFixed(2)}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="bg-amber-600 text-white px-2 py-1 rounded hover:bg-amber-700"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2 font-semibold">{item.qty}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="bg-amber-600 text-white px-2 py-1 rounded hover:bg-amber-700"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-amber-600 hover:text-red-600 mt-4 sm:mt-0"
                  title="Remove item"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 border-t pt-4 text-amber-800">
              <span className="font-semibold text-xl">Total:</span>
              <span className="font-bold text-2xl">${total.toFixed(2)}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <button
                onClick={handleClearCart}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition"
              >
                <FaTimes /> Clear Cart
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded transition text-lg">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-amber-700 font-semibold text-xl mt-10">
            Your cart is empty.
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
