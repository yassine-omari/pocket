import Link from "next/link";
import Logo from "../components/icons/ui/Logo";

function BackgroundCircles() {
  return (
    <svg
      viewBox="0 0 1090 1090"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
      width={1090}
      height={1090}
      className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
    >
      <circle cx={545} cy={545} r="544.5" />
      <circle cx={545} cy={545} r="480.5" />
      <circle cx={545} cy={545} r="416.5" />
      <circle cx={545} cy={545} r="352.5" />
    </svg>
  );
}

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="flex flex-auto overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link aria-label="Home" href="/" className="flex justify-center">
          <Logo />
        </Link>
        <div className="relative isolate mt-12 flex flex-auto flex-col sm:mt-16">
          <BackgroundCircles />
          {children}
        </div>
      </div>
    </main>
  );
}
