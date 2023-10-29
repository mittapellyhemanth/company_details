import React, { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import '../../Styles/Login.css'
import NavbarScroll from "../Navbar/NavbarScroll";
import DetailsContext from "../../Context/CreateContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const personLogin = useContext(DetailsContext);
  const [err, SetErr] = useState('')
  const { email, password } = data;
  const onchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setData({ ...data, [name]: value });

  }
  const submitLogin = async (e) => {
    e.preventDefault();
    // console.log("data",personLogin.personLogin);
    if (email === "" || password === "") {
      return SetErr("Email or paasword should not be empty")
    }
    if (personLogin.personLogin === 'Employee') {
      
        await axios.post('http://localhost:8080/admin/addEmployee',{data})
        .then((res) => {

          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.Token); // Modified to get token

          //  console.log(res);
          if (res.status === 200) {
            // console.log(res);

            return navigate('/dashboard')
          }

        })

    .catch((err) => {
      // console.log(err);
      SetErr("Please enter correct Email or password")

    });

      
    }
    if (personLogin.personLogin === 'Admin') {

      
        await axios.post('http://localhost:8080/admin/login', { data })
     .then((res) => {

          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.Token); // Modified to get token

          //  console.log(res);
          if (res.status === 200) {
            // console.log(res);

            return navigate('/dashboard')
          }

        })

    .catch((err) => {
      // console.log(err);
      SetErr("Please enter correct Email or password")

    });



}
if (personLogin.personLogin === 'SuperAdmin') {

  // console.log(data);
  await axios.post('http://localhost:8080/superAdmin/login', { data })
    .then((res) => {

      localStorage.setItem("email", res.data.email);
      localStorage.setItem("token", res.data.Token); // Modified to get token

      //  console.log(res);
      if (res.status === 200) {
        // console.log(res);

        return navigate('/dashboard')
      }

    })

    .catch((err) => {
      // console.log(err);
      SetErr("Please enter correct Email or password")

    });


}
 }
return <>
  <div>
    <NavbarScroll />
  </div>
  <div className="title">
    <h1>{personLogin.personLogin}</h1>
  </div>
  <div className="Login-container">
    <div className="login-text">
      <p>Enter your credentials to access your account</p>

    </div>
    <div className="error">
      {err}
    </div>
    <div className="Login">
      <Form method="POST" encType="multipart/form-data" onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">

          <Form.Control className="placeholder-text" type="email" placeholder="USERNAME" name="email" value={email} onChange={onchange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">

          <Form.Control className="placeholder-text" type="password" placeholder="PASSWORD" name="password" value={password} onChange={onchange} />
        </Form.Group>


        <button className="button" type="submit">SIGN IN</button>


      </Form>
    </div>

  </div>

</>

}

