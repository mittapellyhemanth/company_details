import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Projects(){

  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/admin/getProject')
    .then((res) => {
      // console.log(res)
      if (res.status === 200) {
        console.log(res.data.data,'got');
              
        setData(res.data.data);
          
      }
  })
  .catch((err) => console.log(err));
     
  },[])
    return <>
    {
      data.map((user)=>{
      return  <>
         <Card style={{ width: '15rem', height:'7rem' }} key='card'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body key='body'>
          <Card.Title key={user.projectName}>{user.projectName}</Card.Title>
         
          <Button variant="primary" key={user.phoneNumber}>View</Button>
        </Card.Body>
      </Card>
        </>
       
      })
    }
    
  
    </>
}
