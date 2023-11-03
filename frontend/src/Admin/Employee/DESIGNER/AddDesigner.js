
import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";


export default function AddDesigner(){
    //send url,naviga,seo
    const data = {Url : 'http://localhost:8080/admin/addDesigner', Navlink : '/v2/design/de/empy'}
  
    
    return <>
    
    <UseAddEmployee url={data}/>
    </>
}