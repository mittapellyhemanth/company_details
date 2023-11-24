import React, {  useEffect, useState } from "react";

import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Attendance from "../Attendance";

export default function DesignerAttendanceStatus(){
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
     
    </>
  );

}