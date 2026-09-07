"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import FeatureCircle from "./icons/FeatureCircle";
import PhoneFrame from "./PhoneFrame";

type Feature = {
  title: string;
  text: string;
  header: { title: string; subheading: ReactNode };
  icon: ReactNode;
  content: ReactNode;
};

type FeaturesTabsProps = {
  features: Feature[];
};

type CardCustom = { isForwards: boolean; changeCount: number };

const headerVariants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const slideIn = (changeCount: number) => ({
  y: "100%",
  zIndex: 0x7fffffff - changeCount,
  transition: { duration: 0.4 },
});

const settleOut = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  transition: { duration: 0.4 },
};

const cardVariants = {
  initial: ({ isForwards, changeCount }: CardCustom) =>
    isForwards ? slideIn(changeCount) : settleOut,
  animate: ({ changeCount }: CardCustom) => ({
    y: "0%",
    opacity: 1,
    scale: 1,
    zIndex: 1073741823.5 - changeCount,
    filter: "blur(0px)",
    transition: { duration: 0.4 },
  }),
  exit: ({ isForwards, changeCount }: CardCustom) =>
    isForwards ? settleOut : slideIn(changeCount),
};

const FeaturesTabs = ({ features }: FeaturesTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isForwards, setIsForwards] = useState(true);
  const [changeCount, setChangeCount] = useState(0);
  const active = features[activeIndex];

  const handleChange = (index: number) => {
    setChangeCount((count) => count + 1);
    setIsForwards(index > activeIndex);
    setActiveIndex(index);
  };

  const cardCustom: CardCustom = { isForwards, changeCount };

  return (
    <TabGroup
      vertical
      selectedIndex={activeIndex}
      onChange={handleChange}
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature) => (
          <Tab
            key={feature.title}
            className="group relative block w-full rounded-2xl p-8 text-left transition-colors hover:bg-[#262626]/30 focus:outline-none"
          >
            {({ selected }) => (
              <>
                {selected && (
                  <motion.div
                    layoutId="feature-tab-highlight"
                    className="absolute inset-0 rounded-2xl bg-[#262626]"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}
                <div className="relative">
                  {feature.icon}
                  <h3 className="mt-6 text-lg leading-8 font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1A1]">{feature.text}</p>
                </div>
              </>
            )}
          </Tab>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FeatureCircle spin />
        </div>
        <PhoneFrame>
          <div className="grid flex-auto grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
            <AnimatePresence custom={cardCustom} initial={false}>
              <motion.div
                key={`${active.title}-header`}
                variants={headerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative col-start-1 row-start-1 mt-6 px-4 text-white"
              >
                <h2 className="text-2xl leading-8 font-normal">{active.header.title}</h2>
                <p className="text-sm text-gray-500 leading-6 font-normal">
                  {active.header.subheading}
                </p>
              </motion.div>
              <motion.div
                key={`${active.title}-card`}
                custom={cardCustom}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative col-start-1 row-start-2 mt-6 h-full rounded-t-2xl bg-white"
              >
                {active.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </PhoneFrame>
      </div>
    </TabGroup>
  );
};

export default FeaturesTabs;
