import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Post from "./components/Post";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/users/:userId',
                element: <Post />
            }
        ],
        errorElement: <Error />
    }
])

root.render(<RouterProvider router={routes}/>);

