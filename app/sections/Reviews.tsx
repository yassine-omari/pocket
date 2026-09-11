"use client";

import React, { useEffect, useRef, useState } from "react";
import StarIcon from "../components/icons/ui/StarIcon";

type Testimonial = {
  title: string;
  text: string;
  author: string;
};

type ColumnTestimonial = Testimonial & { className?: string };

const testimonials: Testimonial[] = [
  {
    title: "It really works.",
    text: "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "CrazyInvestor",
  },
  {
    title: "Screw financial advisors.",
    text: "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
    author: "JordanBelfort1962",
  },
  {
    title: "Wish I could give 6 stars",
    text: "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
  },
  {
    title: "I’m 13 and I’m rich.",
    text: "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
    author: "RichieRich",
  },
  {
    title: "Quit my job.",
    text: "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
    author: "GeorgeCostanza",
  },
  {
    title: "This shouldn’t be legal.",
    text: "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.",
    author: "LivingDaDream",
  },
  {
    title: "No more debt!",
    text: "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
    author: "BruceWayne",
  },
  {
    title: "Too good to be true.",
    text: "I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!",
    author: "LazyRich99",
  },
  {
    title: "It’s like a superpower.",
    text: "Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!",
    author: "ClarkKent",
  },
  {
    title: "You need this app.",
    text: "I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.",
    author: "CluelessButRich",
  },
  {
    title: "I love it!",
    text: "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!",
    author: "MrBurns",
  },
  {
    title: "Bought an island.",
    text: "Yeah, you read that right. Want your own island too? Get Pocket.",
    author: "ScroogeMcduck",
  },
  {
    title: "Started an investment firm.",
    text: "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
    author: "TheCountOfMonteChristo",
  },
  {
    title: "Don’t download this app",
    text: "Unless you want to have the best life ever! I am literally writing this from a yacht.",
    author: "JeffBezos",
  },
];

// Split into 3 groups sized to fill 1/2/3-column layouts evenly: group A
// (col 1), group C (col 3, split in half between cols 1 & 2 below lg), and
// group B (col 2).
const groupASize = Math.ceil(testimonials.length / 3);
const groupCSize = Math.floor(testimonials.length / 3);
const groupA = testimonials.slice(0, groupASize);
const groupC = testimonials.slice(groupASize, groupASize + groupCSize);
const groupB = testimonials.slice(groupASize + groupCSize);

const groupCHalf = Math.ceil(groupC.length / 2);
const groupC1 = groupC.slice(0, groupCHalf);
const groupC2 = groupC.slice(groupCHalf);

const withClassName = (items: Testimonial[], className: string): ColumnTestimonial[] =>
  items.map((item) => ({ ...item, className }));

const column1: ColumnTestimonial[] = [
  ...groupA,
  ...withClassName(groupC1, "lg:hidden"),
  ...withClassName(groupC2, "md:hidden lg:hidden"),
  ...withClassName(groupB, "md:hidden lg:hidden"),
];

const column2: ColumnTestimonial[] = [
  ...groupB,
  ...withClassName(groupC2, "lg:hidden"),
];

const column3: ColumnTestimonial[] = [...groupC1, ...groupC2];

const StarRating = () => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon key={index} className="h-5 w-5 fill-cyan-500" />
    ))}
  </div>
);

const TestimonialCard = ({
  title,
  text,
  author,
  className = "",
  ariaHidden = false,
  delay = 0,
}: ColumnTestimonial & { ariaHidden?: boolean; delay?: number }) => (
  <figure
    aria-hidden={ariaHidden}
    className={`animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <blockquote className="text-gray-900">
      <StarRating />
      <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
        {title}
      </p>
      <p className="mt-3 text-base/7">{text}</p>
    </blockquote>
    <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
      {author}
    </figcaption>
  </figure>
);

type ColumnProps = {
  testimonials: ColumnTestimonial[];
  className?: string;
  msPerPixel?: number;
};

const Column = ({ testimonials: items, className = "", msPerPixel = 10 }: ColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const node = columnRef.current;
    if (!node) return;

    const resizeObserver = new ResizeObserver(() => {
      setDuration(node.offsetHeight * msPerPixel);
    });
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [msPerPixel]);

  return (
    <div
      ref={columnRef}
      className={`animate-marquee space-y-8 py-4 ${className}`}
      style={{ "--marquee-duration": `${duration}ms` } as React.CSSProperties}
    >
      {items.concat(items).map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
          ariaHidden={index >= items.length}
          delay={(index % 5) * 0.1}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 justify-center sm:items-center">
          <h1 id="reviews-title" className="text-[32px] leading-12 font-medium tracking-tight text-foreground sm:text-center ">
            Everyone is changing their life with Pocket.
          </h1>
          <p className="text-lg leading-8 text-[#525252] sm:text-center">
            Thousands of people have doubled their net-worth in the last 30 days.
          </p>
        </div>
        <div className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          <Column testimonials={column1} msPerPixel={10} />
          <Column testimonials={column2} className="hidden md:block" msPerPixel={15} />
          <Column testimonials={column3} className="hidden lg:block" msPerPixel={10} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
