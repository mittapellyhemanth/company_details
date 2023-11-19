import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
import CryptoJS from 'crypto-js';
import SalesStatus from "../../ProjectStatus/SalesStatus";

export default function ProjectSalesStatus(){
  const{setProjectStatusData} = useContext(DetailsContext)

  const encryptedProjectData = localStorage.getItem('salesProject');
  const decryptedProjectDatay = CryptoJS.AES.decrypt(encryptedProjectData, "SalessecretKey").toString(CryptoJS.enc.Utf8);
  const ProjectData = JSON.parse(decryptedProjectDatay);
  // console.log(typeof(storedArray),storedArray,"ProjectData");
return<>
 <div className="project-status">

<SalesStatus data={ProjectData}/>
 </div>
</>
}