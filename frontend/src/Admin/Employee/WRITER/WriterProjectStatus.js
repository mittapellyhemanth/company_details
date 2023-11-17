import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import { useNavigate } from "react-router-dom";

export default function WriterProjectStatus() {
  const {setProjectStatusData} = useContext(DetailsContext)
  const [data, setData] = useState([]);
 const projectEmplyId = localStorage.getItem("projEmId")
 console.log(projectEmplyId,"id");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/writer/proj/status/${projectEmplyId}`)
      .then((res) => {
        console.log(res, "emply res");
        setData(res.data.data);
      });
  }, [projectEmplyId]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchData = async () => {
    try {
      await axios
        .get(
          `http://localhost:8080/admin/writer/search/date?fromDate=${fromDate}&toDate=${toDate}`
        )
        .then((result) => {
          if (result.status === 200) {
            // console.log(result);
            setData(result.data.data);
          }
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const navigate = useNavigate('')
  const handleClick =(i)=>{
    console.log(i,'INDEX');
   
    setProjectStatusData(data[i])
navigate('/v2/writer/view/project/status')
  }
  return (
    <>
      <div className="project-status">
     <div className="filter">
          <form onSubmit={handleSubmit} className="form-filter">
            <label>
              From Date:
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </label>
            <label>
              To Date:
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </label>
            <button type="submit">Fetch Data</button>
          </form>
        </div>
       
        <div className="project-status-box">
        <div className="data-box-heading">
            <div className="writer-heading-style-title">CONTENT TITLE</div>
            <div className="writer-heading-style-link">CONTENT LINK</div>
            
            <div className="writer-heading-style-view">VIEW</div>
           
          </div>
          
          {data.length === 0 ? (
        <div  className="heading backlink-title">NO DATA FOUND</div>
        )
          :
          data.map((projectStatus,i) => (
            <>
             <div className="data-box">
                <span className="time-taken">{projectStatus.ContentTitle}</span>
                <span className="time-taken"> <a  href={projectStatus.ContentLink}target="_blank">{projectStatus.ContentLink}</a></span>

                <span className="time-taken view" onClick={()=>handleClick(i)}>View</span>
              
               
              </div>

             
            </>
          ))}
        </div>
      </div>
    </>
  );
}
