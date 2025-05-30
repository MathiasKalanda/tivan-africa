import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <WhatsApp />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
