'use client';

import {Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop.tsx'
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';
import { ReactNode } from "react";

import routes from "./config/route.ts";

type ProtectRouteProps = {
    children: ReactNode | null
}

const ProtectedRoute = ({ children } : ProtectRouteProps) => {
    // @ts-ignore
    const isUserLoggedIn = useSelector(state => !!state.auth.token)
    // @ts-ignore
    const isUserAuthenticated = useSelector(state => state.auth.authenticated)

    if (!isUserLoggedIn && !isUserAuthenticated) {
        return <Navigate to="/auth" />;
    }

    return children;
};


const Router = () => {
    const loggedInRoutes = routes.filter(route => route.isAuthenticated)
    const guestRoutes = routes.filter(route => !route.isAuthenticated)

    return (
        <div>
            <ScrollToTop>
                <BrowserRouter>
                    <Routes>
                        {
                            loggedInRoutes.map((route, key) => (
                                <Route
                                    key={key}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute>
                                           <route.element />
                                        </ProtectedRoute>
                                    }
                                >
                                </Route>
                            ))
                        }
                        
                        {
                            guestRoutes.map((route, key) => (
                                <Route
                                    key={key}
                                    path={route.path}
                                    element={
                                        <route.element />
                                    }
                                >
                                </Route>
                            ))
                        }
                    </Routes>
                </BrowserRouter>
            </ScrollToTop>
        </div>
    )
}

export default Router