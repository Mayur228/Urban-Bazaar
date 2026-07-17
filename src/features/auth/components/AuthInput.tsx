import type { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function AuthInput({
  label,
  error,
  className = "",
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-stone-700">
        {label}
      </label>

      <input
        {...props}
        className={`
          h-12
          w-full
          rounded-xl
          border
          border-stone-300
          bg-white
          px-4
          text-sm
          outline-none
          transition-all
          duration-300
          placeholder:text-stone-400
          focus:border-amber-500
          focus:ring-4
          focus:ring-amber-100
          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}