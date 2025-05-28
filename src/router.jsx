import React from 'react';
import  {createBrowserRouter, Router} from "react-router-dom";
import Movies from "./screen/Movies.jsx";
import Tvs from "./screen/Tvs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies/>
    },
    {
        path: "/tv",
        element: <Tvs/>
    }
]);

export default router;