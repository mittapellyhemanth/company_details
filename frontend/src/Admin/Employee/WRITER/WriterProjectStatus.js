import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";

export default function WriterProjectStatus() {
  
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
        <div className="heading">
            <div className="backlink-title">CONTENT TITLE</div>
            <div className="backlink-title">CONTENT LINK</div>
           
            {/* <div className="timetaken-title">
          DETAILS
          </div> */}
          </div>
          {data.length === 0 ? (
        <div  className="heading backlink-title">NO DATA FOUND</div>
        )
          :
          
          data.map((projectStatus) => (
            <>
              <div className="data-box">
                <span className="time-taken">{projectStatus.ContentTitle}</span>
                <a
                  className="backLink"
                  href={projectStatus.ContentLink}
                  target="_blank"
                >
                  {projectStatus.ContentLink}
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
