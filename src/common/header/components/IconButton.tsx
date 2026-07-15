interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  badge?: number;
}

export function IconButton({
  children,
  onClick,
  ariaLabel,
  badge,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-100"
    >
      {children}

      {badge !== undefined && (
        <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}