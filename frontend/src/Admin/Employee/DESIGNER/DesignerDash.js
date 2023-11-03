import { useContext, useEffect } from "react";

import DetailsContext from "../../../Context/CreateContext";
import EmpDashboard from "../ReUseFunc.js/EmpDashboard";


export default function DesignerDash(){
    const{designation, setDesignation} = useContext(DetailsContext);
    
    useEffect(()=>{

        setDesignation('designer')
    },[setDesignation])
    console.log(designation);
    return <>
    <EmpDashboard />
    </>
}