import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import "../Styles/Login.css";
import './Form.css'

export default function ReUseForm({ Method, inputs, onSubmit, btnText,urlData }) {
  console.log(urlData,'data');
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(urlData,'ff');
    onSubmit({...formData},urlData);
  };

  return (
    <>
      <Form
        method={Method}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {inputs.map((input) => (
          <div key={input.name} className={input.clasename}>
            <Form.Group className="mb-3 input-text" controlId={`formGroup${input.name}`}>
              {input.type !== "select" && (
              <Form.Control
              
                  type={input.type}
                 
                  placeholder={input.placeholder}
                  name={input.name}
                  value={formData[input.name] || ""}
                  onChange={handleChange}
                  required={input.required}
                  />
                  )}
                  </Form.Group>
              <div className="select-my">

              {input.type === "select" && (
                <Form.Group as={Col} controlId="formGridState  mb-3 input-text " >
          
                <Form.Select name={input.name} value={formData[input.name] || ""} onChange={handleChange}>
                <option disabled value='' >select</option>
                {input.options.map((option, index) => (
                    <option key={index}  name={option.name}  value={option.value}>{option.value}</option>
                  ))}
                </Form.Select>
              </Form.Group>
               
              )}
              </div>
          </div>
        ))}
        <button type="submit">{btnText}</button>
      </Form>
    </>
  );
}
