
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function Employee() {
  const AdminId = localStorage.getItem('unique_id')
  let URL =  `http://localhost:8080/admin/getSeo/${AdminId}`;
  
  return (
    <>
      <GetEmply url={URL} />
    </>
  );
}
