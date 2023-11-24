import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Attendance from "../Attendance";

export default function WriterAttendStatus() {
  const [data, setData] = useState([]);

  const EmplyId = localStorage.getItem("projEmId");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/employe/Attendance/${EmplyId}`)
      .then((res) => {
        // console.log(res.data.data, "emply res");
        setData(res.data.data);
      });
  }, [EmplyId]);

  return (
    <>
      <Attendance data={data} />
      {/* <div className="project-status">
        <div className="dumy-heading">

        <div className="dummy-attend-box">DATE</div>
                <div className="dummy-attend-box">LOGIN TIME</div>
                <div className="dummy-attend-box">LOGOUT TIME</div>
                <div className="dummy-attend-box">TOTAL BREAK</div>
                <div className="dummy-attend-box">WORK TIME</div>
        </div>
        
        <div className="project-status-box">
       
          {data.map((AttendanceStatus) => (
            <>
              <div className="attend-container">
                <div className="attend-box">{AttendanceStatus.Date}</div>
                <div className="attend-box">{AttendanceStatus.LoginTime}</div>
                <div className="attend-box">{AttendanceStatus.LogoutTime}</div>
                <div className="attend-box">{AttendanceStatus.TotalBreak}</div>
                <div className="attend-box">{AttendanceStatus.TotalWorkTime}</div>
              </div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}
