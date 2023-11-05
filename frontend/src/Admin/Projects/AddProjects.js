import React, { useContext } from "react";
import ReUseForm from "../../Forms/ReUseForm";
import "./Project.css";

import UserName from "../../Functions/UserName";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../Context/CreateContext";

export default function AddProjects() {
  UserName();
  const { err, setError } = useContext(DetailsContext);
  const input = [
    {
      type: "text",
      placeholder: "PROJECT NAME",
      name: "projectName",
      required: true,
    },
    {
      type: "text",
      placeholder: "WEBSITEADDRESS",
      name: "websiteAddress",
      required: true,
    },
    {
      type: "text",
      placeholder: "CLIENT NAME",
      name: "clientName",
      required: true,
    },
    {
      type: "date",
      placeholder: "START DATE",
      name: "startDate",
      required: true,
    },
    {
      type: "number",
      placeholder: "MONTHLY PRICE",
      name: "monthlyPrice",
      required: true,
    },
    {
      type: "text",
      placeholder: "EMPLOYEE ALLOTED",
      name: "employeeAlloted",
      required: true,
    },
  ];
 
  
const navigate = useNavigate()

  const onSubmit = async( formData ) => {
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key
    };
    try {
      await axios
        .post("http://localhost:8080/admin/addProject", formData,{headers})
        .then((res) => {
          console.log(res);
          if (res.data.error) {
           return setError(res.data.error);
          }
          navigate('/v2/das/proj')
          // console.log(res);
        });
    } catch (error) {
      // console.log(error,'error');
    }
  };
  return (
    <>

<div className="form-addpro">
  <div className="form-addpro-box">
    <div>

      {err && <h6 className="error">{err}</h6>}
  </div>
  <ReUseForm
    Method="POST"
    inputs={input}
    onSubmit={onSubmit}
    btnText="Submit"
    />
</div>
  </div>
 
    </>
  );
}
