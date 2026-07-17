import { Link } from "react-router-dom";

import { AuthDivider } from "./AuthDivider";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";

export function LoginForm() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO:
    // React Hook Form + Zod
    // Login API
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-6"
    >
      {/* Header */}

      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-stone-900">
          Welcome Back 👋
        </h2>

        <p className="text-sm text-stone-500">
          Login to continue shopping with Urban Bazaar.
        </p>
      </div>

      {/* Email */}

      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      {/* Password */}

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
      />

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="checkbox"
            className="
              h-4
              w-4
              rounded
              border-stone-300
              text-amber-600
              focus:ring-amber-500
            "
          />

          <span className="text-sm text-stone-600">
            Remember me
          </span>

        </label>

        <Link
          to="/forgot-password"
          className="
            text-sm
            font-medium
            text-amber-600
            transition
            hover:text-amber-700
          "
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login Button */}

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
        Login
      </button>

      <AuthDivider />

      <SocialLogin />
      

      {/* Footer */}

      <p className="text-center text-sm text-stone-600">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="
            font-semibold
            text-amber-600
            hover:text-amber-700
          "
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}