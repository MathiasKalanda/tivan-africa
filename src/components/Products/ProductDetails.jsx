import { useState } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-64 object-cover rounded-md"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-200 px-3 py-1 rounded-l"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <p className="text-lg font-semibold mb-4">
          Total: ${(product.price * quantity).toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
