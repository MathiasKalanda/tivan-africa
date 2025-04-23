import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    // Simulate sending email by storing order details
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orderDetails = {
      ...formData,
      cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };
    console.log("Order sent to email:", orderDetails);
    // Clear cart after submission
    localStorage.setItem("cart", "[]");
  };

  if (orderSubmitted) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Thank you, {formData.name}. Your order details have been sent to{" "}
          {formData.email}.
        </p>
        <p className="text-gray-600 mb-4">Total: ${total.toFixed(2)}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
