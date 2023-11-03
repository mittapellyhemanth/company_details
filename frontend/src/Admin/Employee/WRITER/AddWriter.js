
import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";


export default function AddWriter(){
    //send url,naviga,seo
    const data = {Url : 'http://localhost:8080/admin/addWriter', Navlink : '/v2/writer/wr/addempy'}
  
    
    return <>
    
    <UseAddEmployee url={data}/>
    </>
}