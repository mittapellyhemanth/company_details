import { useContext, useEffect, useState } from "react";
import DetailsContext from "../../Context/CreateContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// /proj/status/:id/:projectName
export default function ProjectView() {
    const [data,setData] = useState({})
      const { ProjectData,designationType,projectView,setProjectView} = useContext(DetailsContext)
      console.log(ProjectData,designationType);
    //   useEffect(()=>{
    //       const addedAdminId = localStorage.getItem('unique_id')
    //       axios.get(`http://localhost:8080/admin/getProject/${addedAdminId}/${ProjectName}`).then((res)=>{
    //         setData(res.data.data);
    //         console.log(res.data.data);
    //       })
    //  },[ProjectName])
    const navigate = useNavigate()
    const handleClick =(i)=>{
      console.log(i,'INDEX');
     
      setProjectView(data[i])
  navigate('/v2/writer/view/project/status')
    }
  return (
    <>
      <div className="project-status">
       
         {
          ProjectData.map((projectStatus,i) => (
            <>
             <div className="data-box">
                <span className="time-taken">{projectStatus.ContentTitle}</span>
                <span className="time-taken"> <a  href={projectStatus.ContentLink}target="_blank">{projectStatus.ContentLink}</a></span>

                <span className="time-taken view" onClick={()=>handleClick(i)}>View</span>
              
               
              </div>

             
            </>
          ))}
        </div>
    
    </>
  );
}
