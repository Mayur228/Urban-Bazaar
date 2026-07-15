import { Link } from "react-router-dom";

export function HeaderTitle() { 
    return (
        <Link to={"/"} className="items-center gap-2 lg:flex">
            <img
                src="/images/logo.png"
                alt="Urban Bazaar Logo"
                className="logoImg h-25 w-25 object-contain"
            />

            <h1 className="text-3xl font-bold font-serif text-amber-950">Urban Bazaar</h1>
        </Link>
    )
}