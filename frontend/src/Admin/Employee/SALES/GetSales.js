
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function GetSales() {
  const AdminId = localStorage.getItem('unique_id')
  let URL =  `http://localhost:8080/admin/getSales/${AdminId}`;
  
  // let getOneUrl = "http://localhost:8080/admin/getOneWriter"
  let  Navlink = "/v2/sales/project/status"
  return (
    <>
      <GetEmply url={URL} NavigateUrl={Navlink} type="SALES"/>
    </>
  );
}
