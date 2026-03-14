import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../components/HomePage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HomePage />
      {/* /productDetails/oil-details */}
    </div>
  );
}
