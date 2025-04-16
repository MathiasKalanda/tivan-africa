import React from "react";

const HoneyGallery = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
      {/* Image 1 */}
      <div className="col-span-2 row-span-2">
        <img
          src="/oil7.jpg"
          alt="Oil"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Image 2 */}
      <div className="col-span-2 row-span-1">
        <img
          src="/Organic.jpg"
          alt="Africa"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Image 3 */}
      <div className="col-span-2 row-span-1">
        <img
          src="/oil3.jpg"
          alt="Butter"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* <div className="col-span-4 row-span-1">
        <img
          src="/fry.jpg"
          alt="Honey"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div> */}
    </div>
  );
};

export default HoneyGallery;
