import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-blue-500 font-semibold mt-2">${price}</p>
    </div>
  );
};

export default ProductCard;
