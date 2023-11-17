import { useContext, useEffect, useState } from "react";
import DetailsContext from "../../Context/CreateContext";
import axios from "axios";
// /proj/status/:id/:projectName
export default function ProjectView() {
    const [data,setData] = useState({})
      const { ProjectName} = useContext(DetailsContext)
      useEffect(()=>{
          const addedAdminId = localStorage.getItem('unique_id')
          axios.get(`http://localhost:8080/admin/getProject/${addedAdminId}/${ProjectName}`).then((res)=>{
            setData(res.data.data);
            console.log(res.data.data);
          })
     },[ProjectName])
  return (
    <>
      <div className="project-status">
        <div className="project-view">
         
          <h2>{data.projectName}</h2>
          <div className="project-box">
            <div className="content-box">
                
            <strong>CLIENT NAME :  </strong>
            <div>{data.clientName}</div>
            </div>
          
          <div className="content-box">
            <strong>WEBSITE : </strong>
            <div className="weblink"><a href={data.websiteAddress} >{data.websiteAddress}</a></div>
          </div>
          <div className="content-box">
          <strong >EMPLOYEE ALLOTED : </strong>
            <div>{data.employeeAlloted}</div>
          </div>
          <div className="content-box">
          <strong>EMPLOYEE ID : </strong>
            <div>{data.employID}</div>
          </div>
          <div className="content-box">
          <strong>DESIGNATION : </strong>
            <div>{data.empyDesignation}</div>
          </div>
          <div className="content-box">
          <strong>START DATE : </strong>
            <div>{data.startDate}</div>
          </div>
          <div className="content-box">
          <strong>MONTHLY PRICE : </strong>
            <div>{data.monthlyPrice} rs</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
