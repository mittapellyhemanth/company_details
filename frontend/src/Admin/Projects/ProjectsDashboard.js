import React from "react";

import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import "../../Styles/SuperHome.css";

import NavbarScroll from "../../components/Navbar/NavbarScroll";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserName from "../../Functions/UserName";



export default function ProjectsDashboard() {
  // const { setFlag, setPersonName } = useContext(DetailsContext);
 
  UserName()

  const sidebarData = [
    {label:'PROJECTS', to:'/v2/das/proj',icon:<MdAdminPanelSettings/>},
    {label:'ADD PROJECTS', to:'/v2/das/addProj',icon:<BsPersonFillAdd/>}
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
