import { Outlet } from "react-router-dom";
import { Header } from "../common/header/Header";
import { Footer } from "../common/footer/Footer";

export function MainLayout() { 
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>  
    );
}