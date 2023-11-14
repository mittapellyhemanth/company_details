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
  };
  const [name, setName] = useState("");
  console.log(name);
  const handleSearch = async () => {
    if (type === "SEO") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getSeo/${name}`)
        .then((result) => {
          setData(result.data.data);
        });
    }
    if (type === "WRITER") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getWriter/${name}`)
        .then((result) => {
          setData(result.data.data);
        });
    }
    if (type === "DESIGNER") {
      console.log(name);
      await axios
        .get(`http://localhost:8080/admin/oneEmpy/getDesigner/${name}`)
        .then((result) => {
          setData(result.data.data);
        });
    }
  };
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

          {data.length > 0 ? (
            data.map((user) => {
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
      </div>
    </>
  );
}

{
  /* <Card style={{ width: "15rem", height: "7rem" }} key="card">
             
              <Card.Body key="body">
                <Card.Title key={user._id}>{user.Name}</Card.Title>

                <Button variant="primary" key={user.phoneNumber}>
                  View
                </Button>
              </Card.Body>
            </Card> */
}
