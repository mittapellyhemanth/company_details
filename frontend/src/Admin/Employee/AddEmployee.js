import { useContext } from "react";
import ReUseForm from "../../Forms/ReUseForm";
import DetailsContext from "../../Context/CreateContext";
import axios from "axios";

export default function AddEmployee(){

    // employeeName: { type: String, required: true},
    // address: { type: String, required: true },
    // phoneNumber: { type: Number, required: true },
    // email: { type: String, required: true },
    // password: { type: String, required: true },
    // aadhaar: { type: Number, required: true },
    // unique_id:{ type: String}
    const { err, setError } = useContext(DetailsContext);
  const input = [
    {
      type: "text",
      placeholder: "ADMIN NAME",
      name: "employeeName",
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

  const onSubmit = async ({ ...formData }) => {
    try {
      await axios
        .post("http://localhost:8080/admin/addEmployee", { ...formData })
        .then((res) => {
          if (res.data.error) {
            setError(res.data.error);
          }
          // console.log(res);
        });
    } catch (error) {
      // console.log(error,'error');
    }
  };

  return (
    <>
      {err && <h6 className="error">{err}</h6>}

      <div className="Login">
        <ReUseForm
          Method="POST"
          inputs={input}
          onSubmit={onSubmit}
          btnText="Submit"
        />
      </div>
    </>
  );
}