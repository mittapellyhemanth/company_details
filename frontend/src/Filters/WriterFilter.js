import { useState } from "react";
import FilterForm from "./FilterForm";
import axios from "axios";

export default function WriterFilter({searchGet,comesFrom}) {
  // const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    Date: "",
    Type: "",
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
        type: "select",
  
        name: "Type",
        required: false,
        options: [
          { value: "INFOGRAPHIC", name: "Type" },
          { value: "TESTIMONIALS", name: "Type" },
          { value: "WEB CONTENT", name: "Type" },
          { value: "CASE STUDIES", name: "Type" },
          { value: "SOCIAL MEDIA", name: "Type" },
          { value: "PRESENTATION", name: "Type" },
          { value: "BLOG CONTENT", name: "Type" },
          { value: "Q&A CONTENT", name: "Type" },
          { value: "EMAIL CONTENT", name: "Type" },
          { value: "PR CONTENT", name: "Type" },
          { value: "PRODUCT CONTENT", name: "Type" },
          { value: "META CONTENT", name: "Type" },
          { value: "INTERACTIVE CONTENT", name: "Type" },
          { value: "VIDEO CONTENT", name: "Type" },
          { value: "WEBINAR CONTENT", name: "Type" },
          { value: "FAQ CONTENT", name: "Type" },
          { value: "LEGAL CONTENT", name: "Type" },
          { value: "NEWS ARTICLE", name: "Type" },
          { value: "CREATIVE WRITING", name: "Type" },
          { value: "TECHNICAL WRITING", name: "Type" },
          { value: "GHOST WRITING", name: "Type" },
          { value: "ACADEMIC WRITING", name: "Type" },
          { value: "COPY WRITING", name: "Type" },
          { value: "BRAND JOURNALISM", name: "Type" },
          { value: "SCREEN WRITING", name: "Type" }
        ],
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
  if (!formData.Date && !formData.Type && !formData.clientName && !formData.ProjectTitle && !formData.Name) {
    setError("At least one parameter is required for search");
    return;
  }
  // try {
  //   const response = await axios.get(`http://localhost:8080/filter/writer/search`, { params: formData });

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
      console.log(queryParams,"eee");
      let newUrl=``;
      if(comesFrom){

        newUrl = `/v2/das/writer-your-search-route?${queryParams}`;
      }else{
        
        newUrl = `/v2/writer/your-search-route?${queryParams}`;
      }
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
//   } catch (error) {
//     setError('Error fetching data');
//     setSearchResult([]);
//   }
// }

return (
    <div>
      {error && <p className="error">{error}</p>}
      <FilterForm inputs={inputs} onSubmit={onSubmit} formData={formData} setFormData={setFormData} />
    
     
    </div>
  );
}
