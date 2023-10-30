import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


export default function AddAdmin() {
 
  const [data, setData] = useState({
    adminName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const { adminName, address, phoneNumber, email, password } = data;

  const onchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
   
  };
  return (
    <>
 <Form method="POST" action='#' encType="multipart/form-data" onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control
          required
            type="text"
            placeholder="ADMIN NAME"
            name="adminName"
            value={adminName}
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
          required
            type="text"
            placeholder="ADDRESS"
            name="address"
            value={address}
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
          required
            type="text"
            placeholder="PHONE NUMBER "
            name="phoneNumber"
            value={phoneNumber}
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control
          required
            type="email"
            placeholder="EMAIL ADDRESS "
            name="email"
            value={email}
            onChange={onchange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control
          required
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={password}
              onChange={onchange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
}
