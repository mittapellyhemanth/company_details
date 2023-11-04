
import GetEmply from "../ReUseFunc.js/GetEmp";


export default function GetWriter() {

  let URL =  "http://localhost:8080/admin/getWriter";
  let getOneUrl = "http://localhost:8080/admin/getOneWriter"
  let  Navlink = '/v2/writer/'
  return (
    <>
      <GetEmply url={URL} getOneUrl={getOneUrl} back={Navlink}/>
    </>
  );
}
