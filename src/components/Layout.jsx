import React from 'react';
import NavMenus from "../NavMenus.jsx";
import {Outlet} from "react-router-dom";
import Recent from "./Recent.jsx";

const Layout = () => {
    return (
        <>
            <NavMenus/>
            <Outlet/>
            <Recent/>
        </>
    );
};

export default Layout;