import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Cart changed:", cart);
  }, [cart]);

  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    setCart((prevCart) => {
      const existing = prevCart.find(
        (i) => i.name === item.name && i.quantity === item.quantity
      );
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name && i.quantity === item.quantity
            ? { ...i, count: i.count + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, count: 1 }];
    });
  };

  const removeItem = (item) => {
    setCart((prevCart) =>
      prevCart.filter(
        (i) => !(i.name === item.name && i.quantity === item.quantity)
      )
    );
  };

  const increaseQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.name === item.name && i.quantity === item.quantity
          ? { ...i, count: i.count + 1 }
          : i
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.name === item.name && i.quantity === item.quantity
          ? { ...i, count: i.count > 1 ? i.count - 1 : 1 }
          : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
