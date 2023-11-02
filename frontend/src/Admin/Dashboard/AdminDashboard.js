import React, { useContext, useEffect } from "react";

// import { BsPersonFillAdd } from "react-icons/bs";
// import { MdAdminPanelSettings } from "react-icons/md";
import "./AdmDas.css";
import "../../Styles/SuperHome.css";
import DetailsContext from "../../Context/CreateContext";
import NavbarScroll from "../../components/Navbar/NavbarScroll";
// import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { setFlag, setPersonName } = useContext(DetailsContext);
  const name = localStorage.getItem("userName");
  useEffect(() => {
    setFlag(true);
    setPersonName(name);
  }, [setFlag, setPersonName, name]);

  // const sidebarData = [
  //   { label: "Admins", to: "admins", icon: <MdAdminPanelSettings /> },
  //   { label: "Add Admin", to: "addAdmin", icon: <BsPersonFillAdd /> },
  // ];

  return (
    <>
      <div className="Nav">
        <NavbarScroll />
      </div>
      <div className="card-container">
        <div className="cards">
          <Link className="card" to="/v2/das/" >
            
           PROJECTS
          </Link>
          <Link to="/v2/empy" className="card">
            <span className="link-title">EMPLOYEE</span>
          </Link>
        </div>

        {/* <div className="sidebar">
            <Sidebar children={sidebarData} />
          </div> */}
      </div>
    </>
  );
}
