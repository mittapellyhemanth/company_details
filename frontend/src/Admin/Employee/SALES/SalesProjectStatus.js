import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Filters from "../ReUseFunc.js/Filters";

export default function SalesProjectStatus() {
  const [data, setData] = useState([]);

  const projectEmplyId = localStorage.getItem("projEmId");
  const ProjectName = localStorage.getItem('ProjectName')
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/sales/proj/status/${projectEmplyId}/${ProjectName}`)
      .then((res) => {
        console.log(res,ProjectName, "emply res");
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
            <div className="heading-style">ENQUIRY</div>
            <div className="heading-style">SOURCE</div>
            <div className="heading-style">STATUS</div>
            <div className="heading-style">REMARK</div>
            <div className="heading-style">DATE</div>
           
          </div>
          {data.length === 0 ? (
        <div  className="heading backlink-title">NO DATA FOUND</div>
        )
          :
          
          data.map((projectStatus) => (
            <>
              <div className="data-box">
                <span className="time-taken">{projectStatus.ProjectTitle}</span>
                <span className="time-taken">{projectStatus.Enquiry}</span>

                <span className="time-taken">{projectStatus.Source}</span>
                <span className="time-taken">{projectStatus.Status}</span>
                <span className="time-taken">{projectStatus.Remark}</span>
                <span className="time-taken">{projectStatus.Date}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
