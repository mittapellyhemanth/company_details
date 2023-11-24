import GetEmply from "../ReUseFunc.js/GetEmp";

export default function SalesAttendance() {
  const emplyId = localStorage.getItem("unique_id");

  let URL = `http://localhost:8080/admin/getSales/${emplyId}`;
  const NavUrl = "/v2/sales/attendance/sales/status";

  return (
    <>
      <GetEmply url={URL} NavigateUrl={NavUrl} />
    </>
  );
}
