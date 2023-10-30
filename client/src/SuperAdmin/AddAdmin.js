import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function AddAdmin() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({
    adminName: "",
    address: "",
    phoneNumber: "",
    email: '',
    password: '',
  });
  const { adminName, address, phoneNumber, email, password } = data

  const onchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setData({ ...data, [name]: value });

  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(...data);
    setValidated(true);
  };
  return <>
    <Form method="POST" encType="multipart/form-data" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">

          <Form.Control
            required
            type="text"
            placeholder="ADMIN NAME"
            name="adminName"
            value={adminName}
            onchange={onchange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="ADDRESS"
            name="address"
            value={address}
            onchange={onchange}
          />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="PHONE NUMBER "
            name="phoneNumber"
            value={phoneNumber}
            onchange={onchange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="email"
            placeholder="EMAIL ADDRESS "
            name="email"
            value={email}
            onchange={onchange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="password"
            placeholder="PASSWORD"
            name="password"
            value={password}
            onchange={onchange}
          />
        </Form.Group>

      </Row>



      <Button type="submit">Submit form</Button>
    </Form>



  </>
}
