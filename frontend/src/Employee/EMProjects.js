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

  const handleClick = (ProjectName) => {
    const designation = localStorage.getItem('designation')
    localStorage.setItem('ProjectName',ProjectName)
    if(designation === "SEO"){

 return     navigate("/v3/empy/project/post");
    }
    if(designation === "WRITER"){

  return    navigate("/v3/empy/writer/project/post");
    }
    if(designation === "DESIGNER"){

     return navigate("/v3/empy/designer/project/post");
    }
  };


  const [name, setName] = useState("");
  console.log(name);
  const handleSearch = async () => {

      await axios
        .get(`http://localhost:8080/admin/oneProject/${name}`)
        .then((result) => {
          // console.log(result);
          setData(result.data.data);
        }).catch((Err)=>{
setData('') 
        })
    
   
  };

  return  <>
      <div className="bg-img">
        <div className="card-top">
        <div className="search">
            <input
              placeholder="ENTER  PROJECT  NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="btn-search"
              onClick={() => {
                handleSearch();
              }}
            >
              SEARCH
            </button>
          </div>
         






{!data ? <div className="heading backlink-title">DATA NOT FOUND</div> : (  data.length > 0 ? 
         (data.map((user) => {
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
                      handleClick(user.projectName);
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
          }))
        :
        (
          
          <Card
          style={{ width: "18rem", textAlign: "center" }}
          key="card"
          className="person-card"
        >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body key="body">
            <Card.Title
              onClick={() => {
                handleClick(data.projectName);
              }}
              key={data.projectName}
            >
              {data.projectName}
            </Card.Title>

            {/* <button className='person-card-view'   key={user.phoneNumber}>View</button> */}
          </Card.Body>
        </Card>
        )
        
        )}
        </div>
      </div>
    </>
  
}
