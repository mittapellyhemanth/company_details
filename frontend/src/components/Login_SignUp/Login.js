import React, { useContext, useEffect } from "react";

import ReUseForm from "../../Forms/ReUseForm";
import "../../Styles/Login.css";

import DetailsContext from "../../Context/CreateContext";
import LoginCheck from "./LoginCheck";

import { useNavigate } from "react-router-dom";
import NavbarScroll from "../Navbar/NavbarScroll";


export default function Login() {

  const { personLogin ,setPersonName,flag,setFlag} = useContext(DetailsContext);
  const navigate = useNavigate();
useEffect(()=>{
  setPersonName(' ');
  setFlag(false);
},[setPersonName])
  const input = [
    { type: 'email', placeholder: 'USER NAME', name: 'email', required: true },
    { type: 'password', placeholder: 'PASSWORD', name: 'password', required: true }
  ]

  const navigation = async ({ ...formData }, url, serverURL) => {
    try {
      let res = await LoginCheck({ ...formData }, serverURL)
      // console.log(res,'res');
      if (res.status === 200) {
        navigate(url);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const submitLogin = async ({ ...formData }) => {
    if (personLogin === "SuperAdmin") {
      // console.log(formData,'form');
      let url = "/dashboard"
      let serverURL = "http://localhost:8080/superAdmin/login"
      return await navigation({ ...formData }, url, serverURL)
    };
    if (personLogin === "Admin") {
      let url = "/dashboard"
      let serverURL = "http://localhost:8080/admin/login"
      return await navigation({ ...formData }, url, serverURL)
    };
    if (personLogin === "Employee") {
      let url = "/dashboard"
      let serverURL = "http://localhost:8080/admin/addEmployee"
      return await navigation({ ...formData }, url, serverURL)
    };

  }
  
  
  return <>
    <div>
     
     <NavbarScroll/>  
    </div>
    <div className="title">
      <h1>{personLogin}</h1>
    </div>
    <div className="Login-container">
      <div className="login-text">
        <p>Enter your credentials to access your account</p>
      </div>
      <div className="Login">
        <ReUseForm Method='POST' inputs={input} onSubmit={submitLogin} btnText='Sign In' />
      </div>
    </div>

  </>
}
