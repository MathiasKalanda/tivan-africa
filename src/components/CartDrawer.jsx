import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";

const CartDrawer = ({ handleCart }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const message = cart
    .map(
      (item) => `
🛒 ${item.name}
Qty: ${item.count} -- ${item.quantity}
Price: UGX ${item.price.toLocaleString()}
------------------------------
`
    )
    .join("\n");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all customer details.");
      return;
    }

    setSending(true);
    setError("");

    // Generate order data
    const order_id = Math.random().toString(36).substring(2, 10).toUpperCase();
    const shippingCost = 0;
    const tax = 0;
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    const total = subtotal + shippingCost + tax;

    const templateParams = {
      order_id,
      // units :
      message,
      costShipping: shippingCost.toLocaleString(),
      costTax: tax.toLocaleString(),
      costTotal: total.toLocaleString(),
      customer_name: form.name, //working
      customer_email: form.email, //working
      customer_phone: form.phone, //working
      email: "muyombakalanda1@gmail.com", //working
      price: subtotal, //working
    };

    emailjs
      .send(
        "service_09yt9fb", // Your actual EmailJS service ID
        "template_x01uy6t", // Your actual template ID
        templateParams,
        "gxWPrcj2IO22HzVmt" // Your actual public key
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setForm({ name: "", email: "", phone: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSending(false);
        setError("Failed to send order. Please try again.");
      });
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={handleCart}>
          <MdClose size={24} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">Your cart is empty</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex gap-3 items-center border-b pb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.quantity} - UGX {item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item)}
                    className="ml-3 text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4 space-y-3">
          <h3 className="text-right font-bold text-lg">
            Total: UGX {totalPrice.toLocaleString()}
          </h3>

          {/* Customer Info Form */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <button
            className="bg-orange-700 text-white text-center py-2 rounded-xl w-full"
            onClick={sendEmail}
            disabled={sending}
          >
            {sending ? "Sending..." : "Submit Order"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      )}

      {success && (
        <p className="text-green-600 text-center mt-2">
          Order sent successfully!
        </p>
      )}
    </div>
  );
};

export default CartDrawer;
