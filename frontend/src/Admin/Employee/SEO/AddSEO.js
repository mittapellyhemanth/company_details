
import UseAddEmployee from "../ReUseFunc.js/UseAddEmployee";


export default function AddSEO(){
    //send url,naviga,seo
    const data = {Url : 'http://localhost:8080/admin/addSeo', Navlink : '/v2/em/empy'}
  
    
    return <>
    
    <UseAddEmployee url={data}/>
    </>
}