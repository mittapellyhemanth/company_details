import React from "react";
import  { Route, Routes } from 'react-router-dom'
import Deatils from "../components/CompanyDetails/Details";
import AdminLogin from "../Admin/AdminLogin";
import EmployeeLogin from "../Employee/EmployeeLogin";
import SuperAdminHome from '../SuperAdmin/SuperHome'
import Admins from "../SuperAdmin/Admins";
import AddAdmin from "../SuperAdmin/AddAdmin";
import SuperLogin from "../SuperAdmin/SuperLogin";


export default function Router(){
    return <Routes>
        <Route path="/" element={<Deatils/>}/>
        <Route path="/superAdmin" element={<SuperLogin/>} />

        <Route path="/dashboard/" element={<SuperAdminHome/>}>
        <Route path="admins" element={<Admins/>} />
        <Route path="addAdmin" element={<AddAdmin/>} />
        </Route>
        
        <Route path="/Admin" element={<AdminLogin/>} />
        <Route path="/Employee" element={<EmployeeLogin/>} />
    </Routes>
 
  
}