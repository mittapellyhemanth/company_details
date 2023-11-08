import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../Styles/EmpyCards.css'
import AdminView from './AdminView';
import { useNavigate } from 'react-router-dom';
export default function Admins(){
  const [data,setData] = useState([])
  // const [clicked,setClicked] = useState(false)
  // const [userId,setUserId] = useState('')
  // const{auth,setAuth}=useContext(DetailsContext);
  // setAuth(headers)
  
 
   
   
   
  useEffect(()=>{
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key
    };
    const superAdminId = localStorage.getItem("unique_id")
    console.log(superAdminId,'super');
    axios.get(`http://localhost:8080/superAdmin/admins/${superAdminId}`,{headers})
    .then((res) => {
      // console.log(res)
      if (res.status === 200) {
        console.log(res.data.data,'got');
        
        setData(res.data.data);
          
      }
  })
  .catch((err) => console.log(err));
  },[])

const navigate = useNavigate()


 const handleClick =(id)=>{
   localStorage.setItem('empyId',id)
   navigate('/v1/admin/view')
  }


  
     

 
    return <>

<div className='bg-img'>
<div className='card-top'>

  
{
  data.map((user)=>{
  return  <>
  <div className='super-container' >
    <div className='super'>
    <Card style={{ width: '18rem' ,textAlign:"center"}} key={user.Name} className='person-card'>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body key='body'>
      <Card.Title onClick={()=>{handleClick(user._id)}} key={user.Name} className='user-text'>{user.Name}</Card.Title>
      
     
      {/* <button className='person-card-view' }key={user.phoneNumber}>View</button> */}
    </Card.Body>
  </Card>
    </div>
  
  </div>
     
    </>
   
  })
}
 
 </div>
      </div>
    
  
    </>
}
