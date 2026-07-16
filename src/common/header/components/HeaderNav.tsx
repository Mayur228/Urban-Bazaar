import { NavLink } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export function HeaderNavigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
            relative
            text-[15px]
            font-medium
            transition-all
            duration-300
            hover:text-amber-600
            ${
              isActive
                ? "text-amber-600"
                : "text-gray-700"
            }
          `
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}