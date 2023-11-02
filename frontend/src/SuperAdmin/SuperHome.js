import React from "react";

import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import "../Styles/SuperHome.css";
// import DetailsContext from "../Context/CreateContext";
import NavbarScroll from "../components/Navbar/NavbarScroll";
import Sidebar from "../components/Sidebar/Sidebar";
import UserName from "../Functions/UserName";



export default function SuperAdminHome() {
  // const { setFlag, setPersonName } = useContext(DetailsContext);
 console.log('super');
  UserName()

const sidebarData = [
  {label:'Admins', to:'admins',icon:<MdAdminPanelSettings/>},
  {label:'Add Admin', to:'addAdmin',icon:<BsPersonFillAdd/>}
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
