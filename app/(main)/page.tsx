import Features from "../sections/Features";
import GetFreeSharesToday from "../sections/get-free-shares-today";
import Hero from "../sections/Hero";
import SecondaryFeatures from "../sections/secondary-features";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <SecondaryFeatures />
      <GetFreeSharesToday />
    </>
  );
};

export default Home;