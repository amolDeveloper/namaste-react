import React ,{lazy, Suspense, useEffect, useState} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Post from "./components/Post";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        setTimeout(() => {
            const data = {name: 'Amol Kodge'}
            setUserName(data.name);
        }, 1000)
    },[])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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

