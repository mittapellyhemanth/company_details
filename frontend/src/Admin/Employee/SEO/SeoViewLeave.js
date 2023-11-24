import axios from "axios";
import CryptoJS from "crypto-js";
import { useState } from "react";
import ViewLeaves from "../ReUseFunc.js/ViewLeaves";

export default function SeoViewLeave() {
  // const[status,setStatus] = useState('')
  const encryptedProjectData = localStorage.getItem("getLeave");
  const decryptedProjectDatay = CryptoJS.AES.decrypt(
    encryptedProjectData,
    "leaveKey"
  ).toString(CryptoJS.enc.Utf8);
  const LeavesData = JSON.parse(decryptedProjectDatay);
  // console.log(projectStatusData);
  //   const handleGoBack = () => {
  //     window.history.back(); // Go back to the previous page
  //   };
  //   const handleApprove = async(_id)=>{
  // const result = await axios.put(`http://localhost:8080/leave/seo/status/${_id}`,{Status:"Approved"})
  // if(result){
  //     console.log(result);
  //     setStatus('Leave Approved')
  // }
  //   }
  return (
    <>
      {/* <div className="project-status">
        <div className="project-view">
            {status && <h2 className="sucess">{status}</h2>}
          <h2>LEAVE DETAILS</h2>

          <div className="project-details">
            <div className="project-content-box">
              <div className="project-matter">
                <label><strong>EMPLOYEE NAME : </strong></label>
                <div className="proj-date">{projectStatusData.EmployeeName}</div>
              </div>
              <div className="project-matter">
                <label><strong>EMPLOYEE ID : </strong></label>
                <div className="proj-date">{projectStatusData.employeeId}</div>
              </div>
              <div className="project-keyword">
                <label><strong>REASON  :</strong> </label>
                <div className="project-link proj-link">
                 
                    {projectStatusData.ReasonForAbsent}
                 
                </div>
              </div>
              
              <div className="project-keyword">
               
                <label><strong> START DATE :</strong> </label>
                <div className=" proj-keyword">{projectStatusData.ChooseDate}</div>
              </div>
              <div className="project-matter">
                
                <label><strong>NUM OF DAYS :</strong> </label>
                <div className="proj-type">{projectStatusData.NoOfDays}</div>
              </div>
             
              
            
             
            </div>
            {status ?(<> <button className="cancel-btn" onClick={handleGoBack}>Go Back</button></>):(<>
            <button className="cancel-btn" onClick={handleGoBack}>REJECT</button>
            <button className="cancel-btn " onClick={()=>handleApprove(projectStatusData._id)}>APPROVE</button>
            </>)}
          </div>
          
        </div>
      </div> */}
      <ViewLeaves data={LeavesData} />
    </>
  );
}
