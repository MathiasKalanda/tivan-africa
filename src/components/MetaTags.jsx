import React from "react";
import { Helmet } from "react-helmet";

function MetaTags() {
  return (
    <div>
      {" "}
      <Helmet>
        <meta
          property="og:title"
          content="Tivan Africa | Organic Honey, Ghee, Castor Oil & More"
        />
        <meta
          property="og:description"
          content="Shop premium Ugandan natural products including honey, ghee, butter, and castor oil. 100% organic and farm-fresh."
        />
        <meta property="og:url" content="https://tivan.africa" />
        <meta
          property="og:image"
          content="https://tivan.africa/images/preview.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tivan Africa | Organic Honey, Ghee, Castor Oil & More"
        />
        <meta
          name="twitter:description"
          content="Explore Tivan's range of farm-fresh Ugandan products including raw honey, castor oil, and more."
        />
        <meta
          name="twitter:image"
          content="https://tivan.africa/images/preview.jpg"
        />
      </Helmet>
    </div>
  );
}

export default MetaTags;
