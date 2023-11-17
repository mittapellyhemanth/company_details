import React,{ useState} from "react";


import axios from "axios";

import ProjectSendForm from "../ProjectSendForm";

export default function SalesProjectSubmit() {
  const[sucess,setSucess] = useState('');
  const date = localStorage.getItem("date");

    const [formData, setFormData] = useState(
        // [...Array(4)].map(() => ({
        
       {   Source: "",
          Enquiry: "",
          Remark: "",
          Status: "",
          Date:date
        }
        // }))
      );
  const inputs = [
    {
      type: "text",
      placeholder: "SOURCE",
      name: "Source",
      required: false,
    },
    {
      type: "text",
      placeholder: "ENQUIRY",
      name: "Enquiry",
      required: false,
    },
    
    {
      type: "select",

      name: "Status",
      required: false,
      options: [
        { value: "Sold", name: "Status" },
        { value: "UnSold", name: "Status" },
        
      ],
    },

    {
      type: "text",
      placeholder: "REMARK",
      name: "Remark",
      required: false,
    },
   
  ];
  //
  const employID = localStorage.getItem('unique_id')
  const projectName= localStorage.getItem('ProjectName')
 const URL = `http://localhost:8080/employee/sales/project/submit/${employID}/${projectName}`

  const onSubmit = async (formData,url,TIMETAKEN) => {
    console.log(formData,url);
    const dataToSend = { ...formData, TimeTaken: TIMETAKEN };
  try {
    // Send POST request to the server
    await axios.post(url,dataToSend);
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
