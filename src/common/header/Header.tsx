import { useNavigate } from "react-router-dom";
import { HeaderActions } from "./components/HeaderActions";
import { HeaderNavigation } from "./components/HeaderNav";
import { HeaderTitle } from "./components/HeaderTitle";
import { LoginButton } from "./components/LoginButton";
import { useAppSelector } from "../../app/hooks";

export function Header() {
  const navigate = useNavigate()

  const user = useAppSelector(
    (state) => state.auth
  )
  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-gray-200
      bg-white/80
      backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between ">

        <HeaderTitle />

        <HeaderNavigation />

        <div className="flex items-center gap-5">

          <HeaderActions
            isDark={true}
            showSearch={false}
            onToggleTheme={() => {}}
            onToggleSearch={() => {}}
            onCloseSearch={() => {}}
            onWishList={() => {}}
            onCart={() => {navigate("/cart")}}
            onProfile={() => {}}
          />

          <LoginButton isLoggIn={!!user} onLogout={
            ()=> {}
          } />

        </div>

      </div>
    </header>
  );
}