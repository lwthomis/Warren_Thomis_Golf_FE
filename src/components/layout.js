import React from "react";
import Navbar from "./navigation-components/navbar";
import Sidebar from "./navigation-components/sidebar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className="page-wrapper">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    )
};

export default Layout;