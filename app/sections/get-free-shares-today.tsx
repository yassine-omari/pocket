import React from "react";
import Section from "../components/Section";
import Div from "../components/Div";
import FeatureCircle from "../components/icons/features/FeatureCircle";
import AppStore from "../components/icons/ui/AppStore";

const GetFreeSharesToday = () => {
  return (
    <Section
      bg="gray"
      className="sm:py-28! flex items-center justify-center relative overflow-hidden "
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <FeatureCircle spin={true} color="#fff" />
      </div>
      <Div className="relative">
        <div className="mx-auto max-w-md sm:text-center ">
          <h1 className="sm:text-[40px] text-[32px] leading-12 tracking-tight font-medium  text-white">
            Get your first tips today
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#D4D4D4]">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p>
          <div className="flex justify-center mt-8">
            <AppStore
              bg="bg-white"
              text="text-gray-900"
              hover="hover:bg-gray-50"
            />
          </div>
        </div>
      </Div>
    </Section>
  );
};

export default GetFreeSharesToday;
