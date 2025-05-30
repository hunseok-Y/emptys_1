import React from 'react';
import  {createBrowserRouter, Router} from "react-router-dom";
import Movies from "./screen/Movies.jsx";
import Tvs from "./screen/Tvs.jsx";
import Layout from "./components/Layout.jsx";
import Shop from "./screen/Shop.jsx";
import Actor from "./screen/Actor.jsx";
import Detail from "./screen/Detail.jsx";

const router = createBrowserRouter([
    {
        element : <Layout/>,
        children : [
            {
                path: "/",
                element : <Movies/>
            },
            {
                path: "/tv",
                element : <Tvs/>
            },
            {
                path: "/shop",
                element : <Shop/>
            },
            {
                path: "/actor",
                element : <Actor/>
            },
            {
                path: "/movie/:id",
                element : <Detail/>
            },
            {
                path: "/tv/:id",
                element : <Detail/>
            },
        ]
    }
]);

export default router;