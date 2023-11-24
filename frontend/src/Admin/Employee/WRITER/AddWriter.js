import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";

export default function AddWriter() {
  //send url,naviga,seo
  const AdminId = localStorage.getItem("unique_id");
  const data = {
    Url: `http://localhost:8080/admin/addWriter/${AdminId}`,
    Navlink: "/v2/writer/wr/empy",
  };

  return (
    <>
      <UseAddEmployee url={data} />
    </>
  );
}
