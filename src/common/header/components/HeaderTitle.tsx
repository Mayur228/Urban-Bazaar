import { Link } from "react-router-dom";

export function HeaderTitle() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
     
      <div>
        <h1 className="text-3xl font-black text-amber-700">
          Urban
        </h1>

        <p className="-mt-1 text-sm tracking-[4px] text-gray-500">
          BAZAAR
        </p>
      </div>
    </Link>
  );
}