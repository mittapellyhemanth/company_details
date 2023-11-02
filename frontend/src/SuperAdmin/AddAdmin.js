import React, { useContext } from "react";
import ReUseForm from "../Forms/ReUseForm";
import axios from "axios";
import DetailsContext from "../Context/CreateContext";
import "../Styles/SuperHome.css";

export default function AddAdmin() {
  const { err, setError } = useContext(DetailsContext);
  const input = [
    {
      type: "text",
      placeholder: "ADMIN NAME",
      name: "adminName",
      required: true,
    },
    { type: "text", placeholder: "ADDRESS", name: "address", required: true },
    {
      type: "text",
      placeholder: "PHONE NUMBER ",
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
    },
  ];

  const onSubmit = async ({ ...formData }) => {
    try {
      await axios
        .post("http://localhost:8080/superAdmin/addAdmin", { ...formData })
        .then((res) => {
          if (res.data.error) {
            setError(res.data.error);
          }
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
