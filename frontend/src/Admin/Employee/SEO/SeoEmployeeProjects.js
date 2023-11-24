import React, { useContext, useEffect, useState } from "react";
import DetailsContext from "../../../Context/CreateContext";
import axios from "axios";
import "../../../Styles/ProjectStatus.css";
import Filters from "../ReUseFunc.js/Filters";
import { json, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import SeoStatus from "../../ProjectStatus/SeoStatus";
import SeoFilter from "../../../Filters/SeoFilter";

export default function SeoEmployeeProject() {
  const [data, setData] = useState([]);
  const { setProjectStatusData } = useContext(DetailsContext);
  const projectEmplyId = localStorage.getItem("projEmId");
  setProjectStatusData("");
  useEffect(() => {
    // const projectName= localStorage.getItem('ProjectName')
    axios
      .get(`http://localhost:8080/employee/proj/status/${projectEmplyId}`)
      .then((res) => {
        // console.log(res.data.data, "emply res");
        setData(res.data.data);
      });
  }, [projectEmplyId]);

  const navigate = useNavigate("");
  const onSearchGet = (searchData) => {
    const result = searchData;
    const encryptData = CryptoJS.AES.encrypt(
      JSON.stringify(result),
      "employeeSeoSearch"
    ).toString();
    localStorage.setItem("seoSearch", encryptData);
    navigate("/v2/em/search/results");
  };
  return (
    <>
      <div className="project-status">
        <div className="filters">
          <SeoFilter searchGet={onSearchGet} />
        </div>
        <SeoStatus data={data} />
      </div>
    </>
  );
}
