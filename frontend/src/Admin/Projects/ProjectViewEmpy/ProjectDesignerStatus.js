import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
import CryptoJS from 'crypto-js';

import DesignerStatus from "../../ProjectStatus/DesignerStatus";

export default function ProjectDesignerStatus(){
  const{setProjectStatusData} = useContext(DetailsContext)

  const encryptedProjectData = localStorage.getItem('DesignerProject');
  const decryptedProjectDatay = CryptoJS.AES.decrypt(encryptedProjectData, "DesignersecretKey").toString(CryptoJS.enc.Utf8);
  const ProjectData = JSON.parse(decryptedProjectDatay);
  // console.log(typeof(storedArray),storedArray,"ProjectData");
return<>
 <div className="project-status">

<DesignerStatus data={ProjectData}/>
 </div>
</>
}