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

import ProjectsDashboard from "../Admin/Projects/ProjectsDashboard";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import EmployeeDashboard from "../Admin/Employee/Dashboard/EmployeeDashboard";
import SEO from "../Admin/Employee/SEO/SEO";
import Employee from "../Admin/Employee/SEO/Employee";

import Sales from "../Admin/Employee/SALES/Sales";

import Logout from "../components/Login_SignUp/Logout";
import EMProjects from "../Employee/EMProjects";
import Application from "../Employee/ApplicationForLeave";
import BreakTime from "../Employee/BreakTime";
import Details from "../Employee/YourDetails";
import AddSEO from "../Admin/Employee/SEO/AddSEO";
import DesignerDash from "../Admin/Employee/DESIGNER/DesignerDash";

import AttendanceDesigner from "../Admin/Employee/DESIGNER/AttendanceDesigner";
import SeoAttendance from "../Admin/Employee/SEO/Attendance";
import GetDesigner from "../Admin/Employee/DESIGNER/GetDesigner";
import AddDesigner from "../Admin/Employee/DESIGNER/AddDesigner";
import WriterDashboard from "../Admin/Employee/WRITER/WriterDashboard";
import AddWriter from "../Admin/Employee/WRITER/AddWriter";
import GetWriter from "../Admin/Employee/WRITER/GetWriter";
import AttendanceWriter from "../Admin/Employee/WRITER/AttendanceWriter";
import EmpysDashboard from "../Employee/Dashboard/EmpysDashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Deatils />} />
      <Route path="/superAdmin" element={<SuperLogin />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/Admin" element={<AdminLogin />} />
      <Route path="/Employee" element={<EmployeeLogin />} />
      {/* ...............................Super Admin Routers ......................*/}
      <Route path="/v1/" element={<SuperAdminHome />}>
        <Route index element={<Admins />} /> {/* by default we get this route*/}
        <Route path="admins" element={<Admins />} />
        <Route path="addAdmin" element={<AddAdmin />} />
      </Route>
      {/*........................ Admin Routers............................. */}
      <Route path="ad/dashboard" element={<AdminDashboard />} />
      {/*........................ Admin employee Routers............................. */}
      <Route path="em/dashboard" element={<EmployeeDashboard />} />

      {/*........................ Admin PROJECT Routers............................. */}
      <Route path="/v2/das/" element={<ProjectsDashboard />}>
        <Route index element={<Projects />} />
        <Route path="proj" element={<Projects />} />
        <Route path="addProj" element={<AddProjects />} />
      </Route>
      {/*........................  SEO Routers............................. */}
      <Route path="/v2/em/" element={<SEO />}>
        <Route index element={<Employee />} />{" "}
        <Route index path="empy" element={<Employee />} />
        <Route path="addempy" element={<AddSEO />} />
        <Route path="attend" element={<SeoAttendance />} />
      </Route>
      {/*........................  WRITER Routers............................. */}
      <Route path="/v2/writer" element={<WriterDashboard />} />
      <Route path="/v2/writer/" element={<WriterDashboard />}>
        <Route index element={<GetWriter />} />{" "}
        <Route path="wr/empy/" element={<GetWriter />} />
        <Route path="wr/addempy" element={<AddWriter />} />
        <Route path="wr/attend" element={<AttendanceWriter />} />
      </Route>

      {/*........................  DESIGNER Routers............................. */}
      <Route path="/v2/design/" element={<DesignerDash />}>
        <Route index element={<GetDesigner />} />{" "}
        <Route index path="de/empy" element={<GetDesigner />} />
        <Route path="de/addempy" element={<AddDesigner />} />
        <Route path="de/attend" element={<AttendanceDesigner />} />
      </Route>

      {/*........................  SALES Routers............................. */}
      <Route path="/v2/sales" element={<Sales />} />

      {/*........................ EMPLOYEE  Routers............................. */}
      <Route path="/v3/empy/" element={<EmpysDashboard />}>
        <Route index element={<EMProjects />} />
        <Route path="project" element={<EMProjects />} />
        <Route path="leave" element={<Application />} />
        <Route path="details" element={<Details />} />
        <Route path="break" element={<BreakTime />} />
      </Route>
    </Routes>
  );
}
