import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Use cart context

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
