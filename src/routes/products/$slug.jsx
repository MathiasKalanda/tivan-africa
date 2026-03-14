// src/routes/products/$slug.tsx
import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { GiHoneycomb } from "react-icons/gi";
import HoneyMoree from "../../components/MoreDetails/HoneyMoree";
import ButterMoree from "../../components/MoreDetails/ButterMoree";
import CheeseMoree from "../../components/MoreDetails/CheeseMoree";
import CowGheeMoree from "../../components/MoreDetails/CowGheeMoree";
import TivanOil from "../../components/MoreDetails/TivanOil";

const productComponentMap = {
  "natural-honey": HoneyMoree,
  "natural-butter": ButterMoree,
  "natural-cheese": CheeseMoree,
  "natural-cowghee": CowGheeMoree,
  "natural-tivanoil": TivanOil,
};

const productInfoMap = {
  "natural-honey": {
    name: "Natural Honey",
    category: "Honey",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
  },
  "natural-butter": {
    name: "Natural Butter",
    category: "Dairy",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
  "natural-cheese": {
    name: "Artisan Cheese",
    category: "Dairy",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
  },
  "natural-cowghee": {
    name: "Pure Cow Ghee",
    category: "Dairy",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50",
  },
  "natural-tivanoil": {
    name: "Castor Oil",
    category: "Oils",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
  },
};

export const Route = createFileRoute("/products/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = useParams({ strict: false });
  const ProductComponent = productComponentMap[slug];
  const productInfo = productInfoMap[slug] || {
    name: "Product",
    category: "Category",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
  };

  if (!ProductComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <GiHoneycomb className="text-amber-600" />
            <span className="text-amber-800 font-medium">Error</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-amber-700/80 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/productPage"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Navigation Bar */}
      <div className="relative bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/productPage"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Products</span>
            </Link>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${productInfo.color}`}
              ></div>
              <span className="text-amber-600 font-medium">
                {productInfo.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Component */}
      <div className="relative container mx-auto px-4 py-8">
        <ProductComponent />
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </div>
  );
}
