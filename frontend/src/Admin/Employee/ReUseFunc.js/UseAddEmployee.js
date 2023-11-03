import { useContext } from "react";
// import ReUseForm from "../../Forms/ReUseForm";
// import DetailsContext from "../../Context/CreateContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../../../Context/CreateContext";
import ReUseForm from "../../../Forms/ReUseForm";

export default function UseAddEmployee({url}){
console.log(url,'url');

   
    const { err, setError } = useContext(DetailsContext);
  const input = [
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


  const onSubmit = async (formData,urlData) => {

    console.log(formData,'form',urlData,'dd');
    
    try {
      await axios
        .post(urlData.Url, formData )
        .then((res) => {
          if (res.data.error) {
            setError(res.data.error);
          }else{
            return navigate(urlData.Navlink)
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
          urlData={url}
        />
      </div>
    </>
  );
}