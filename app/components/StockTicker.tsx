"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

// x/y are the exact 33 coordinates baked into the original static chart path,
// so the rendered curve is pixel-identical. price/percent are the real values
// captured by hovering the reference site, point for point, left to right.
const chartX = [
  16.0, 23.9375, 31.875, 39.8125, 47.75, 55.6875, 63.625, 71.5625, 79.5,
  87.4375, 95.375, 103.3125, 111.25, 119.1875, 127.125, 135.0625, 143.0,
  150.9375, 158.875, 166.8125, 174.75, 182.6875, 190.625, 198.5625, 206.5,
  214.4375, 222.375, 230.3125, 238.25, 246.1875, 254.125, 262.0625, 270.0,
];

const chartY = [
  32.0, 47.4709, 39.3576, 80.0116, 63.6279, 79.314, 87.814, 98.9128, 71.6366,
  127.3372, 120.1308, 112.3023, 120.2355, 144.6337, 176.0, 162.2326, 144.3634,
  152.3953, 144.6221, 129.9535, 103.3517, 112.3401, 136.2645, 129.6337,
  120.0959, 153.2965, 136.5233, 143.7035, 132.5581, 159.0494, 144.2413,
  127.0233, 103.2209,
];

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
];

const percents: (number | null)[] = [
  null, -5.34, 2.96, -14.38, 6.77, -6.07, -3.5, -4.74, 12.23, -22.25, 3.7,
  3.88, -3.78, -12.09, -17.69, 9.43, 11.19, -4.52, 4.58, 8.27, 13.85, -4.11,
  -11.41, 3.57, 4.96, -16.44, 9.94, -3.87, 6.25, -13.98, 9.09, 9.69, 12.21,
];

const points = chartX.map((x, i) => ({
  x,
  y: chartY[i],
  price: prices[i],
  percent: percents[i],
}));

const defaultPoint = points[points.length - 1];

function formatPrice(price: number) {
  return price.toFixed(2);
}

function formatPercent(percent: number) {
  return `${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`;
}

const StockTicker = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const linePath = useMemo(
    () =>
      points
        .map(
          (p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(4)} ${p.y.toFixed(4)}`,
        )
        .join(""),
    [],
  );
  const areaPath = `${linePath} V 176 H 16 Z`;

  // Straight-line segments, so the total length is just the sum of each
  // segment's Euclidean distance — exact, no DOM measurement needed, and
  // available on the very first (server) render so there's no flash of the
  // fully-drawn chart before the reveal animation takes over.
  const pathLength = useMemo(() => {
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      total += Math.sqrt(dx * dx + dy * dy);
    }
    return total;
  }, []);

  const updateFromClientPoint = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;

    const cursor = svg.createSVGPoint();
    cursor.x = clientX;
    cursor.y = clientY;
    const { x } = cursor.matrixTransform(ctm.inverse());

    let nearest = 0;
    points.forEach((point, i) => {
      if (Math.abs(point.x - x) < Math.abs(points[nearest].x - x)) {
        nearest = i;
      }
    });
    setActiveIndex(nearest);
  };

  const handlePointerDown = (e: ReactPointerEvent<SVGRectElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientPoint(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: ReactPointerEvent<SVGRectElement>) => {
    updateFromClientPoint(e.clientX, e.clientY);
  };

  const endInteraction = () => setActiveIndex(null);

  const activePoint = activeIndex === null ? defaultPoint : points[activeIndex];

  return (
    <>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl tracking-tight text-gray-900 tabular-nums">
          {formatPrice(activePoint.price)}
        </div>
        <div className="text-sm text-gray-900">USD</div>
        {activePoint.percent !== null && (
          <div
            className={`ml-auto text-sm tracking-tight tabular-nums ${
              activePoint.percent < 0 ? "text-gray-500" : "text-cyan-500"
            }`}
          >
            {formatPercent(activePoint.percent)}
          </div>
        )}
      </div>
      <div className="mt-6 flex gap-4 text-xs text-gray-500">
        <div>1D</div>
        <div>5D</div>
        <div className="font-semibold text-cyan-600">1M</div>
        <div>6M</div>
        <div>1Y</div>
        <div>5Y</div>
      </div>
      <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-black/5 ring-inset">
        <svg
          ref={svgRef}
          viewBox="0 0 286 208"
          className="touch-none overflow-visible select-none"
        >
          <defs>
            <clipPath id="hero-chart-clip">
              <path d={areaPath} />
            </clipPath>
            <clipPath id="hero-chart-wipe">
              <rect
                x="16"
                y="0"
                height="208"
                width={drawn ? 254 : 0}
                style={{ transition: "width 1.2s ease-out" }}
              />
            </clipPath>
            <linearGradient id="hero-chart-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#13B5C8" />
              <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="34.67" x2="286" y2="34.67" />
          <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="69.33" x2="286" y2="69.33" />
          <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="104" x2="286" y2="104" />
          <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="138.67" x2="286" y2="138.67" />
          <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="173.33" x2="286" y2="173.33" />
          <g clipPath="url(#hero-chart-wipe)">
            <rect
              y="32"
              width="270px"
              height="144"
              fill="url(#hero-chart-gradient)"
              clipPath="url(#hero-chart-clip)"
              opacity="0.5"
            />
          </g>
          <path
            d={linePath}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#06b6d4"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: drawn ? 0 : pathLength,
              transition: "stroke-dashoffset 1.2s ease-out",
            }}
          />
          {activeIndex !== null && (
            <>
              <line
                x1="0"
                x2="286"
                y1={points[activeIndex].y}
                y2={points[activeIndex].y}
                stroke="#06b6d4"
                strokeOpacity="0.5"
                strokeDasharray="2 3"
              />
              <circle
                cx={points[activeIndex].x}
                cy={points[activeIndex].y}
                r="5"
                fill="#fff"
                stroke="#06b6d4"
                strokeWidth="2"
              />
            </>
          )}
          <rect
            x="0"
            y="0"
            width="286"
            height="208"
            fill="transparent"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endInteraction}
            onPointerCancel={endInteraction}
            onPointerLeave={endInteraction}
            onLostPointerCapture={endInteraction}
          />
        </svg>
      </div>
    </>
  );
};

export default StockTicker;
