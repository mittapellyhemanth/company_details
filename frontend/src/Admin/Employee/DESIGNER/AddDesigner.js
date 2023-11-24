import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";

export default function AddDesigner() {
  //send url,naviga,seo
  const AdminId = localStorage.getItem("unique_id");
  const data = {
    Url: `http://localhost:8080/admin/addDesigner/${AdminId}`,
    Navlink: "/v2/design/de/empy",
  };

  return (
    <>
      <UseAddEmployee url={data} />
    </>
  );
}
