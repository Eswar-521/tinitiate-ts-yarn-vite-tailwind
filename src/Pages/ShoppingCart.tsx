import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const ShoppingCart = () => {
  // Dummy cart data
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, qty: 1 },
    { id: 2, name: "Bluetooth Speaker", price: 49.99, qty: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaShoppingCart className="inline-block mr-2 text-pink-600" />
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-pink-100 rounded p-4 shadow hover:shadow-lg transition"
              >
                <div>
                  <h2 className="font-bold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)} x {item.qty}</p>
                </div>
                <button className="text-pink-600 hover:text-pink-800 transition">
                  <FaTrashAlt />
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <span className="font-semibold text-xl">Total:</span>
              <span className="font-bold text-2xl text-gray-800">${total.toFixed(2)}</span>
            </div>

            <div className="text-center mt-6">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded transition text-lg">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
