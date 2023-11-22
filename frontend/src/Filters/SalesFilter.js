import { useState } from "react";
import FilterForm from "./FilterForm";
import axios from "axios";

export default function SalesFilter({searchGet,comesFrom}) {
  console.log(searchGet,comesFrom,"comesss");
  // const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    Date: "",
   
    clientName: "",
    ProjectTitle: "",
    Name: ""
  });
// const [result,setResult] = useState([])
  const inputs = [
      {
        type: "date",
        placeholder: "DATE",
        name: "Date",
        required: false,
      },
      
      {
        type: "text",
        placeholder: "CLIENT WISE",
        name: "clientName",
        required: false,
      },
      {
        type: "text",
        placeholder: "PROJECT NAME",
        name: "ProjectTitle",
        required: false,
      },
      {
        type: "text",
        placeholder: "EMPLOYEE NAME",
        name: "Name",
        required: false,
      },
    ];

  

const onSubmit = async(formData)=>{
  console.log(formData,"gggggg",formData.Name);
  //:Date?/:Type?/:clientName?/:ProjectTitle?/:Name?
  if (!formData.Date &&  !formData.clientName && !formData.ProjectTitle && !formData.Name) {
    setError("At least one parameter is required for search");
    return;
  }
  // try {
  //   const response = await axios.get(`http://localhost:8080/filter/sales/search`, { params: formData });

  //   if (response.status === 200) {
  //     if(response.data.error){
        
  //         setError(response.data.error)
          setFormData('')
  //       }else{
          searchGet(formData)
          
  //         console.log(response.data.data);
  //         setFormData('')
  //         setError('')
       
  //       }
      
      const queryParams = new URLSearchParams(formData).toString();
      // console.log(queryParams,"eee");
     let newUrl = ``;
     if(comesFrom){
      newUrl = `/v2/das/sales-your-search-route?${queryParams}`;
    }else{
       newUrl = `/v2/sales/your-search-route?${queryParams}`;

     }
      window.history.pushState({ path: newUrl }, '', newUrl);
    
  // } catch (error) {
  //   setError('Error fetching data');
  //   setSearchResult([]);
  // }
}

return (
    <div>
      { error && <p  className="error">{error}</p>}
      <FilterForm inputs={inputs} onSubmit={onSubmit} formData={formData} setFormData={setFormData} />
    
     
    </div>
  );
}
