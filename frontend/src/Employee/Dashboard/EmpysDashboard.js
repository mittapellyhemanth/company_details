import React from "react";

import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";

import "../../Styles/SuperHome.css";

import NavbarScroll from "../../components/Navbar/NavbarScroll";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserName from "../../Functions/UserName";



export default function EmpysDashboard() {
  
  UserName();

const sidebarData = [
  {label:'PROJECTS', to:'project',icon:<MdAdminPanelSettings/>},
  {label:'APPLICATION FOR LEAVE', to:'leave',icon:<BsPersonFillAdd/>},
  {label:'YOUR DETAILS', to:'details',icon:<MdAdminPanelSettings/>},
  {label:'BREAK TIME', to:'break',icon:<BsPersonFillAdd/>}
];

  return (
    <>
      <div className="grid-container">
        <div className="grid-child-container">
          <div className="Nav">
            <NavbarScroll />
          </div>
          <div className="sidebar">
            <Sidebar children={sidebarData} />
          </div>
          
        </div>
      </div>
    </>
  );
}
