import React, { useContext, useEffect, useState } from "react";

import ReUseForm from "../../Forms/ReUseForm";
import "../../Styles/Login.css";

import DetailsContext from "../../Context/CreateContext";
// import LoginCheck from "./LoginCheck";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarScroll from "../Navbar/NavbarScroll";


export default function Login() {

  const { personLogin ,setPersonName,setFlag } = useContext(DetailsContext);
const[err,setError] = useState('')
  const navigate = useNavigate();
useEffect(()=>{
  setPersonName(' ');
  setFlag(false);
},[setPersonName,setFlag]);

  const input = [
    { type: 'email', placeholder: 'USER NAME', name: 'email', required: true },
    { type: 'password', placeholder: 'PASSWORD', name: 'password', required: true }
  ];

  const LoginCheck = async (formData,serverURL)=>{
    try {
        const res = await axios.post(serverURL, formData); // fetching the post url and form data
        
        localStorage.setItem("userName", res.data.user.Name);
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("unique_id",res.data.user.unique_id)
      //  localStorage.setItem("personLogin", "SuperAdmin");
        localStorage.setItem("Id", res.data.user._id);
        localStorage.setItem("designation", res.data.user.designation);
     
      
        return res;    // returning response 
      } catch (error) {
    
        return error; 
      }
};

  const navigation = async (formData , url, serverURL) => {
    try {
      let res = await LoginCheck(formData , serverURL)
  
      if (res.status === 200) {
        
        navigate(url);
      }
      if (res.status === 400) {
       
        setError(res.message);
      }
      
    } catch (error) {
      // console.log(error);
    }
  };

  const submitLogin = async (formData ) => {
  
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; 



let date = year+"-"+month+"-"+day
let LoginTime = hours + ":" + minutes + ":" + seconds + " " + ampm
    if (personLogin === "SuperAdmin") {
    
      
      let url = "/v1"
      let serverURL = "http://localhost:8080/superAdmin/login"
      return await navigation(formData , url, serverURL)
    };
    if (personLogin === "Admin") {
      let url = "/ad/dashboard"
      let serverURL = "http://localhost:8080/admin/login"
      return await navigation(formData , url, serverURL)
    };
    if (personLogin === "Employee") {
      localStorage.setItem("date",date)
      localStorage.setItem("LogTime",LoginTime)
      let url = "/v3/empy/"
      let serverURL = "http://localhost:8080/employee/login"
      return await navigation(formData , url, serverURL)
    };

  };
  
  
  return <>
  
    <div>
     
     <NavbarScroll/>  
    </div>
    <div className="login-parent-cont">
    <div className="title">
      <h1>{personLogin}</h1>
    </div>
    <div className="Login-container">
      <div className="login-text">
        <p>Enter your credentials</p>
      </div>
      <div className="Login">
        <ReUseForm Method='POST' inputs={input} onSubmit={submitLogin} btnText='Sign In' />
      </div>
    </div>
    </div>
   

  </>
}
