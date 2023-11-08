
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function GetDesigner() {
  const AdminId = localStorage.getItem('unique_id')
  let URL =  `http://localhost:8080/admin/getDesigner/${AdminId}`;
  
  return (
    <>
      <GetEmply url={URL} />
    </>
  );
}
