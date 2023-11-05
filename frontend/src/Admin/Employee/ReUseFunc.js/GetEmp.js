import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../../../Styles/EmpyCards.css'
import "../../../Styles/OneView.css";

export default function GetEmply({ url }) {
  const [data, setData] = useState([]);

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

      {data.map((user) => {
        return (
          <>
           <div >
      <Card style={{ width: '18rem' ,textAlign:"center"}} key={user.Name} className='person-card'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body key='body'>
          <Card.Title key={user.Name}>{user.Name}</Card.Title>
          
         
          <button className='person-card-view'  key={user.phoneNumber}>View</button>
        </Card.Body>
      </Card>
      </div>
            
          </>
        );
      })}
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