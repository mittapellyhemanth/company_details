import GetEmply from "../ReUseFunc.js/GetEmp";

export default function GetDesigner() {
  const AdminId = localStorage.getItem("unique_id");
  let URL = `http://localhost:8080/admin/getDesigner/${AdminId}`;
  const navUrl = "/v2/design/project/status";
  return (
    <>
      <GetEmply url={URL} NavigateUrl={navUrl} type="DESIGNER" />
    </>
  );
}
