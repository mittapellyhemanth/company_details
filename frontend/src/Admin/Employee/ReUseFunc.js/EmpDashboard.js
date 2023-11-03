import { useContext } from "react";
import UserName from "../../../Functions/UserName";
import NavbarScroll from "../../../components/Navbar/NavbarScroll";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import DetailsContext from "../../../Context/CreateContext";
// import DetailsContext from "../../../Context/CreateContext";


export default function EmpDashboard(){
  UserName()

  const{designation, setDesignation} = useContext(DetailsContext);
  let sidebarData = [];
  if (designation === "seo") {
     sidebarData = [
        {label:'EMPLOYEE', to:'/v2/em/empy',icon:<MdAdminPanelSettings/>},
        {label:'ADD EMPLOYEE', to:'/v2/em/addempy',icon:<BsPersonFillAdd/>},
        {label:'ATTENDANCE', to:'/v2/em/attend',icon:<BsPersonFillAdd/>}
      ];
 }
   if (designation === "designer") {
    sidebarData = [
        {label:'EMPLOYEE', to:'/v2/design/de/empy',icon:<MdAdminPanelSettings/>},
        {label:'ADD EMPLOYEE', to:'/v2/design/de/addempy',icon:<BsPersonFillAdd/>},
        {label:'ATTENDANCE', to:'/v2/design/de/attend',icon:<BsPersonFillAdd/>}
      ];
  }
   if (designation === "writer") {
    sidebarData = [
      {label:'EMPLOYEE', to:'/v2/writer/wr/empy',icon:<MdAdminPanelSettings/>},
      {label:'ADD EMPLOYEE', to:'/v2/writer/wr/de/addempy',icon:<BsPersonFillAdd/>},
      {label:'ATTENDANCE', to:'/v2/writer/wr/attend',icon:<BsPersonFillAdd/>}
    ];
  } 
  if (designation === "sales") {
    // sidebarData = [
    //     {label:'EMPLOYEE', to:'/v2/em/empy',icon:<MdAdminPanelSettings/>},
    //     {label:'ADD EMPLOYEE', to:'/v2/em/addempy',icon:<BsPersonFillAdd/>},
    //     {label:'ATTENDANCE', to:'/v2/em/attend',icon:<BsPersonFillAdd/>}
    //   ];
  }
  
   
  
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