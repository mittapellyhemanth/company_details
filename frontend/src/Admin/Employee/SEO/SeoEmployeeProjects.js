import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Filters from "../ReUseFunc.js/Filters";
import { useNavigate } from "react-router-dom";

export default function SeoEmployeeProject() {
  const [data, setData] = useState([]);
const {setProjectStatusData} = useContext(DetailsContext)
  const projectEmplyId = localStorage.getItem("projEmId");
  setProjectStatusData('')
  useEffect(() => {

    axios
      .get(`http://localhost:8080/employee/proj/status/${projectEmplyId}`)
      .then((res) => {
        console.log(res.data.data, "emply res");
        setData(res.data.data);
      });
  }, [projectEmplyId]);

 
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchData = async () => {
    try {
      await axios
        .get(
          `http://localhost:8080/admin/search/date?fromDate=${fromDate}&toDate=${toDate}`
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
    // const Data = data[]
    setProjectStatusData(data[i])
navigate('/v2/em/view/project/status')
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
            <div className="heading-style">TITLE</div>
            <div className="heading-style">BACKLINK</div>
            <div className="heading-style">TIME TAKEN</div>
            <div className="heading-style">VIEW</div>
            {/* <div className="heading-style">KEYWORD</div>
            <div className="heading-style">TYPE</div>
            <div className="heading-style">STATUS</div>
            <div className="heading-style">REMARK</div> */}
          
            {/* <div className="heading-style">SUBMIT DATE</div> */}
          </div>
          
          {data.length === 0 ? (
        <div  className="heading backlink-title">NO DATA FOUND</div>
        )
          :
          data.map((projectStatus,i) => (
            <>
             <div className="data-box">
                <span className="time-taken">{projectStatus.ProjectTitle}</span>
                <span className="time-taken"> <a  href={projectStatus.BackLink}target="_blank">{projectStatus.BackLink}</a></span>

                <span className="time-taken">{projectStatus.TimeTaken}</span>
                <span className="time-taken view" onClick={()=>handleClick(i)}>View</span>
              
               
              </div>

             
            </>
          ))}
        </div>
      </div>
    </>
  );
}
