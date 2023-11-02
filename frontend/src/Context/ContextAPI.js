import { useState } from "react";
import DetailsContext from "./CreateContext";


export default function ContextAPI({ children }) {
  const [flag,setFlag] = useState(false)
  const [result, setResult] = useState({})
  let [personLogin, setPersonLogin] = useState("");

let [personName,setPersonName] = useState("")
// const [input,setInput] = useState('')
  

  const contextValue = {
    flag,setFlag,
    result,
    setResult,
    personLogin,
    setPersonLogin,
    personName,
    setPersonName
    
  };

  return <DetailsContext.Provider value={contextValue}>{children}</DetailsContext.Provider>;
}