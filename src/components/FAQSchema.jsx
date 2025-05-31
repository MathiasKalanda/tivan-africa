import { Helmet } from "react-helmet";

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Tivan honey organic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tivan honey is 100% organic and sourced from Ugandan farms.",
        },
      },
      {
        "@type": "Question",
        name: "What is the shelf life of Tivan ghee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tivan ghee lasts up to 1 year when stored in a cool dry place.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default FAQSchema;
