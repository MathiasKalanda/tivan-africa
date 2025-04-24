import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../components/AboutUs";

export const Route = createFileRoute("/aboutus")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
