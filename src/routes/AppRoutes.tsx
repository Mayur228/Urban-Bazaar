import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayouts";
import { Home } from "../features/home/Home";

export function AppRoutes() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>

                <Route
                        path="/"
                        element={<Home />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )    
}