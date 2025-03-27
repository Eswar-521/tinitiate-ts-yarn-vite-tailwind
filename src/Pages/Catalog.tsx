import { useState } from "react";
import { useCart } from "../Context/CartContext"; // Import Cart Context

const Catalog = () => {
  const { addToCart } = useCart(); // Use cart context
  const [search, setSearch] = useState("");

  const products = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));

  return (
    
    <div className="p-6">
      <h2>Catalog Page </h2> 
      <br></br>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-80 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700"
              >
                Buy Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Catalog;
