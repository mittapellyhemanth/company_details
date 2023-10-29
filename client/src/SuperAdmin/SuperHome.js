import React from "react";



// import AddAdmin from './AddAdmin'
// import Admins from "./Admins";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function SuperAdminHome(){


    return <>
    <div>
        <div>
        <div>

        </div>
        <div>
        <Outlet/>
        </div>
        <div>
        <Sidebar/>
        </div>
    </div>
    </div>
    
    </>
}

