import { useState } from "react";
import DetailsContext from "./CreateContext";


export default function ContextAPI({ children }) {
  

  const [personLogin, setPersonLogin] = useState("");

const [personName,setPersonName] = useState("")
// const [input,setInput] = useState('')
  

  const contextValue = {
    personLogin,
    setPersonLogin,
    personName,
    setPersonName
    
  };

  return <DetailsContext.Provider value={contextValue}>{children}</DetailsContext.Provider>;
}