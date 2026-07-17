import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayouts";
import { Home } from "../features/home/Home";
import { Login } from "../features/auth/pages/Login";
import { Signup } from "../features/auth/pages/Signup";

export function AppRoutes() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>

                <Route
                        path="/"
                        element={<Home />} />
                        
                   
                    
                </Route>
                
                 <Route
                        path="/login"
                    element={<Login />} />
                
                <Route 
                    path="/signup"
                    element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )    
}