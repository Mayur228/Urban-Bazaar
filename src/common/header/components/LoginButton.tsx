import { NavLink } from "react-router-dom";

interface Props {
  isLoggIn: boolean; 
  onLogout: () => void 
} 

export function LoginButton({isLoggIn}:Props) {
  return (
    <NavLink 
      to={"/login"}
      className="
      rounded-full
      bg-black
      px-6
      py-3
      font-medium
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-amber-600
      hover:shadow-xl
      "
    >
      {isLoggIn ?
        "LogOut"
        : "Login"}
    </NavLink>
  );
}