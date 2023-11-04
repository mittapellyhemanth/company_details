
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function Employee() {

  let URL =  "http://localhost:8080/admin/getSeo";
  
  return (
    <>
      <GetEmply url={URL} />
    </>
  );
}
