import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import "../Styles/Login.css";
export default function ReUseForm({ Method, inputs, onSubmit, btnText }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...formData});
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
            <Form.Group className="mb-3" controlId={`formGroup${input.name}`}>
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

              {input.type === "select" && (
                <select
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={formData[input.value] || ""}
                  onChange={handleChange}
                  required={input.required}
                >
                  {input.options.map((option, index) => (
                    <option key={index} value={option.value}></option>
                  ))}
                </select>
              )}
            </Form.Group>
          </div>
        ))}
        <button type="submit">{btnText}</button>
      </Form>
    </>
  );
}
