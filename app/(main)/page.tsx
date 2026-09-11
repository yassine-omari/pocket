import Features from "../sections/Features";
import GetFreeSharesToday from "../sections/get-free-shares-today";
import Hero from "../sections/Hero";
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
    </>
  );
};

export default Home;