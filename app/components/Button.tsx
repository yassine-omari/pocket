import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type Variant = "solid" | "outline";
type Color = "gray" | "cyan";

const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm transition-colors";

const variantStyles: Record<Variant, Record<Color, string>> = {
  solid: {
    gray: "py-2.5 px-3 font-semibold bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
    cyan: "relative overflow-hidden py-2.5 px-3 font-semibold bg-cyan-500 text-white before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 active:before:bg-transparent",
  },
  outline: {
    gray: "border py-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
    cyan: "border py-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] border-cyan-300 text-cyan-700 hover:border-cyan-400 active:bg-cyan-50 active:text-cyan-700/80",
  },
};

type CommonProps = {
  variant?: Variant;
  color?: Color;
};

type ButtonProps =
  | (CommonProps & { href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "color" | "href"
      >)
  | (CommonProps & { href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "color"
      >);

const Button = ({
  variant = "solid",
  color = "gray",
  className = "",
  ...props
}: ButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant][color]} ${className}`.trim();

  if (props.href !== undefined) {
    return (
      <Link
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};

export default Button;
