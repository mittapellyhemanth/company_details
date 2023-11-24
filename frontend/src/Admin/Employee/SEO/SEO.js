import { useContext, useEffect } from "react";

import EmpDashboard from "../ReUseFunc.js/EmpDashboard";
import DetailsContext from "../../../Context/CreateContext";
// import DetailsContext from "../../../Context/CreateContext";

export default function SEO() {
  const { err, setDesignationType } = useContext(DetailsContext);

  useEffect(() => {
    setDesignationType("seo");
  }, [setDesignationType]);

  return (
    <>
      <EmpDashboard />
    </>
  );
}
