import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
import SalesStatus from "../../ProjectStatus/SalesStatus";

export default function SalesProjectStatus() {
  const [data, setData] = useState([]);
  
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
const{setProjectStatusData} = useContext(DetailsContext)
setProjectStatusData('')

const projectEmplyId = localStorage.getItem("projEmId");
const ProjectName = localStorage.getItem("ProjectName");

  useEffect(() => {
    fetchData(projectEmplyId);
  }, [projectEmplyId]);
  
  const fetchData = async (employeeId) => {
    try {
      const res = await axios.get(`http://localhost:8080/employee/sales/proj/status/${employeeId}`);
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDateFilter = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/admin/search/date?fromDate=${fromDate}&toDate=${toDate}`);
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };
  
  return (
    <div className="project-status">
      <div className="filter">
        <form onSubmit={handleDateFilter} className="form-filter">
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
<SalesStatus data={data} />
    
    </div>
  );
}
