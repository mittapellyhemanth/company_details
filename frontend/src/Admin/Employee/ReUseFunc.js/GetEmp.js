import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../../../Styles/EmpyCards.css'
import "../../../Styles/OneView.css";
import DetailsContext from "../../../Context/CreateContext";

export default function GetEmply({ url }) {
  const [data, setData] = useState([]);
const {  setError} = useContext(DetailsContext)
setError('')
  useEffect(() => {
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key
    };
    axios
      .get(url,{headers})
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data.data, "got");

          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      {/* {flag ? links[0].userName : "woohooweb"} */}

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
      <Card.Title  key={user.Name} className='user-text'>{user.Name}</Card.Title>
      {/* onClick={()=>{handleClick(user._id)}} */}
     
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
  );
}


{/* <Card style={{ width: "15rem", height: "7rem" }} key="card">
             
              <Card.Body key="body">
                <Card.Title key={user._id}>{user.Name}</Card.Title>

                <Button variant="primary" key={user.phoneNumber}>
                  View
                </Button>
              </Card.Body>
            </Card> */}