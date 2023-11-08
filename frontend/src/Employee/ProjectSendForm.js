import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

export default function ProjectSendForm({Method,
  inputs,
  onSubmit,
  btnText,
  urlData,}) {
  const [formData, setFormData] = useState(
    [...Array(4)].map(() => ({
      BackLink: "",
      Keyword: "",
      Type: "",
      Status: "",
      Remark: "",
      TimeTaken: "",
    }))
  );
  const [err, setError] = useState("")
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const [inputName] = name.split("_");

    setFormData((prevState) => {
      const newState = [...prevState];
      newState[index][inputName] = value;
      console.log(newState, "newstate");

      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData,'formdata');
    let newData = [];
    for (let i = 0; i < formData.length; i++) {
      let obj = formData[i];
      let values = Object.values(obj);
      let totalValues = 0;
      let emptyValues = 0;
      for (let i = 0; i < values.length; i++) {
        // console.log(values[i],i, "prev");
        if (values[i] !== "") {
          totalValues++;
        } else {
          emptyValues++;
        }
      }

      if (emptyValues !== 6 && emptyValues !== 0) {
        return setError("please Check fields");
      }
      if (emptyValues === 0 && totalValues === Object.keys(obj).length) {
        newData.push(formData[i]);
      }
    }
   onSubmit(newData,urlData)
  };
  return (
    <>
      <div className="form-addpro">
        <div className="form-addpro-box">
          <div className="err">{err}</div>

          <Form
            method={Method}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {formData.map((formFields, index) => (
              <Row className="mb-3" key={index}>
                {inputs.map((input) => (
                  <Form.Group
                    as={Col}
                    controlId={`form${input.name}_${index}`}
                    key={input.name}
                  >
                    {input.type === "text" && (
                      <Form.Control
                        type={input.type}
                        placeholder={input.placeholder}
                        name={`${input.name}_${index}`} // For example, "BackLink_0"
                        required={input.required}
                        value={formFields[input.name] || ""}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    )}
                    {input.type === "select" && (
                      <Form.Select
                        name={`${input.name}_${index}`}
                        value={formFields[input.name] || ""}
                        onChange={(e) => handleInputChange(e, index)}
                      >
                        <option disabled value="">
                          Select {input.name}
                        </option>
                        {input.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.value}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  </Form.Group>
                ))}
              </Row>
            ))}
            <Button variant="primary" type="submit">
              {btnText}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
