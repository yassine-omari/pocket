import React from "react";
import Section from "../components/Section";
import Div from "../components/Div";
import FeatureIcon1 from "../components/icons/FeatureIcon1";
import FeatureIcon2 from "../components/icons/FeatureIcon2";
import FeatureIcon3 from "../components/icons/FeatureIcon3";
import PhoneFrame from "../components/PhoneFrame";
import FeatureCircle from "../components/icons/FeatureCircle";
import FeaturesCarousel from "../components/FeaturesCarousel";
import FeatureScreen from "../components/FeatureScreen";
import FeaturesTabs from "../components/FeaturesTabs";

const content1 = [
  { feild: "Full name", placeholder: "Albert H. Wiggin" },
  { feild: "Email address", placeholder: "awiggin@chase.com" },
];
const content3 = [
  { label: "Number of shares", value: "100" },
  { label: "Current market price", value: "$34.28", icon: true },
  { label: "Estimated cost", value: "$3,428.00" },
];
const content2 = [
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.982 14.509c.002.005.006.01.007.015a.316.316 0 0 1 .011.082v4.293a.304.304 0 0 1-.043.156.32.32 0 0 1-.119.115l-3.709 2.075v4.112a.305.305 0 0 1-.043.157.32.32 0 0 1-.119.114l-7.742 4.33a.286.286 0 0 1-.056.023l-.022.008a.33.33 0 0 1-.18-.005l-.01-.005c-.018-.006-.036-.011-.053-.021l-7.742-4.33a.32.32 0 0 1-.119-.115.304.304 0 0 1-.043-.156v-12.88a.33.33 0 0 1 .01-.08c.004-.01.01-.018.012-.027l.01-.027a.158.158 0 0 1 .011-.022c.006-.01.015-.018.023-.028.009-.012.017-.025.028-.036.01-.01.02-.016.031-.024.012-.009.023-.019.036-.026l3.871-2.165a.33.33 0 0 1 .322 0l3.872 2.165c.013.007.024.017.036.026l.01.008c.008.005.015.01.021.016a.175.175 0 0 1 .021.025l.008.011.022.028c.008.015.014.032.02.049l.006.01.006.016a.307.307 0 0 1 .01.082v8.044l3.227-1.804v-4.112c0-.028.004-.055.011-.082.003-.01.008-.017.011-.026l.004-.01a.228.228 0 0 1 .017-.039.132.132 0 0 1 .013-.018.203.203 0 0 0 .01-.01c.009-.012.017-.025.028-.036l.015-.013.016-.01.019-.016a.126.126 0 0 1 .017-.011l3.871-2.165a.33.33 0 0 1 .322 0l3.871 2.165c.014.007.024.018.036.026l.012.008.02.016a.162.162 0 0 1 .02.026l.009.01.008.01c.005.006.01.012.013.018a.254.254 0 0 1 .018.04l.003.009.005.01Zm-15.138 8.717 3.22 1.77 7.094-3.933-3.223-1.803-7.091 3.966Zm10.64-2.704v-3.57l-3.226-1.804v3.57l3.225 1.804Zm3.547-5.916-3.225-1.803-3.224 1.803 3.224 1.803 3.225-1.803Zm-14.515.218v7.863l3.226-1.805V13.02l-3.226 1.804Zm2.902-2.346-3.225-1.803-3.224 1.803 3.224 1.803 3.225-1.803Zm-3.547 2.347-3.226-1.805v12.155l7.098 3.97V25.54l-3.708-2.038h-.001l-.002-.002c-.013-.008-.024-.018-.035-.027a.28.28 0 0 0-.011-.007.133.133 0 0 1-.02-.015v-.001l-.019-.022a.452.452 0 0 0-.008-.011l-.016-.02a.086.086 0 0 1-.008-.01v-.002a.123.123 0 0 1-.013-.027l-.005-.012-.008-.016a.115.115 0 0 1-.007-.02.18.18 0 0 1-.005-.033l-.002-.013a.293.293 0 0 0-.002-.013l-.002-.022v-8.405Zm4.516 10.715v3.605l7.096-3.969v-3.572l-7.096 3.935Zm7.742-5.019 3.226-1.804v-3.57l-3.226 1.805v3.57Z"
        />
      </svg>
    ),
    bg: "#F9322C",
    name: "Laravel",
    number: "4,098.01",
    percentage: "+4.98%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5 8 12 11.692v12l3.5 1.231v3.385L26 32V12.615l-3.5 1.231V8Zm-5.833 17.334 5.833 2.05v-12.24l2.333-.82v15.968l-8.166-2.87v-2.088Z"
        />
      </svg>
    ),
    bg: "#5A67D8",
    name: "Tuple",
    number: "5,451.10",
    percentage: "-3.38%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path d="M20 32c-6.617 0-12-5.383-12-12S13.383 8 20 8s12 5.383 12 12-5.383 12-12 12Zm0-22.4C14.267 9.6 9.6 14.266 9.6 20S14.267 30.4 20 30.4c5.734 0 10.4-4.666 10.4-10.4S25.734 9.6 20 9.6Z" />
        <path d="M19.434 27.749c.15.15.354.234.566.235.433 0 .8-.368.8-.8V12.815a.8.8 0 0 0-1.6 0v14.368c0 .212.084.415.234.565ZM12.833 20.8h3.833a.802.802 0 0 0 .802-.8.8.8 0 0 0-.801-.8h-3.834c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8ZM23.333 20.8h3.85c.433 0 .783-.35.783-.8a.799.799 0 0 0-.8-.8h-3.833c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8Z" />
      </svg>
    ),
    bg: "#2A5B94",
    name: "Transistor",
    number: "4,098.41",
    percentage: "+6.25%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path d="M22.16 19 26 13H14l3.84 6" fill="none" />
        <path d="M25 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
      </svg>
    ),
    bg: "#3320A7",
    name: "Diageo",
    number: "250.65",
    percentage: "+1.25%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path d="m26.068 10.555-11.49 13.089L12 21.089 23.489 8l2.58 2.555ZM28 18.91 16.512 32l-2.579-2.555 11.489-13.089L28 18.911Z" />
      </svg>
    ),
    bg: "#2A3034",
    name: "StaticKit",
    number: "250.65",
    percentage: "-3.38%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.177 27.293c0 1.921-.644 2.707-2.398 2.707H12.22c-1.754 0-2.397-.786-2.397-2.707v-3.741c0-1.805-.837-2.824-1.642-3.291a.385.385 0 0 1-.133-.143.403.403 0 0 1 .133-.526c.837-.551 1.642-1.704 1.642-3.241v-3.677c0-2.072.547-2.674 2.3-2.674h15.754c1.754 0 2.3.602 2.3 2.674v3.675c0 1.537.805 2.69 1.641 3.24.243.168.243.52 0 .67-.804.484-1.64 1.503-1.64 3.29v3.743h-.001Zm-14.739-2.455c1.271 1.152 2.64 1.737 4.522 1.737 2.96 0 4.891-1.537 4.891-4.026 0-2.637-2.3-3.31-4.17-3.856-1.282-.375-2.363-.691-2.363-1.54 0-.551.564-1.086 1.513-1.086.917 0 1.674.2 2.397.584.242.117.467.2.676.2.306 0 .547-.15.756-.45l.29-.451a.955.955 0 0 0 .161-.55c0-.336-.161-.67-.402-.837-.966-.635-2.27-1.17-4.039-1.17-2.51 0-4.44 1.37-4.44 3.826 0 2.746 2.349 3.443 4.23 4h.001c1.255.372 2.3.681 2.3 1.497 0 .785-.707 1.17-1.592 1.17a5.19 5.19 0 0 1-2.992-.92c-.274-.183-.532-.3-.805-.3-.242 0-.451.117-.644.368l-.387.517a.888.888 0 0 0-.192.585c0 .25.08.501.29.702Z"
        />
      </svg>
    ),
    bg: "#0EA5E9",
    name: "Statamic",
    number: "5,040.85",
    percentage: "-3.11%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.05 9c2.307 0 4.177 1.885 4.177 4.21a4.21 4.21 0 0 1-2.762 3.964l3.366 6.057h2.304c.355 0 .642.29.642.647a.645.645 0 0 1-.642.647H7.142a.645.645 0 0 1-.642-.647c0-.358.288-.647.643-.647h2.304l5.994-10.747a.641.641 0 0 1 1.097-.036l3.444 5.32 1.071-1.627a4.214 4.214 0 0 1-1.178-2.93c0-2.326 1.87-4.211 4.176-4.211Zm-3.304 9.948 2.772 4.283h3.84l-4.317-7.769-2.295 3.486Zm1.239 4.283-5.944-9.183-5.121 9.183h11.065Zm5.038-10.02a2.995 2.995 0 0 1-2.159 2.883l-1.216-2.19a.64.64 0 0 0-1.096-.04l-.811 1.232a3 3 0 0 1-.663-1.885c0-1.655 1.332-2.997 2.973-2.997 1.641 0 2.972 1.341 2.972 2.997Z"
        />
        <path d="M12.069 26.469c-.354 0-.641.289-.641.646 0 .358.287.646.64.646h14.139c.354 0 .641-.29.641-.646a.644.644 0 0 0-.64-.646h-14.14Zm4.928 3.236a.645.645 0 0 0-.642.648c0 .357.288.647.642.647h4.282c.355 0 .643-.29.643-.647a.645.645 0 0 0-.643-.648h-4.282Z" />
      </svg>
    ),
    bg: "#16A34A",
    name: "Mirage",
    number: "140.44",
    percentage: "+9.09%",
  },
  {
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-10 w-10"
      >
        <path d="M15 26v-5.25m0 0V16a2 2 0 0 1 2-2h4.21c.968 0 1.37 1.24.587 1.809L15 20.75Zm0 0L25 26" />
      </svg>
    ),
    bg: "#8D8D8D",
    name: "Reversable",
    number: "550.60",
    percentage: "-1.25%",
  },
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
