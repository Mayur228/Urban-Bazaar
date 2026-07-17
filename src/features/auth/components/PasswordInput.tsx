import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  error?: string;
}

export function PasswordInput({
  label,
  placeholder,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">

      <label className="block text-sm font-medium text-stone-700">
        {label}
      </label>

      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="
            h-12
            w-full
            rounded-xl
            border
            border-stone-300
            bg-white
            px-4
            pr-12
            text-sm
            outline-none
            transition-all
            duration-300
            focus:border-amber-500
            focus:ring-4
            focus:ring-amber-100
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-stone-500
            transition
            hover:text-amber-600
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}