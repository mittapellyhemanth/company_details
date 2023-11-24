import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";

export default function AddSales() {
  //send url,naviga,seo
  const AdminId = localStorage.getItem("unique_id");
  const data = {
    Url: `http://localhost:8080/admin/addSales/${AdminId}`,
    Navlink: "/v2/sales/sa/addempy",
  };

  return (
    <>
      <UseAddEmployee url={data} />
    </>
  );
}
