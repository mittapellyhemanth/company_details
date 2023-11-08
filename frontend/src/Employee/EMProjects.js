import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navigate, useNavigate } from "react-router-dom";

export default function EMProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const key = localStorage.getItem("token");
    // const headers = {
    //   Authorization: key,
    // };
    let id = localStorage.getItem('unique_id')
    
    // console.log(employeeId,"empyId");
    console.log(id);
    axios
      .get(`http://localhost:8080/employee/details/${id}`)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          console.log(res.data, "got",res);

          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/v3/empy/project/post");
  };

  return  <>
      <div className="bg-img">
        <div className="card-top">
          {data.map((user) => {
            return (
              <>
                <Card
                  style={{ width: "18rem", textAlign: "center" }}
                  key="card"
                  className="person-card"
                >
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body key="body">
                    <Card.Title
                      onClick={() => {
                        handleClick();
                      }}
                      key={user.projectName}
                    >
                      {user.projectName}
                    </Card.Title>

                    {/* <button className='person-card-view'   key={user.phoneNumber}>View</button> */}
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  
}
