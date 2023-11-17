import { useContext } from "react";
import UserName from "../../../Functions/UserName";
import NavbarScroll from "../../../components/Navbar/NavbarScroll";
import Sidebar from "../../../components/Sidebar/Sidebar";

import DetailsContext from "../../../Context/CreateContext";



export default function EmpDashboard(){
  UserName()

  const{designationType} = useContext(DetailsContext);
  let sidebarData = [];
  if (designationType === "seo") {
     sidebarData = [
        {label:'EMPLOYEE', to:'/v2/em/empy'},
        {label:'ADD EMPLOYEE', to:'/v2/em/addempy'},
        {label:'ATTENDANCE', to:'/v2/em/attendance/status'}
      ];
 }
   if (designationType === "designer") {
    sidebarData = [
        {label:'EMPLOYEE', to:'/v2/design/de/empy'},
        {label:'ADD EMPLOYEE', to:'/v2/design/de/addempy'},
        {label:'ATTENDANCE', to:'/v2/design/de/attend'}
      ];
  }
   if (designationType === "writer") {
    sidebarData = [
      {label:'EMPLOYEE', to:'/v2/writer/wr/empy'},
      {label:'ADD EMPLOYEE', to:'/v2/writer/wr/addempy'},
      {label:'ATTENDANCE', to:'/v2/writer/wr/attend'}
    ];
  } 
  if (designationType === "sales") {
    sidebarData = [
        {label:'EMPLOYEE', to:'/v2/sales/sa/empy'},
        {label:'ADD EMPLOYEE', to:'/v2/sales/sa/addempy'},
        {label:'ATTENDANCE', to:'/v2/sales/sa/attend'}
      ];
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