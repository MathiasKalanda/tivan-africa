import { Link } from "@tanstack/react-router";

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

const ProductPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <Link
            to={`/product/${product.id}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Buy
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
