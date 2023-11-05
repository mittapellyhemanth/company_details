import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsContext from '../Context/CreateContext';
import '../Styles/EmpyCards.css'
export default function Admins(){
  const [data,setData] = useState([])
  const{auth,setAuth}=useContext(DetailsContext);
  // setAuth(headers)
  const key = localStorage.getItem("token");
  const headers = {
    Authorization: key
  };
  
  useEffect(()=>{
    
    axios.get('http://localhost:8080/superAdmin/admins',{headers})
    .then((res) => {
      // console.log(res)
      if (res.status === 200) {
        console.log(res.data.data,'got');
              
        setData(res.data.data);
          
      }
  })
  .catch((err) => console.log(err));
     
  },[auth]);
  const handleClick = (id)=>{

  }
    return <>
    {
      data.map((user)=>{
      return  <>
      <div >
      <Card style={{ width: '18rem' ,textAlign:"center"}} key={user.Name} className='person-card'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body key='body'>
          <Card.Title key={user.Name}>{user.Name}</Card.Title>
          
         
          <button className='person-card-view' onClick={()=>{handleClick(user._id)}} key={user.phoneNumber}>View</button>
        </Card.Body>
      </Card>
      </div>
         
        </>
       
      })
    }
     

  
    </>
}
