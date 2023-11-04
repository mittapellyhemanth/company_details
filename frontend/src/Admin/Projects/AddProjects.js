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
    // console.log(formData );
    try {
      await axios
        .post("http://localhost:8080/admin/addProject", formData)
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
      {err && <h6 className="error">{err}</h6>}

<div className="Login">
  <ReUseForm
    Method="POST"
    inputs={input}
    onSubmit={onSubmit}
    btnText="Submit"
  />
</div>
    </>
  );
}
