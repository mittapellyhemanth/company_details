import React,{useState} from "react";


import axios from "axios";

import ProjectSendForm from "../ProjectSendForm";

export default function WriterProjectSubmit() {
  const[sucess,setSucess] = useState('')
  const [formData, setFormData] = useState(
    [...Array(4)].map(() => ({
    
      ContentTitle: "",
      ContentLink: "",
      Type: "",
      Plagiarism: "",
      Ai: "",
      WordCount: "",
    }))
  );
  const inputs = [
    {
      type: "text",
      placeholder: "CONTENT TITLE",
      name: "ContentTitle",                            
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
      type: "number",
      placeholder: "PLAGIARISM",
      name: "Plagiarism",
      required: false,
    },
    {
      type: "number",
      placeholder: "AI",
      name: "Ai",
      required: false,
    },
    {
        type: "number",
        placeholder: "WORD COUNT",
        name: "WordCount",
        required: false,
      },
  ];
  const employID = localStorage.getItem('unique_id')
 const URL = `http://localhost:8080/employee/writer/project/submit/${employID}`

  const onSubmit = async (formData,url) => {
    console.log(formData,url);
  try {
    // Send POST request to the server
    const response = await axios.post(url,formData);
    setSucess("Posted Sucessfully")
    // console.log("Projects successfully added:", response.data);
   
  } catch (error) {
    setSucess("")
    
    console.error("Error adding projects:", error);
    
  }

  };

  
  return (
    <>
   {sucess ? <div className="sucess">{sucess}</div>:"" }
   <ProjectSendForm Method="POST" inputs={inputs} onSubmit={onSubmit} btnText='submit' urlData={URL} formData={formData} setFormData={setFormData}/>
    </>
  );
}
