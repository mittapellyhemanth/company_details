import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import DetailsContext from "../Context/CreateContext";

import axios from "axios";

export default function Details() {
  
  const { designation } = useContext(DetailsContext);
  console.log(designation,'dis');
  const id = localStorage.getItem("Id");

  const [getOneData, setOneData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/getOneSeo/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setOneData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="view">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="center" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{designation}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <label>Name:</label>
              <span>{getOneData.Name}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Email:</label>
              <span>{getOneData.email}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Password:</label>
              <span>{getOneData.phoneNumber}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>Address:</label>
              <span>{getOneData.address}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <label>phoneNumber:</label>
              <span>{getOneData.phoneNumber}</span>
            </ListGroup.Item>
          </ListGroup>
         
        </Card>
      </div>
    </>
  );
}
