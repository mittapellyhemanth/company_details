import { useState } from "react";
import DetailsContext from "./CreateContext";


export default function ContextAPI({ children }) {
  const [flag,setFlag] = useState(false)
  const [projectStatusData,setProjectStatusData] = useState({})
  const [result, setResult] = useState({})
  const [err,setError] = useState('')
  let [personLogin, setPersonLogin] = useState("");
 
  const[designation,setDesignation]=useState('')  
  const [designationType , setDesignationType ] = useState('')
  const [empyId , setEmpyId] = useState('')
let [personName,setPersonName] = useState("")

const[getOneData,setGetOneData] = useState([])
// const [input,setInput] = useState('')
const[ProjectName,setProjectName] = useState('')
  const contextValue = {
    projectStatusData,setProjectStatusData,
   ProjectName,setProjectName, flag,setFlag,err,setError,designationType , setDesignationType,empyId , setEmpyId,designation,setDesignation,getOneData,setGetOneData,
    result,
    setResult,
    personLogin,
    setPersonLogin,
    personName,
    setPersonName
    
  };

  return <DetailsContext.Provider value={contextValue}>{children}</DetailsContext.Provider>;
}