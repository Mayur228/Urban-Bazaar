import { FaGoogle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginWithGoogle } from "../../../api/auth/authThunk";

export function SocialLogin() {
 const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { user, loading } = useAppSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);
  return (
    <button
      type="button"
      onClick={
        () => {
          dispatch(loginWithGoogle())
        }
      }
      disabled= {loading}
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
      <FaGoogle size={18} />

      {loading ?
        "Singing In..."
        :"Continue with Google"
      }
    </button>
  );
}