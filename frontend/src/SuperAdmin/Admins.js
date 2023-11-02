import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Admins(){
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/superAdmin/admins')
    .then((res) => {
      // console.log(res)
      if (res.status === 200) {
        console.log(res.data.data,'got');
              
        setData(res.data.data);
          
      }
  })
  .catch((err) => console.log(err));
     
  },[]);
  const handleClick = (id)=>{

  }
    return <>
    {
      data.map((user)=>{
      return  <>
         <Card style={{ width: '18rem' ,textAlign:"center"}} key='card'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body key='body'>
          <Card.Title key={user.Name}>{user.Name}</Card.Title>
          
         
          {/* <button style={{ width: '4rem',borderRadius:"15px",borderColor:"black" ,textAlign:"center"}} onClick={()=>{handleClick(user._id)}} key={user.phoneNumber}>View</button> */}
        </Card.Body>
      </Card>
        </>
       
      })
    }
     

  
    </>
}
