import UserName from "../../../Functions/UserName";
import NavbarScroll from "../../../components/Navbar/NavbarScroll";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";


export default function SEO(){
  
    UserName()
console.log('Seo');
    const sidebarData = [
      {label:'EMPLOYEE', to:'/v2/em/empy',icon:<MdAdminPanelSettings/>},
      {label:'ADD EMPLOYEE', to:'/v2/em/addempy',icon:<BsPersonFillAdd/>},
      {label:'ATTENDANCE', to:'/v2/em/attend',icon:<BsPersonFillAdd/>}
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