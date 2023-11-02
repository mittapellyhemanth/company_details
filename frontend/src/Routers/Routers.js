import React from "react";
import  { Route, Routes } from 'react-router-dom'
import Deatils from "../components/CompanyDetails/Details";
import AdminLogin from "../Admin/AdminLogin";
import EmployeeLogin from "../Employee/EmployeeLogin";
import SuperAdminHome from '../SuperAdmin/SuperHome'
import Admins from "../SuperAdmin/Admins";
import AddAdmin from "../SuperAdmin/AddAdmin";
import SuperLogin from "../SuperAdmin/SuperLogin";
import AddProjects from "../Admin/Projects/AddProjects";
import Projects from "../Admin/Projects/Projects";
import SEO from "../Admin/Employee/SEO/SEO";
import Attendance from "../Admin/Employee/Attendance";
import AddEmployee from "../Admin/Employee/AddEmployee";
import Employee from "../Admin/Employee/Employee";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import EmployeeDashboard from "../Employee/Dashboard/EmployeeDashboard";


export default function Router(){
    return <Routes>
        <Route path="/" element={<Deatils/>}/>
        <Route path="/superAdmin" element={<SuperLogin/>} />
          {/* Super Admin Routers */}
        <Route path="/v1/" element={<SuperAdminHome/>}>
        <Route path="admins" element={<Admins/>} />
        <Route path="addAdmin" element={<AddAdmin/>} />
        </Route>
            {/* Admin Routers */}
        <Route path="/v2/" element={<AdminDashboard/>}>
        <Route path="proj" element={<Projects/>} />
        <Route path="addproj" element={<AddProjects/>} />
         {/* SEO Routers */}
        <Route path="SEO" element={<SEO/>}>
        <Route path="empy" element={<Employee/>} />
        <Route path="addEmpy" element={<AddEmployee/>} />
        <Route path="atten" element={<Attendance/>} />
        </Route>
       
        </Route>

        
              {/*  Employee Routers */}  
        <Route path="/v3/" element={<EmployeeDashboard/>}>
        <Route path="admins" element={<Admins/>} />
        <Route path="addAdmin" element={<AddAdmin/>} />
        </Route>

        <Route path="/Admin" element={<AdminLogin/>} />
        <Route path="/Employee" element={<EmployeeLogin/>} />
    </Routes>
 
  
}