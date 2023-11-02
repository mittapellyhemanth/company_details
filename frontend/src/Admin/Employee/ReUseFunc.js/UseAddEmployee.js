


import React, { useContext } from "react";
import UserName from "../../../Functions/UserName";
import DetailsContext from "../../../Context/CreateContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReUseForm from "../../../Forms/ReUseForm";


export default function UseAddEmployee() {
  UserName();
  const { err, setError } = useContext(DetailsContext);
  const input = [
    {
      type: "text",
      placeholder: "ADMIN NAME",
      name: "Name",
      required: true,
    },
    {
      type: "text",
      placeholder: "ADDRESS",
      name: "address",
      required: true,
    },
    {
      type: "text",
      placeholder: "PHONE NUMBER",
      name: "phoneNumber",
      required: true,
    },
    {
      type: "email",
      placeholder: "EMAIL ADDRESS",
      name: "email",
      required: true,
    },
    {
      type: "password",
      placeholder: "PASSWORD",
      name: "password",
      required: true,
    }
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
          navigate('/v2/proj')
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
