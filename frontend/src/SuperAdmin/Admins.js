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
     
  },[])
    return <>
    {
      data.map((admin)=>{
      return  <>
         <Card style={{ width: '18rem' }} key='card'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body key='body'>
          <Card.Title key={admin.adminName}>{admin.adminName}</Card.Title>
          <Card.Text key={admin.unique_id}>Id:{admin.unique_id}</Card.Text>
          <Card.Text key={admin._id}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" key={admin.phoneNumber}>View</Button>
        </Card.Body>
      </Card>
        </>
       
      })
    }
     {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

  
    </>
}
