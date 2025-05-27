import { createFileRoute, useParams } from "@tanstack/react-router";
import HoneyDetails from "../../components/ProductsDetails/HoneyDetails";
import ButterDetails from "../../components/ProductsDetails/ButterDetails";
import GheeDetails from "../../components/ProductsDetails/GheeDetails";
import OilDetails from "../../components/ProductsDetails/OilDetails";
import CheeseDetails from "../../components/ProductsDetails/CheeseDetails";

const productDetailMap = {
  "honey-details": HoneyDetails,
  "butter-details": ButterDetails,
  "ghee-details": GheeDetails,
  "oil-details": OilDetails,
  "cheese-details": CheeseDetails,
};

export const Route = createFileRoute("/productDetails/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = useParams({ strict: false });

  const ProductComponent = productDetailMap[slug];

  if (!ProductComponent) {
    return <div className="p-8 text-red-600">Product not found: {slug}</div>;
  }
  return (
    <div>
      {" "}
      <ProductComponent />
    </div>
  );
}
