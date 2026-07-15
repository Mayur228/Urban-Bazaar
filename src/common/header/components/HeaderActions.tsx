import {
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { IconButton } from "./IconButton";

interface Props {
  isDark: boolean;
  showSearch: boolean;
  onToggleTheme: () => void;
  onToggleSearch: () => void;
  onCloseSearch: () => void;
  onWishList: () => void;
  onCart: () => void;
  onProfile: () => void;
}

export function HeaderActions({
  isDark,
  showSearch,
  onToggleTheme,
  onToggleSearch,
  onCloseSearch,
  onWishList,
  onCart,
  onProfile
}: Props) {
  return (
    <div className="flex items-center gap-3">
      {showSearch ? (
        <SearchBar onClose={onCloseSearch} />
      ) : (
        <IconButton
          ariaLabel="Search"
          onClick={onToggleSearch}
        >
          <Search size={20} />
        </IconButton>
      )}

      <IconButton ariaLabel="Wishlist" onClick={onWishList}>
        <Heart size={20} />
      </IconButton>

      <IconButton
        ariaLabel="Shopping Cart"
        badge={2}
        onClick={onCart}
      >
        <ShoppingCart size={20} />
      </IconButton>

      <IconButton ariaLabel="Profile" onClick={onProfile}>
        <User size={20} />
      </IconButton>

      <ThemeToggle
        isDark={isDark}
        onToggle={onToggleTheme}
      />
    </div>
  );
}