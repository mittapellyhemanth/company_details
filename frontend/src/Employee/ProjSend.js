import React from "react";


import axios from "axios";

import ProjectSendForm from "./ProjectSendForm";

export default function ProjSend() {
 
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
  const employID = localStorage.getItem('unique_id')
 const URL = `http://localhost:8080/employee/project/submit/${employID}`

  const onSubmit = async (formData,url) => {
    
  try {
    // Send POST request to the server
    const response = await axios.post(url,formData);
    console.log("Projects successfully added:", response.data);
   
  } catch (error) {
    console.error("Error adding projects:", error);
    
  }

  };

  
  return (
    <>
   <ProjectSendForm Method="POST" inputs={inputs} onSubmit={onSubmit} btnText='submit' urlData={URL} />
    </>
  );
}
