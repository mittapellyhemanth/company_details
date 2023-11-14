import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";

export default function DesignerProjectStatus() {
  const [data, setData] = useState([]);

  const projectEmplyId = localStorage.getItem("projEmId");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/designer/getPosts/${projectEmplyId}`)
      .then((res) => {
        console.log(res.data.result ,"emply res");
        setData(res.data.result);
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
          <div className="img-bg">

          {data.map((img) => (
            <>
              <div className="data-box-img">
                <div>

                <img className="img" src={`http://localhost:8080/designer/images/${img.PostImage}`}
                  alt="user-img" />
                </div >
               <div className="title">{img.ImgTitle}</div>
                {/* <span className="time-taken">{projectStatus.TimeTaken}</span> */}
              </div>
            </>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
