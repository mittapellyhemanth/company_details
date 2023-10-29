import { useState } from "react";
import DetailsContext from "./CreateContext";


export default function ContextAPI({ children }) {
  

  const [personLogin, setPersonLogin] = useState("");



  

  const contextValue = {
    personLogin,
    setPersonLogin,
    
  
    
  };

  return <DetailsContext.Provider value={contextValue}>{children}</DetailsContext.Provider>;
}