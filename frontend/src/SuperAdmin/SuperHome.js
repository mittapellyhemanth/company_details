import React from "react";



// import AddAdmin from './AddAdmin'
// import Admins from "./Admins";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
import NavbarUser from "../components/Navbar/NavbarUser";

import '../Styles/SuperHome.css'
export default function SuperAdminHome() {


    return <>
        <div className="grid-container">
            <div className="grid-child-container">
                <div className="Nav">
                    <NavbarUser />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>

            </div>
        </div>

    </>
}

