import Image from "next/image";
import Button from "../components/Button";
import CircleBackground from "../components/CircleBackground";
import PhoneFrame from "../components/PhoneFrame";
import Play from "../components/icons/Play";
import AppStore from "../components/icons/AppStore";
import forbesLogo from "../components/icons/forbes.0lpzv4pv9yxsn.svg";
import techCrunchLogo from "../components/icons/techcrunch.0rn6w_tfz1z8z.svg";
import wiredLogo from "../components/icons/wired.0chs_~yy0xtca.svg";
import cnnLogo from "../components/icons/cnn.10vtt0p5hczsl.svg";
import bbcLogo from "../components/icons/bbc.07epgm.llucz3.svg";
import cbsLogo from "../components/icons/cbs.12x3nd~t3ab6z.svg";
import fastCompanyLogo from "../components/icons/fast-company.0do56qbyjazdn.svg";
import huffPostLogo from "../components/icons/huffpost.16d1thw3dovr6.svg";

const featuredIn = [
  { name: "Forbes", logo: forbesLogo },
  { name: "TechCrunch", logo: techCrunchLogo },
  { name: "Wired", logo: wiredLogo },
  { name: "CNN", logo: cnnLogo, className: "hidden xl:block" },
  { name: "BBC", logo: bbcLogo },
  { name: "CBS", logo: cbsLogo },
  { name: "Fast Company", logo: fastCompanyLogo },
  { name: "HuffPost", logo: huffPostLogo, className: "hidden xl:block" },
];

const Hero = () => {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-[40px] leading-12 font-medium tracking-tight text-gray-900">
              Invest at the perfect time.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              By leveraging insights from our network of industry insiders,
              you&rsquo;ll know exactly when to buy to maximize profit, and
              exactly when to sell to avoid painful losses.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStore />
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
                color="gray"
                className="py-1.5!"
              >
                <Play />
                <span className="ml-2.5">Watch the video</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <CircleBackground   />
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame />
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm leading-6 font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {featuredIn.map(({ name, logo, className }) => (
                <li key={name} className={`flex ${className ?? ""}`.trim()}>
                  <Image src={logo} alt={name} className="h-8 w-auto" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
