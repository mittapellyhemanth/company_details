import { useContext, useState } from "react";
// import ReUseForm from "../../Forms/ReUseForm";
// import DetailsContext from "../../Context/CreateContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
// import ReUseForm from "../../../Forms/ReUseForm";
import Form from "react-bootstrap/Form";
import "./addEmpy.css";
export default function UseAddEmployee({ url }) {
  // console.log(url,'url');

  const { err, setError } = useContext(DetailsContext);
  const inputs = [
    {
      type: "text",
      placeholder: "EMPLOYEE NAME",
      name: "Name",
      required: true,
    },
    { type: "text", placeholder: "ADDRESS", name: "address", required: true },
    {
      type: "text",
      placeholder: "PHONE NUMBER ",
      name: "phoneNumber",
      required: true,
    },
    {
      type: "email",
      placeholder: "EMAIL ADDRESS",
      name: "email",
      required: true,
    },
    {
      type: "password",
      placeholder: "PASSWORD",
      name: "password",
      required: true,
    },
    {
      type: "text",
      placeholder: "AADHAAR",
      name: "aadhaar",
      required: true,
    },
  ];
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
      Authorization: key
    };
// console.log({...formData},{headers},url.Url);
    try {
      await axios.post(url.Url, { ...formData },{headers}).then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          return navigate(url.Navlink);
        }
        // console.log(res);
      });
    } catch (error) {
      // console.log(error,'error');
    }
  };

  return (
    <>
      <div className="use-Form">
        <Form
          className="form-addEmployee"
          method="POST"
          onSubmit={(e, url) => onSubmit(e, url)}
          encType="multipart/form-data"
        >
          <div className="form-box">
            {err ? (
              <>
                <div className="err">{err}</div>
              </>
            ) : (
              ""
            )}

            {inputs.map((input) => (
              <div key={input.name} className="">
                <Form.Group
                  className="mb-3 input-holder"
                  controlId={`formGroup${input.name}`}
                >
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
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </>
  );
}
