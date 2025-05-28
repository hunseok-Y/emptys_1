import './App.css'
import NavMenus from "./NavMenus.jsx";
import Tvs from "./screen/Tvs.jsx";
import Movies from "./screen/Movies.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router";

function App() {
    return (
        <>
            <NavMenus/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
