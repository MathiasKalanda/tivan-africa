// src/routes/products/$slug.tsx
import { createFileRoute, useParams } from "@tanstack/react-router";
import HoneyMoree from "../../components/MoreDetails/HoneyMoree";

const productComponentMap = {
  "natural-honey": HoneyMoree,

  // add more as needed
};

export const Route = createFileRoute("/products/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = useParams({ strict: false });

  const ProductComponent = productComponentMap[slug];

  if (!ProductComponent) {
    return <div className="p-8 text-red-600">Product not found: {slug}</div>;
  }

  return (
    <div className="p-8">
      <ProductComponent />
    </div>
  );
}
