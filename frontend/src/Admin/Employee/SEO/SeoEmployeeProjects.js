import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";

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

  return (
    <>
      <div className="project-status">
        <div className="search-container">
          <div className="search-filter"></div>
          <div className="search-filter"></div>
          <div className="search-filter"></div>
          <div className="search-filter"></div>
        </div>
        <div className="project-status-box">
          {data.map((projectStatus) => (
            <>
              <div className="data-box">
                <a
                  className="backLink"
                  href={projectStatus.BackLink}
                  target="_blank"
                ><span className="backLink-text">{projectStatus.BackLink}</span>
                  
                </a>
                <div className="div-time">

                <span className="time-taken">{projectStatus.TimeTaken}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
