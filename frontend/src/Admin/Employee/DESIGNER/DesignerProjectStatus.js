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
        console.log(res.data.result, "emply res");
        setData(res.data.result);
      });
  }, [projectEmplyId]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchData = async () => {
    try {
      await axios
        .get(
          `http://localhost:8080/admin/designer/search/date?fromDate=${fromDate}&toDate=${toDate}`
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
            <div className="backlink-title">IMAGE</div>
            <div className="backlink-title">IMAGE TITLE</div>
           
            {/* <div className="timetaken-title">
          DETAILS
          </div> */}
          </div>
          
          <div className="img-bg">
            {data.length === 0 ? (
              <div className="heading-designer">NO DATA FOUND</div>
            ) : (
              data.map((img) => (
                <>
                  <div className="data-box-img">
                    <div>
                      <img
                        className="img"
                        src={`http://localhost:8080/designer/images/${img.PostImage}`}
                        alt="user-img"
                      />
                    </div>
                    <div className="title">{img.ImgTitle}</div>
                    {/* <span className="time-taken">{projectStatus.TimeTaken}</span> */}
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
