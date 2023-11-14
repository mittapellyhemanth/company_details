import { useContext, useEffect } from "react"
import DetailsContext from "../../Context/CreateContext"
import axios from "axios"
// /proj/status/:id/:projectName
export default function ProjectView(){
    const { Prodesignation,setProDesignation,ProjectName,setProjectName} = useContext(DetailsContext)
    // useEffect(()=>{
    //     axios.get(`http://localhost:8080/employee/proj/status/:id/${ProjectName}`)
    // })
    return <>
    <h1>{Prodesignation}</h1>
    <h1>{ProjectName}</h1>
    </>
}