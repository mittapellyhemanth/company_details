import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";


import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";



export default function ProjectSendForm({Method,
  inputs,
  onSubmit,
  btnText,
  urlData,
  formData,
  setFormData,
action
}) {
    
  const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; 
      let TIMETAKEN = hours + ":" + minutes + ":" + seconds + " " + ampm
    
  const[err,setErr] = useState('')
  useEffect(()=>{
    setErr("");
  },[setErr])
  const handleInputChange = (e,TIMETAKEN) => {
    const { name, value } = e.target;
    console.log(name,value);
    if (name !== 'TimeTaken') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,'formdata');
    onSubmit(formData,urlData, TIMETAKEN)
  };
  return (
    <>
      <div className="form-addpro">
        <div className="form-addpro-box">
        
         
         {err ?  <div className="err">{err}</div>:"" }

          <Form
            method={Method}
            onSubmit={handleSubmit}
            action={action}
            encType="multipart/form-data"
          >
            {/* {formData.map((formFields, index) => ( */}
              <Row className="mb-3" >
                {inputs.map((input) => (
                  <Form.Group
                    as={Col}
                    controlId={`form${input.name}`}
                    key={input.name}
                  >
                    {( input.name === "TimeTaken")  && (
                      <Form.Control
                      type={input.type}
                      name={`${input.name}`}
                      required={input.required}
                      value={TIMETAKEN}
                      readOnly
                      />
                    )}
                    {((input.name !== "TimeTaken") && ((input.type === "text") || (input.type === "number")))  && (
                      <Form.Control
                        type={input.type}
                        placeholder={input.placeholder}
                        name={`${input.name}`} // For example, "BackLink_0"
                        required={input.required}
                        value={formData[input.name] || ""}
                        onChange={(e) => handleInputChange(e)}
                      />
                    )}
                    {
                      input.type === "file" && (
                        <Form.Control
                        type={input.type}
                       
                        name={`${input.name}`} 
                        required={input.required}
                       onChange={(e) => handleInputChange(e)}
                      />
                      )
                    }
                    {input.type === "select" && (
                      <Form.Select
                        name={`${input.name}`}
                        value={formData[input.name] || ""}
                        onChange={(e) => handleInputChange(e)}
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
            {/* ))} */}
            <button  type="submit" className="submit-btn">
              {btnText}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
