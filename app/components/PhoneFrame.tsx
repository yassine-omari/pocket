import Image from "next/image";
import type { ReactNode } from "react";
import phoneCover from "./icons/ui/phone-cover.svg";

type PhoneFrameProps = {
  children: ReactNode;
};

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="relative aspect-366/729 mx-auto max-w-[366px]">
      <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] grid-cols-1 grid-rows-1 overflow-hidden bg-foreground pt-[calc(23/318*100%)]">
        <div className="flex h-full flex-col">
          <div className="grid grid-cols-3 items-center px-4 pt-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6 flex-none justify-self-start"
            >
              <path
                d="M5 6h14M5 18h14M5 12h14"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex items-center justify-center justify-self-center gap-x-2">
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-cyan-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                />
              </svg>
              <span className="text-sm font-semibold text-white">Pocket</span>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6 flex-none justify-self-end"
            >
              <path
                d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {children}
        </div>
      </div>
      <Image
        src={phoneCover}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default PhoneFrame;
