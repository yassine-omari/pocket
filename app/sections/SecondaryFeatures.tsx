import React from "react";
import Section from "../components/Section";
import Div from "../components/Div";
import SecondaryFeatureIcon1 from "../components/icons/secondary-features/SecondaryFeatureIcon1";
import SecondaryFeatureIcon2 from "../components/icons/secondary-features/SecondaryFeatureIcon2";
import SecondaryFeatureIcon3 from "../components/icons/secondary-features/SecondaryFeatureIcon3";
import SecondaryFeatureIcon4 from "../components/icons/secondary-features/SecondaryFeatureIcon4";
import SecondaryFeatureIcon5 from "../components/icons/secondary-features/SecondaryFeatureIcon5";
import SecondaryFeatureIcon6 from "../components/icons/secondary-features/SecondaryFeatureIcon6";

const secondaryfeaturesdata = [
  {
    logo: <SecondaryFeatureIcon1 />,
    title: "Invest any amount",
    text: "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    logo: <SecondaryFeatureIcon2 />,
    title: "Build a balanced portfolio",
    text: "Invest in different industries to find the most opportunities to win huge.",
  },
  {
    logo: <SecondaryFeatureIcon3 />,
    title: "Trade in real-time",
    text: "Get insider tips on big stock moves and act on them within seconds.",
  },
  {
    logo: <SecondaryFeatureIcon4 />,
    title: "Profit from your network",
    text: "Invite new insiders to get tips faster and beat even other Pocket users.",
  },
  {
    logo: <SecondaryFeatureIcon5 />,
    title: "Encrypted and anonymized",
    text: "Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.",
  },
  {
    logo: <SecondaryFeatureIcon6 />,
    title: "Portfolio tracking",
    text: "Watch your investments grow exponentially, leaving other investors in the dust.",
  },
];

const SecondaryFeatures = () => {
  return (
    <Section>
      <Div className="flex flex-col items-center justify-center gap-16 sm:gap-20">
        <div className="max-w-2xl sm:text-center flex flex-col sm:items-center justify-center gap-2">
          <h1 className="text-[32px] leading-12 font-medium tracking-tight text-black">
            Now is the time to build your portfolio.
          </h1>
          <p className="text-lg leading-8  text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <div className="grid max-w-[640px] grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:max-w-none text-sm leading-6">
          {
            secondaryfeaturesdata.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-200 p-8">
                {feature.logo}
                <h3 className="mt-6 font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-700 ">{feature.text}</p>
              </div>
            ))
          }
        </div>
      </Div>
    </Section>
  );
};

export default SecondaryFeatures;
