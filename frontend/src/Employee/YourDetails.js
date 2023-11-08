import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import DetailsContext from "../Context/CreateContext";
import './Yourdetails.css'
import axios from "axios";

export default function Details() {
  
  // const { designation } = useContext(DetailsContext);
  


  const [getOneData, setOneData] = useState([]);

const getDetails = async(url,token)=>{
  const key = localStorage.getItem("token");
  const headers = {
    Authorization: key
  };
  axios
    .get(url,token)
    .then((res) => {
      if (res.status === 200) {
        return  setOneData( res.data.data)
      ;
      }
    })
    .catch((err) => console.log(err));

}
  useEffect(() => {
    const key = localStorage.getItem("token");
    const id = localStorage.getItem("Id");
   const type = localStorage.getItem('designation')

   console.log(id,'id',type,key);
    const headers = {
      Authorization: key
    };
    if(type === 'SEO'){
      getDetails(`http://localhost:8080/admin/getOneSeo/${id}`,{headers})
    
    }
    if(type === 'WRITER'){
      getDetails(`http://localhost:8080/admin/getOneWriter/${id}`,{headers})
    
    }
    if(type === 'DESIGNER'){
      getDetails(`http://localhost:8080/admin/getOneDesigner/${id}`,{headers})
    
    }
    if(type === 'SEO'){
      getDetails(`http://localhost:8080/admin/getOneSeo/${id}`,{headers})
    
    }
  },[setOneData]);

  return (
    <>
      <div className="view">
        <Card className="your-card">
         
          <Card.Body>
            <Card.Title className="your-title">{getOneData.designation}</Card.Title>
          </Card.Body>
          <ListGroup className="">
          <ListGroup.Item>
              <label>ID:</label>
              <span>{getOneData.unique_id}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Name:</label>
              <span>{getOneData.Name}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Email:</label>
              <span>{getOneData.email}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              {/* <label>Password:</label>
              <span>{getOneData.phoneNumber}</span> */}
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Address:</label>
              <span>{getOneData.address}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>phoneNumber:</label>
              <span>{getOneData.phoneNumber}</span>
            </ListGroup.Item>
          </ListGroup>
         
        </Card>
      </div>
    </>
  );
}
