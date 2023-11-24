import GetEmply from "../ReUseFunc.js/GetEmp";

export default function AttendanceWriter() {
  const emplyId = localStorage.getItem("unique_id");

  let URL = `http://localhost:8080/admin/getWriter/${emplyId}`;
  const NavUrl = "/v2/writer/attend/status";

  return (
    <>
      <GetEmply url={URL} NavigateUrl={NavUrl} />
    </>
  );
}
