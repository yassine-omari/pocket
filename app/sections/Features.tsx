import React from "react";
import Section from "../components/Section";
import Div from "../components/Div";
import FeatureIcon1 from "../components/icons/features/FeatureIcon1";
import FeatureIcon2 from "../components/icons/features/FeatureIcon2";
import FeatureIcon3 from "../components/icons/features/FeatureIcon3";
import PhoneFrame from "../components/PhoneFrame";
import FeatureCircle from "../components/icons/features/FeatureCircle";
import FeaturesCarousel from "../components/FeaturesCarousel";
import FeatureScreen from "../components/FeatureScreen";
import FeaturesTabs from "../components/FeaturesTabs";
import Laravel from "../components/icons/brands/Laravel";
import Tuple from "../components/icons/brands/Tuple";
import Transistor from "../components/icons/brands/Transistor";
import Diageo from "../components/icons/brands/Diageo";
import StaticKit from "../components/icons/brands/StaticKit";
import Statamic from "../components/icons/brands/Statamic";
import Mirage from "../components/icons/brands/Mirage";
import Reversable from "../components/icons/brands/Reversable";

const content1 = [
  { feild: "Full name", placeholder: "Albert H. Wiggin" },
  { feild: "Email address", placeholder: "awiggin@chase.com" },
];
const content2 = [
  { logo: <Laravel />, bg: "#F9322C", name: "Laravel", number: "4,098.01", percentage: "+4.98%" },
  { logo: <Tuple />, bg: "#5A67D8", name: "Tuple", number: "5,451.10", percentage: "-3.38%" },
  { logo: <Transistor />, bg: "#2A5B94", name: "Transistor", number: "4,098.41", percentage: "+6.25%" },
  { logo: <Diageo />, bg: "#3320A7", name: "Diageo", number: "250.65", percentage: "+1.25%" },
  { logo: <StaticKit />, bg: "#2A3034", name: "StaticKit", number: "250.65", percentage: "-3.38%" },
  { logo: <Statamic />, bg: "#0EA5E9", name: "Statamic", number: "5,040.85", percentage: "-3.11%" },
  { logo: <Mirage />, bg: "#16A34A", name: "Mirage", number: "140.44", percentage: "+9.09%" },
  { logo: <Reversable />, bg: "#8D8D8D", name: "Reversable", number: "550.60", percentage: "-1.25%" },
];
const content3 = [
  { label: "Number of shares", value: "100" },
  { label: "Current market price", value: "$34.28", icon: true },
  { label: "Estimated cost", value: "$3,428.00" },
];

const FeaturesData = [
  {
    title: "Invite friends for better returns",
    text: "For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.",
    header: {
      title: "Invite people",
      subheading: (
        <>
          Get tips <span className="text-white">5s sooner</span> for every
          invite.
        </>
      ),
    },
    icon: <FeatureIcon1 />,
    content: (
      <div className="py-6 px-4 flex flex-col justify-center">
        <div className="flex flex-col gap-6">
          {content1.map((content) => (
            <div key={content.feild} className="flex flex-col">
              <span className="text-sm leading-6 text-gray-500">
                {content.feild}
              </span>
              <span className="mt-2 pb-2 text-sm leading-6 text-gray-900 border-b border-b-gray-200">
                {content.placeholder}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-cyan-500 px-3 py-2 rounded-lg text-sm leading-6 text-center font-semibold text-white">
          Invite person
        </button>
      </div>
    ),
  },
  {
    title: "Notifications on stock dips",
    text: "Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.",
    header: { title: "Stocks", subheading: "March 9, 2022" },
    icon: <FeatureIcon2 />,
    content: (
      <div className="divide-y divide-gray-100">
        {content2.map((content) => (
          <div key={content.name} className="flex items-center gap-4 px-4 py-3">
            <div
              className="flex-none rounded-full"
              style={{ backgroundColor: content.bg }}
            >
              {content.logo}
            </div>
            <div className="flex-auto text-sm leading-6 text-gray-900">
              {content.name}
            </div>
            <div className="flex-none text-right">
              <div className="text-sm font-medium leading-6 text-gray-900">
                {content.number}
              </div>
              <div
                className={`text-xs/5 leading-5 ${
                  content.percentage.startsWith("-")
                    ? "text-gray-500"
                    : "text-cyan-500"
                }`}
              >
                {content.percentage}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Invest what you want",
    text: "We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.",
    header: {
      title: "Buy $LA",
      subheading: (
        <>
          <span className="text-white">$34.28</span> per share
        </>
      ),
    },
    icon: <FeatureIcon3 />,
    content: (
      <div className="px-4 py-6">
        <div className="space-y-4">
          {content3.map((row) => (
            <div
              key={row.label}
              className="flex justify-between border-b border-gray-100 pb-4"
            >
              <div className="text-sm leading-6 text-gray-500">{row.label}</div>
              <div className="text-sm leading-6 font-semibold text-gray-900">
                {row.icon ? (
                  <div className="flex items-center">
                    {row.value}
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm leading-6 font-semibold text-white">
          Buy shares
        </div>
      </div>
    ),
  },
];

const Features = () => {
  return (
    <Section bg="gray">
      <Div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl ">
          <h1 className="text-[32px] leading-12 font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h1>
          <p className="mt-2 text-lg leading-8  text-[#A1A1A1]">
            Pocket was built for investors like you who play by their own rules
            and aren’t going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has
            it.
          </p>
        </div>
      </Div>
      <div className="mt-16 md:hidden">
        <FeaturesCarousel>
          {FeaturesData.map((feature) => (
            <div
              key={feature.title}
              className="w-full flex-none snap-center px-4 sm:px-6 "
            >
              <div className="relative transform overflow-hidden rounded-2xl bg-[#262626] px-5 py-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <FeatureCircle />
                </div>
                <PhoneFrame>
                  <FeatureScreen header={feature.header} content={feature.content} />
                </PhoneFrame>
                <div className="absolute inset-x-0 bottom-0 bg-[#262626]/95 p-6 backdrop-blur-sm sm:p-10">
                  {feature.icon}
                  <h3 className="mt-6 text-sm font-semibold leading-6  text-white sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6  text-gray-400  ">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </FeaturesCarousel>
      </div>
      <Div className="hidden md:mt-20 md:block">
        <FeaturesTabs features={FeaturesData} />
      </Div>
    </Section>
  );
};

export default Features;
