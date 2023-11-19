import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Filters from "../ReUseFunc.js/Filters";
import { json, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import SeoStatus from "../../ProjectStatus/SeoStatus";


export default function SeoEmployeeProject() {
  const [data, setData] = useState([]);
const {setProjectStatusData} = useContext(DetailsContext)
  const projectEmplyId = localStorage.getItem("projEmId");
  setProjectStatusData('')
  useEffect(() => {
    // const projectName= localStorage.getItem('ProjectName')
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
<SeoStatus data={data} />
       

     
      </div>
    </>
  );
}
