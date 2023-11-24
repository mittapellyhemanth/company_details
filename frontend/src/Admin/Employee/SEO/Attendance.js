import GetEmply from "../ReUseFunc.js/GetEmp";

export default function SeoAttendance() {
  const emplyId = localStorage.getItem("unique_id");

  let URL = `http://localhost:8080/admin/getSeo/${emplyId}`;
  const NavUrl = "/v2/em/attendance/seo/status";

  return (
    <>
      <GetEmply url={URL} NavigateUrl={NavUrl} />
    </>
  );
}
