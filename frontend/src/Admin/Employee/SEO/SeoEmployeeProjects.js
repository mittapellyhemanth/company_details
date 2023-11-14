import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Filters from "../ReUseFunc.js/Filters";

export default function SeoEmployeeProject() {
  const [data, setData] = useState([]);

  const projectEmplyId = localStorage.getItem("projEmId");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/proj/status/${projectEmplyId}`)
      .then((res) => {
        console.log(res.data.data, "emply res");
        setData(res.data.data);
      });
  }, [projectEmplyId]);

  // const handleClick = (id)=>{
  //   console.log(id);
  //   axios.get(`http://localhost:8080/employee/proj/view/${id}`).then((res) => {
  //     console.log(res, "emply res");
  //    ;
  //   });
  // }
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
            <div className="backlink-title">TITLE</div>
            <div className="backlink-title">BACKLINK</div>
            <div className="timetaken-title">TIME TAKEN</div>
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
                <div className="div-time">
                  <span className="time-taken">
                    {projectStatus.ProjectTitle}
                  </span>
                </div>

                <a
                  className="backLink"
                  href={projectStatus.BackLink}
                  target="_blank"
                >
                  <span className="backLink-text">
                    {projectStatus.BackLink}
                  </span>
                </a>
                <div className="div-time">
                  <span className="time-taken">{projectStatus.TimeTaken}</span>
                </div>
                {/* <div className="div-view">

<span onClick={()=>{handleClick(projectStatus.
_id)}}>View</span>
</div> */}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
