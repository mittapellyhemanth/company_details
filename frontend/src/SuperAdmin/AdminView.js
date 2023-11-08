import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import {  useEffect, useState } from "react";
import axios from "axios";
// import Admins from "./Admins";
// import SuperAdminHome from "./SuperHome";
import {  useNavigate } from "react-router-dom";

import './AdminView.css'
// import DetailsContext from "../Context/CreateContext";

export default function AdminView(){
    console.log('data');
    const [getOneData,setGetOneData]=useState([])
  
   
    
    useEffect(()=>{

      const empyId = localStorage.getItem('empyId')
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key
    };
    axios.get(`http://localhost:8080/superAdmin/admin/view/${empyId}`,{headers})
    .then((res) => {
      
      if (res.status === 200) {
        // console.log(res.data.data,'got');
            
           setGetOneData(res.data.data);
          console.log(res.data.data.Name,'name');
           localStorage.setItem("name",res.data.data.Name);
           localStorage.setItem("address",res.data.data.address);
           localStorage.setItem("email",res.data.data.email);
           localStorage.setItem("phoneNumber",res.data.data.phoneNumber);

      }
  })
  .catch((err) => console.log(err));
   },[])
  
  const navigate =useNavigate();
  const handleEdit =(id)=>{
    
    navigate('/v1/admin/Edit')

  }
const handleCancel = ()=>{
 localStorage.removeItem('name')
  localStorage.removeItem("address");
  localStorage.removeItem("email");
  localStorage.removeItem("phoneNumber");
  localStorage.removeItem("empyId");
  navigate('/v1/admins')
}
const handleDelete =()=>{
  // const key = localStorage.getItem("token");
  // const headers = {
  //   Authorization: key
  // };
  const empyId = localStorage.getItem('empyId')
  axios.delete(`http://localhost:8080/superAdmin/admin/delete/${empyId}`)
  .then((res) => {
    
    if (res.status === 200) {
      // console.log(res.data.data,'got');
          
       navigate('/v1/admins')

    }
})
.catch((err) => console.log(err));
}
    return<>
   
     
        <div className="view">
        <Card className="your-card">
         
          <Card.Body>
            <Card.Title className="your-title">{getOneData.designation}</Card.Title>
          </Card.Body>
         
          <ListGroup.Item className="unerLine">
              <label>ID:</label>
              <span>{getOneData.unique_id}</span>
            </ListGroup.Item>
            <ListGroup.Item className="unerLine">
              <label>Name:</label>
              <span>{getOneData.Name}</span>
            </ListGroup.Item>
            <ListGroup.Item className="unerLine">
              <label>Email:</label>
              <span>{getOneData.email}</span>
            </ListGroup.Item>
           
            <ListGroup.Item className="unerLine">
              <label>Address:</label>
              <span>{getOneData.address}</span>
            </ListGroup.Item>
            <ListGroup.Item className="unerLine">
              <label>phoneNumber:</label>
              <span>{getOneData.phoneNumber}</span>
            </ListGroup.Item>
        
    <div className="card-btn">
    <div>
<button className="person-card-view bg-wh" onClick={()=>{handleCancel()}}>  Cancel</button>
        </div>
        <div>
<button className="person-card-view bg-blue " onClick={()=>{ handleEdit(getOneData._id)}}>Edit</button>
        </div>
        <div>
<button className="person-card-view bg-red " onClick={()=>{ handleDelete(getOneData._id)}}>Delete</button>
        </div>
    </div>
        </Card>
      </div>
       
     
    </>

}