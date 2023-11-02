import React from "react";
import { Route, Routes } from "react-router-dom";
import Deatils from "../components/CompanyDetails/Details";
import AdminLogin from "../Admin/AdminLogin";
import EmployeeLogin from "../Employee/EmployeeLogin";
import SuperAdminHome from "../SuperAdmin/SuperHome";
import Admins from "../SuperAdmin/Admins";
import AddAdmin from "../SuperAdmin/AddAdmin";
import SuperLogin from "../SuperAdmin/SuperLogin";
import AddProjects from "../Admin/Projects/AddProjects";
import Projects from "../Admin/Projects/Projects";


import AddEmployee from "../Admin/Employee/AddEmployee";

import ProjectsDashboard from "../Admin/Projects/ProjectsDashboard";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import EmployeeDashboard from "../Admin/Employee/Dashboard/EmployeeDashboard";
import SEO from "../Admin/Employee/SEO/SEO";
import Employee from "../Admin/Employee/SEO/Employee";
import Writer from "../Admin/Employee/WRITER/Writer";
import Sales from "../Admin/Employee/SALES/Sales";
import Designer from "../Admin/Employee/DESIGNER/Designer";
import Logout from "../components/Login_SignUp/Logout";
import EMProjects from "../Employee/EMProjects";
import Application from "../Employee/ApplicationForLeave";
import BreakTime from "../Employee/BreakTime";
import Details from "../Employee/YourDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Deatils />} />
      <Route path="/superAdmin" element={<SuperLogin />} />
<Route path="/Logout" element={<Logout/>} />
      <Route path="/Admin" element={<AdminLogin />} />
      <Route path="/Employee" element={<EmployeeLogin />} />
      {/* ...............................Super Admin Routers ......................*/}
      <Route path="/v1/" element={<SuperAdminHome />}>
        <Route path="admins" element={<Admins />} />
        <Route path="addAdmin" element={<AddAdmin />} />
      </Route>
      {/*........................ Admin Routers............................. */}
      <Route path="ad/dashboard" element={<AdminDashboard />} />
      {/*........................ Admin employee Routers............................. */}
      <Route path="em/dashboard" element={<EmployeeDashboard />} />

      {/*........................ Admin PROJECT Routers............................. */}
      <Route path="/v2/das/" element={<ProjectsDashboard />}>
        <Route path="proj" element={<Projects />} />
        <Route path="addProj" element={<AddProjects />} />
      </Route>
            {/*........................ EMPLOYEE SEO Routers............................. */}
      <Route path="/v2/em/" element={<SEO />}>
        <Route path="empy" element={<Employee />} />
        <Route path="addempy" element={<AddEmployee />} />
        <Route path="attend" element={<Employee />} />
      </Route>
      {/*........................ EMPLOYEE WRITER Routers............................. */}
      <Route path="/v2/writer/" element={<Writer />}/>
      {/*........................ EMPLOYEE DESIGNER Routers............................. */}
      <Route path="/v2/design/" element={<Designer />}/>
        
      {/*........................ EMPLOYEE SALES Routers............................. */}
      <Route path="/v2/sales/" element={<Sales />}/>
            {/*........................ EMPLOYEE  Routers............................. */}
      <Route path="/v3/empy/" element={<EmployeeDashboard />}>
        <Route path="project" element={<EMProjects />} />
        <Route path="leave" element={<Application />} />
        <Route path="details" element={<Details />} />
        <Route path="break" element={<BreakTime />} />
      </Route>
    
    </Routes>
  );
}
