import { NavLink } from "react-router-dom";

export function HeaderNav() {
    return (
        <nav className="hidden items-center gap-8 lg:flex">
            <NavLink to={"/"}>Home</NavLink>
            
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/categories"}>Categories</NavLink>
        </nav>
    )
}