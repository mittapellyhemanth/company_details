import EmpDashboard from "../ReUseFunc.js/EmpDashboard";
import SEO from "../SEO/SEO";

export default function WriterDashboard(){
    const{designation, setDesignation} = useContext(DetailsContext);
    
    useEffect(()=>{

        setDesignation('writer')
    },[setDesignation])
    console.log(designation);

    return <>
   <EmpDashboard />
    </>
}