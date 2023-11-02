import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import "../Styles/SuperHome.css";
import DetailsContext from "../Context/CreateContext";
import NavbarScroll from "../components/Navbar/NavbarScroll";
export default function SuperAdminHome() {
  const { setFlag, setPersonName } = useContext(DetailsContext);
  const name = localStorage.getItem("userName");
  useEffect(() => {
    setFlag(true);
    setPersonName(name);
  }, [setFlag, setPersonName,name]);

const sidebarData = [
  {label:'Add Admin', to:'/addAdmin',icon:<BsPersonFillAdd/>},
  {label:'Admins', to:'/admins',icon:<MdAdminPanelSettings/>}
]

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
