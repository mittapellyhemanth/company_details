import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
import CryptoJS from "crypto-js";
import SalesStatus from "../../ProjectStatus/SalesStatus";
import SalesFilter from "../../../Filters/SalesFilter";

export default function ProjectSalesStatus() {
  const [ProjectData, setProjectData] = useState([]);
  const EmplyId = localStorage.getItem("projEmId");
  const decryptedProjectEmId = CryptoJS.AES.decrypt(
    EmplyId,
    "projectEmplyIdsecretKey"
  ).toString(CryptoJS.enc.Utf8);
  const projectEmplyId = JSON.parse(decryptedProjectEmId);

  const projeName = localStorage.getItem("projName");
  const decryptedProjectName = CryptoJS.AES.decrypt(
    projeName,
    "projectNamesecretKey"
  ).toString(CryptoJS.enc.Utf8);
  const projectName = JSON.parse(decryptedProjectName);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/admin/SalesOneProject/${projectEmplyId}/${projectName}`
      )
      .then((res) => {
      
        setProjectData(res.data.data);
       
      });
  }, [projectEmplyId, projectName]);

  const navigate = useNavigate("");
  const onSearchGet = (searchData) => {
    const result = searchData;
    const encryptData = CryptoJS.AES.encrypt(
      JSON.stringify(result),
      "employeeSalesSearch"
    ).toString();
    localStorage.setItem("SalesSearch", encryptData);
    navigate("/v2/das/sales/search/results");
  };
  return (
    <>
      <div className="project-status">
        <div className="filters">
          <SalesFilter searchGet={onSearchGet} comesFrom="ProjectWriter" />
        </div>
        <SalesStatus data={ProjectData} comesFrom="Sales" />
      </div>
    </>
  );
}
