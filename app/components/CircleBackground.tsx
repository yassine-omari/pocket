import { useId } from "react";

type SpinDirection = "clockwise" | "counterclockwise";

type CircleBackgroundProps =
  | {
      isHeroSection?: true;
      className?: string;
    }
  | {
      isHeroSection: false;
      size: number;
      spinDirection: SpinDirection;
      duration: number;
      className?: string;
    };

const CircleBackground = (props: CircleBackgroundProps) => {
  const { className = "" } = props;
  const gradientId = useId();
  const secondGradientId = useId();

  const wrapperClassName = ` absolute top-4  left-1/2 -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0 ${className} `;

  if (props.isHeroSection === false) {
    const { size, spinDirection, duration } = props;

    return (
      <div style={{ width: size, height: size }} className={wrapperClassName}>
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          style={{
            animation: `${spinDirection === "clockwise" ? "spin" : "spin-reverse"} ${duration}s linear infinite`,
          }}
        >
          <path
            d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
            stroke="#D4D4D4"
            strokeOpacity="0.7"
          />
          <path
            d="M513 1025C230.23 1025 1 795.77 1 513"
            stroke={`url(#${gradientId})`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={gradientId}
              x1="1"
              y1="513"
              x2="1"
              y2="1025"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div style={{ width: 1026, height: 1026 }} className={wrapperClassName}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "spin 5s linear infinite" }}
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{ animation: "spin-reverse 6s linear infinite" }}
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${secondGradientId})`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={secondGradientId}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CircleBackground;
