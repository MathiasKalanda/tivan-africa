import { createFileRoute } from "@tanstack/react-router";
import CartDrawer from "../components/CartDrawer";
import { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export const Route = createFileRoute("/order")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="mt-14 h-120">
      <div className="flex flex-row mt-24 scroll-0">
        {" "}
        <h1 className="">
          {isOpen ? <span>Open</span> : <span>Close</span>} Order
        </h1>
        <div className="">
          {isOpen ? (
            <button onClick={handleOpen}>
              <BiArrowToRight size={24} />
            </button>
          ) : (
            <button onClick={handleOpen}>
              <BiArrowToLeft size={24} />
            </button>
          )}
        </div>
      </div>

      {isOpen ? <CartDrawer /> : ""}
    </div>
  );
}
