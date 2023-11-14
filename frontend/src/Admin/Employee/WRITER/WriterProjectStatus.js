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
