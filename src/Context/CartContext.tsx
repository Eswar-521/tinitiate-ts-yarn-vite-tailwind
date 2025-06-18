
// import { createContext, useState, useContext } from "react";
// import {cartItem, cartContextType} from "../types"

// // Create Cart Context
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]); // Store cart items

//   // Function to add items to cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   // Function to remove items from cart
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);



import { createContext, useState, useContext, ReactNode } from "react";
import { cartItem, cartContextType } from "../types";


const CartContext = createContext<cartContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<cartItem[]>([]);

  const addToCart = (product: cartItem) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
