import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import '../../Styles/Login.css'
export default function Login(){

    const [data,setData] = useState({
        email:"",
        password:""
    });

const {email,password} = data;
const onchange = (e)=>{
e.preventDefault();
   const {name,value} = e.target
    setData({...data,[name]:value});
    
}
 const submitLogin = (e)=>{
    e.preventDefault();
    console.log(data);
 }
  return (
    <div className="Login">
  <Form method="POST" action="/SuperAdmin" encType="multipart/form-data" onSubmit={submitLogin}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onchange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onchange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
     <button type="submit">submit</button>
      </Form.Group>
    </Form>
    </div>
    
  );

}

