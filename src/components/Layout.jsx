import React from 'react';
import NavMenus from "../NavMenus.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavMenus/>
            <Outlet/>
        </>
    );
};

export default Layout;