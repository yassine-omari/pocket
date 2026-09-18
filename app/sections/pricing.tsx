"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Div from "../components/Div";
import Section from "../components/Section";

type Billing = "monthly" | "annually";

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`h-6 w-6 flex-none ${className}`}>
    <path
      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
      fill="currentColor"
    />
    <circle
      cx="12"
      cy="12"
      r="8.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlanLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={`h-6 w-6 flex-none ${className}`}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
    />
  </svg>
);

const pricingData = [
  {
    plan: "Starter",
    logoClass: "fill-gray-300",
    pricingMonthly: "$0",
    pricingAnnually: "$0",
    text: "You’re new to investing but want to do it right. Get started for free.",
    button: "Get started for free",
    benefits: [
      "Commission-free trading",
      "Multi-layered encryption",
      "One tip every day",
      "Invest up to $1,500 each month",
    ],
    isVip: false,
  },
  {
    plan: "Investor",
    logoClass: "fill-gray-500",
    pricingMonthly: "$7",
    pricingAnnually: "$70",
    text: "You’ve been investing for a while. Invest more and grow your wealth faster.",
    button: "Subscribe",
    benefits: [
      "Commission-free trading",
      "Multi-layered encryption",
      "One tip every hour",
      "Invest up to $15,000 each month",
      "Basic transaction anonymization",
    ],
    isVip: false,
  },
  {
    plan: "VIP",
    logoClass: "fill-cyan-500",
    pricingMonthly: "$199",
    pricingAnnually: "$1,990",
    text: "You’ve got a huge amount of assets but it’s not enough. To the moon.",
    button: "Subscribe",
    benefits: [
      "Commission-free trading",
      "Multi-layered encryption",
      "Real-time tip notifications",
      "No investment limits",
      "Advanced transaction anonymization",
      "Automated tax-loss harvesting",
    ],
    isVip: true,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  return (
    <Section className="bg-[#F5F5F5] border-t border-gray-200">
      <Div className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col items-center max-w-[640px] text-center">
          <h1 className="text-[32px] leading-12 font-medium tracking-tight text-black">
            Flat pricing, no management fees.
          </h1>
          <p className="mt-2 text-lg leading-8  text-gray-600">
            Whether you’re one person trying to get ahead or a big firm trying
            to take over the world, we’ve got a plan for you.
          </p>
          <div className="mt-8 flex flex-row justify-center gap-1 rounded-lg border border-gray-200">
            {(["monthly", "annually"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className={`relative px-3 py-2.5 rounded-md text-sm font-medium capitalize transition-colors  ${
                  billing === option
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {billing === option && (
                  <motion.div
                    layoutId="pricing-toggle-highlight"
                    className={` absolute inset-0 bg-[#00B8DB] ${option === "monthly" ? "rounded-tl-md rounded-bl-md" : "rounded-br-md rounded-tr-md"} `}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}
                <span className="relative">{option}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start  gap-x-8 gap-y-10  lg:max-w-none lg:grid-cols-3">
          {pricingData.map((plan) => (
            <section
              key={plan.plan}
              className={`flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/10 ${
                plan.isVip ? "order-first bg-gray-900 lg:order-0" : "bg-white"
              }`}
            >
              <h3
                className={`flex items-center text-sm font-semibold leading-6 ${
                  plan.isVip ? "text-white" : "text-gray-900"
                }`}
              >
                <PlanLogo className={plan.logoClass} />
                <span className="ml-4 leading-6">{plan.plan}</span>
              </h3>
              <p
                className={`relative mt-5 flex text-3xl leading-12 tracking-tight ${
                  plan.isVip ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.pricingMonthly === plan.pricingAnnually ? (
                  <span>{plan.pricingMonthly}</span>
                ) : (
                  <>
                    <span
                      className={`transition duration-300 ${
                        billing === "monthly"
                          ? ""
                          : "absolute top-0 left-0 pointer-events-none translate-x-6 opacity-0 select-none"
                      }`}
                    >
                      {plan.pricingMonthly}
                    </span>
                    <span
                      className={`transition duration-300 ${
                        billing === "annually"
                          ? ""
                          : "absolute top-0 left-0 pointer-events-none -translate-x-6 opacity-0 select-none"
                      }`}
                    >
                      {plan.pricingAnnually}
                    </span>
                  </>
                )}
              </p>
              <p
                className={`mt-3 text-sm leading-6 ${plan.isVip ? "text-gray-300" : "text-gray-700"}`}
              >
                {plan.text}
              </p>
              <div className="order-last mt-6">
                <ul
                  className={`-my-2 divide-y text-sm leading-6 ${
                    plan.isVip
                      ? "divide-gray-800 text-gray-300"
                      : "divide-gray-200 text-gray-700"
                  }`}
                >
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex py-2">
                      <CheckIcon
                        className={plan.isVip ? "text-white" : "text-cyan-500"}
                      />
                      <span className="ml-4">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/register"
                className={`inline-flex justify-center rounded-lg py-2 px-3 text-sm leading-6 font-semibold transition-colors mt-6 ${
                  plan.isVip
                    ? "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 active:before:bg-transparent active:bg-cyan-600 active:text-white/80"
                    : "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
                }`}
              >
                {plan.button}
              </a>
            </section>
          ))}
        </div>
      </Div>
    </Section>
  );
};

export default Pricing;
