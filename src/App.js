import React ,{lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Post from "./components/Post";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
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
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <About />
                         </Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                        </Suspense> 
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

