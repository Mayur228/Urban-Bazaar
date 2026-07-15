import { Moon, Sun } from "lucide-react";

import { IconButton } from "./IconButton";

interface Props {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({
  isDark,
  onToggle,
}: Props) {
  return (
    <IconButton
      ariaLabel="Toggle Theme"
      onClick={onToggle}
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </IconButton>
  );
}