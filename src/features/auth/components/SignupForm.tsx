import { Link } from "react-router-dom";

import { AuthDivider } from "./AuthDivider";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";

export function SignupForm() {
  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO:
    // React Hook Form + Zod
    // Signup API
  };

  return (
    <form
      onSubmit={handleSignup}
      className="space-y-6"
    >
      {/* Header */}

      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-stone-900">
          Create Account ✨
        </h2>

        <p className="text-sm text-stone-500">
          Join Urban Bazaar and start shopping today.
        </p>
      </div>

      {/* Name */}

      <AuthInput
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
      />

      {/* Email */}

      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      {/* Password */}

      <PasswordInput
        label="Password"
        placeholder="Create a password"
      />

      {/* Confirm Password */}

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
      />

      {/* Terms */}

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="
            mt-1
            h-4
            w-4
            rounded
            border-stone-300
            text-amber-600
            focus:ring-amber-500
          "
        />

        <span className="text-sm text-stone-600">
          I agree to the{" "}
          <Link
            to="/terms"
            className="font-medium text-amber-600 hover:text-amber-700"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-medium text-amber-600 hover:text-amber-700"
          >
            Privacy Policy
          </Link>
        </span>
      </label>

      {/* Signup Button */}

      <button
        type="submit"
        className="
          h-12
          w-full
          rounded-xl
          bg-amber-600
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-amber-700
          hover:shadow-lg
          active:scale-[0.98]
        "
      >
        Create Account
      </button>

      <AuthDivider />

      <SocialLogin />

      {/* Footer */}

      <p className="text-center text-sm text-stone-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-amber-600 hover:text-amber-700"
        >
          Login
        </Link>
      </p>
    </form>
  );
}