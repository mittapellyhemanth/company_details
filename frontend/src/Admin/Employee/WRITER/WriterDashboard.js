import { useContext, useEffect } from "react";
import EmpDashboard from "../ReUseFunc.js/EmpDashboard";

import DetailsContext from "../../../Context/CreateContext";

export default function WriterDashboard() {
  const { designation, setDesignation } = useContext(DetailsContext);

  useEffect(() => {
    setDesignation("writer");
  }, [setDesignation]);
  console.log(designation);

  return (
    <>
      <EmpDashboard />
    </>
  );
}
