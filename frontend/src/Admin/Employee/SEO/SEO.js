import { useContext, useEffect } from "react";
import UserName from "../../../Functions/UserName";

import EmpDashboard from "../ReUseFunc.js/EmpDashboard";
import DetailsContext from "../../../Context/CreateContext";
// import DetailsContext from "../../../Context/CreateContext";


export default function SEO(){
 
  const{designation, setDesignation} = useContext(DetailsContext);
    
  useEffect(()=>{
 setDesignation('seo')
  },[setDesignation]);

  
    return (
      <>
        <EmpDashboard />
      </>
    );
}