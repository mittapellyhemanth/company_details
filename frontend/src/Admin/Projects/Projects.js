import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navigate, useNavigate } from "react-router-dom";
import DetailsContext from "../../Context/CreateContext";

export default function Projects(click) {
  const [data, setData] = useState([]);
const { setProDesignation,setProjectName} = useContext(DetailsContext)
  useEffect(()=>{
    setProDesignation('');
    setProjectName("");
  },[setProjectName,setProDesignation])

useEffect(() => {
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key,
    };
    const AdminId = localStorage.getItem('unique_id')
    axios
      .get(`http://localhost:8080/admin/getProject/${AdminId}`, { headers })
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data.data, "got");

          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleClick = (designation,projectName) => {
    // console.log(designation,projectName);
    setProDesignation(designation)
    setProjectName(projectName)
    navigate("/v2/das/pro/view");
  };

  const [name, setName] = useState("");
  // console.log(name);
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
  return (
    <>
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

{!data ? <div className="heading backlink-title">DATA NOT FOUND</div> : (  data.length > 0 ? (data.map((user) => {
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
                        handleClick(
                          user.empyDesignation,user.projectName);
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
                        handleClick(
                          data.empyDesignation,data.projectName);
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
  );
}
