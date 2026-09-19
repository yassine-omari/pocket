import { useId } from "react";
import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

const fieldStyles =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-hidden focus:ring-cyan-500 sm:text-sm";

type FieldProps = {
  label: string;
  className?: string;
};

function Label({ id, children }: { id: string; children: string }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
}

export function TextField({
  label,
  className,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();

  return (
    <div className={className}>
      <Label id={id}>{label}</Label>
      <input id={id} className={fieldStyles} {...props} />
    </div>
  );
}

export function SelectField({
  label,
  className,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();

  return (
    <div className={className}>
      <Label id={id}>{label}</Label>
      <div className="relative">
        <select id={id} className={`${fieldStyles} pr-10`} {...props} />
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 stroke-gray-500"
        >
          <path
            d="m6 8 4 4 4-4"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
