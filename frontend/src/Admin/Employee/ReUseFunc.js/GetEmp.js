import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../../Styles/EmpyCards.css";
import "../../../Styles/OneView.css";
import DetailsContext from "../../../Context/CreateContext";
import { useNavigate } from "react-router-dom";

export default function GetEmply({ url, NavigateUrl, type }) {
  const [data, setData] = useState([]);
const [back,setBack] = useState(false)

  const { setError } = useContext(DetailsContext);
  setError("");
  useEffect(() => {
    const key = localStorage.getItem("token");
    const headers = {
      Authorization: key,
    };
    axios
      .get(url, { headers })
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          console.log(res.data.data, "got");

          setData(res.data.data);
          
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  const navigate = useNavigate();
  const handleClick = (emplyId, designation) => {
    localStorage.setItem("projEmId", emplyId);

    // console.log(designation);
    if (designation === "SEO") {
      return navigate(NavigateUrl);
    }
    if (designation === "WRITER") {
      return navigate(NavigateUrl);
    }
    if (designation === "DESIGNER") {
      return navigate(NavigateUrl);
    }
    if (designation === "SALES") {
      return navigate(NavigateUrl);
    }
  };
  const [name, setName] = useState("");
  console.log(name);
  const handleSearch = async () => {
    console.log(type,"type");
    if (type === "SEO") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getSeo/${name}`)
        .then((result) => {
          setData(result.data.data);
          setBack(true)
        });
    }
    if (type === "WRITER") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getWriter/${name}`)
        .then((result) => {
          setData(result.data.data);
          setBack(true)
        });
    }
    if (type === "DESIGNER") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getDesigner/${name}`)
        .then((result) => {
          setData(result.data.data);
          setBack(true)
        });
    }
    if (type === "SALES") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/sales/oneEmpy/getSales/${name}`)
        .then((result) => {
          setData(result.data.data);
          setBack(true)
        });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 12; // Number of items per page
 const handlePagination = (pageNumber) => {
   setCurrentPage(pageNumber);
 };
 
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 let   currentItems = []
 
 if(!back){
  currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
}

const handleGoBack = ()=>{
  window.history.back();
}

  return (
    <>
      {/* {flag ? links[0].userName : "woohooweb"} */}

      <div className="bg-img">
        <div className="card-top">
          <div className="search">
            <input
              placeholder="ENTER  EMPLOYEE  NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="btn-search"
              onClick={() => {
                handleSearch(type);
              }}
            >
              SEARCH
            </button>
          </div>

          {currentItems.length > 0 ? (
            currentItems.map((user) => {
              return (
                <>
                  <div className="super-container">
                    <div className="super">
                      <Card
                        style={{ width: "18rem", textAlign: "center" }}
                        key={user.Name}
                        className="person-card"
                      >
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body key="body">
                          <Card.Title
                            key={user.Name}
                            className="user-text"
                            onClick={() => {
                              handleClick(user.unique_id, user.designation);
                            }}
                          >
                            {user.Name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="super-container">
              <div className="super">
                <Card
                  style={{ width: "18rem", textAlign: "center" }}
                  key={data.Name}
                  className="person-card"
                >
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body key="body">
                    <Card.Title
                      key={data.Name}
                      className="user-text"
                      onClick={() => {
                        handleClick(data.unique_id, data.designation);
                      }}
                    >
                      {data.Name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )}
        </div>
        {back ?  <button className="button-back" onClick={handleGoBack}>CANCEL</button> :(
       
        <div className="pagination">
            <button className="prevbtn" onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
              PREVIOUS
            </button>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
              <button
              className="numbtn"
                key={index}
                onClick={() => handlePagination(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
            <button className="Nextbtn"
              onClick={() => handlePagination(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              NEXT
            </button>
            {/* {back &&  <button onClick={handleGoBack}>CANCEL</button>} */}
          
          </div> 
        )}
      </div>
    </>
  );
}


