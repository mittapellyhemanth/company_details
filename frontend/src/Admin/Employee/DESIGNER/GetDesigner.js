
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function GetDesigner() {

  let URL =  "http://localhost:8080/admin/getDesigner";
  
  return (
    <>
      <GetEmply url={URL} />
    </>
  );
}
