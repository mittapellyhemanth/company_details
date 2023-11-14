import React,{useEffect, useState} from "react";


import axios from "axios";

import ProjectSendForm from "../ProjectSendForm";

export default function SeoProjectSubmit() {
  const[sucess,setSucess] = useState('');
  const date = localStorage.getItem("date");

    const [formData, setFormData] = useState(
        // [...Array(4)].map(() => ({
        
       {   BackLink: "",
          Keyword: "",
          Type: "",
          Status: "",
          Remark: "",
          TimeTaken: "",
        Date:date
        }
        // }))
      );
  const inputs = [
    {
      type: "text",
      placeholder: "BACKLINK",
      name: "BackLink",
      required: false,
    },
    {
      type: "text",
      placeholder: "KEYWORD",
      name: "Keyword",
      required: false,
    },
    {
      type: "select",

      name: "Type",
      required: false,
      options: [
        { value: "num1", name: "Type" },
        { value: "num2", name: "Type" },
        { value: "num3", name: "Type" },
      ],
    },
    {
      type: "select",

      name: "Status",
      required: false,
      options: [
        { value: "num1", name: "Status" },
        { value: "num2", name: "Status" },
        { value: "num3", name: "Status" },
      ],
    },

    {
      type: "text",
      placeholder: "REMARK",
      name: "Remark",
      required: false,
    },
    {
      type: "text",
      placeholder: "TIME TAKEN",
      name: "TimeTaken",
      required: false,
    },
  ];
  //
  const employID = localStorage.getItem('unique_id')
  const projectName= localStorage.getItem('ProjectName')
 const URL = `http://localhost:8080/employee/project/submit/${employID}/${projectName}`

  const onSubmit = async (formData,url,TIMETAKEN) => {
    console.log(formData,url);
    const dataToSend = { ...formData, TimeTaken: TIMETAKEN };
  try {
    // Send POST request to the server
    const response = await axios.post(url,dataToSend);
    setSucess('Posted Successfully');
    

    // console.log("Projects successfully added:", response.data);
   
  } catch (error) {
    console.error("Error adding projects:", error);
    
  }

  };

  
  return (
    <>
     {sucess ? <div className="sucess">{sucess}</div>:"" }
   <ProjectSendForm Method="POST" inputs={inputs} onSubmit={onSubmit} btnText='submit' urlData={URL} formData={formData} setFormData={setFormData} />
    </>
  );
}
