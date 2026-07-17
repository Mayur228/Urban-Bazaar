import { FaGoogle } from "react-icons/fa";

interface SocialLoginProps {
  onGoogleLogin?: () => void;
}

export function SocialLogin({
  onGoogleLogin,
}: SocialLoginProps) {
  return (
    <button
      type="button"
      onClick={onGoogleLogin}
      className="
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-stone-300
        bg-white
        text-sm
        font-medium
        text-stone-700
        transition-all
        duration-300
        hover:border-amber-500
        hover:bg-amber-50
        hover:shadow-md
      "
    >
      <FaGoogle size={20} />

      Continue with Google
    </button>
  );
}