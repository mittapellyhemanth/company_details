import { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DetailsContext from "../Context/CreateContext";
import Button from "react-bootstrap/Button";

import "./AppLeave.css";

export default function Application() {
  // console.log(url,'url');

  const { err, setError } = useContext(DetailsContext);
  const [leaveSubmit, setLeaveSubmit] = useState(4);
  let inputs = [];

 
  inputs.push(
    {
      type: "text",
      placeholder: "REASON FOR ABSENT",
      name: "Name",
      required: false,
    },

    {
      type: "date",
      placeholder: "CHOOSE DATE",
      name: "phoneNumber",
      required: false,
    },
    {
      type: "number",
      placeholder: "NO OF DAYS",
      name: "NoOfDays",
      required: false,
    },
    {
      type: "number",
      placeholder: "TOTAL NO. OF DAYS",
      name: "TotalNoOfDays",
      required: false,
    }
  );
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key,
    };
    // console.log({...formData},{headers},url.Url);
    try {
      await axios.post("", { ...formData }, { headers }).then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          return navigate("");
        }
        // console.log(res);
      });
    } catch (error) {
      // console.log(error,'error');
    }
  };

  return (
    <>
      <div className="form-addpro">
        <div className="form-addpro-box">
          <div>{err && <h6 className="error">{err}</h6>}</div>

          <Form  method="POST" onSubmit={onSubmit} encType="multipart/form-data">
            
              
          {[...Array(4)].map((_, index) => (
 <Row className="mb-3">
 {inputs.map((input) => (

   <Form.Group as={Col} controlId="formGridCity">
     <Form.Control
      type={input.type}
      placeholder={input.placeholder}
      name={`${input.name}_${index}`} // to keep name as unique added index
      required={input.required}
      value={formData[`${input.name}_${index}`] || ''}
      onChange={handleChange}
     />
   </Form.Group>

 ))}
</Row>
          ))}
           
          

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
