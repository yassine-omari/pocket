import Faqs from "../sections/faqs";
import Features from "../sections/Features";
import GetFreeSharesToday from "../sections/get-free-shares-today";
import Hero from "../sections/Hero";
import Pricing from "../sections/pricing";
import Reviews from "../sections/Reviews";
import SecondaryFeatures from "../sections/secondary-features";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <SecondaryFeatures />
      <GetFreeSharesToday />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  );
};

export default Home;