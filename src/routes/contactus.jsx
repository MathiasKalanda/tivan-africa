import { createFileRoute } from "@tanstack/react-router";
import ContactUs from "../components/ContactUs";

export const Route = createFileRoute("/contactus")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
