import { useState } from "react";
import './img.css'
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import axios from "axios";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

export default function DesignerStatus({ data,comesFrom }) {

  // const [imgView, setImgView] = useState(false);
  // const [pathImg, setPathImg] = useState('');
  // const [ImgTitle, setImgTitle] = useState('');
//  console.log(data,"data");
 //...........pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // 

 const navigate = useNavigate("");
  const handleClick = async (_id) => {
    // console.log(i,'INDEX');
    await axios
      .get(`http://localhost:8080/designer/proj/view/${_id}`)
      .then((res) => {
        console.log(res);
        const result = res.data.data;
        const encryptSeo = CryptoJS.AES.encrypt(
          JSON.stringify(result),
          "employeeDesignerProjects"
        ).toString();
        localStorage.setItem("designerOneProject", encryptSeo);
        // setProjectStatusData(res.data.data)
      });
      if(comesFrom){
        navigate("/v2/das/designer/one/view")
      }else{

        navigate("/v2/design/view/project/status");
      }
  };
  return (
    <>
      <div className="project-status-box">
        
        <Row  className="g-3 img-box">
      {currentItems.map((img, idx) => (
        <div key={idx} className="col-container">
          <Card className="card-img">
            <Card.Img variant="top" className="img-size"   src={`http://localhost:8080/designer/images/${img.PostImage}`} alt="user-img" />
            <Card.Body>
              <Card.Title> {img.ImgTitle}</Card.Title>
              <Card.Text>
              {img.description}
              </Card.Text>
            </Card.Body>
            <button className="tabel-view-img" onClick={()=>handleClick(img._id)}>VIEW</button>
          </Card>
        </div>
      ))}
    </Row>
         
      

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
         
          </div>
      </div>
    </>
  );
}
