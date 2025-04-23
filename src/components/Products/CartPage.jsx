import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center text-gray-600">Your cart is empty</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-3 py-1 rounded-l"
              >
                -
              </button>
              <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-6">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <Link
          to="/order"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Confirm Order
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
