import { useState } from "react";
import './img.css'
export default function DesignerStatus({ data }) {

  const [imgView, setImgView] = useState(false);
  const [pathImg, setPathImg] = useState('');
  const [ImgTitle, setImgTitle] = useState('');
  const handleClick = (img,ImgTitle) => {
    setPathImg(img);
    setImgTitle(ImgTitle)
    setImgView(true);
  };
 //...........pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

 

  return (
    <>
      <div className="project-status-box">
        <div className="heading">
         
          <span className="backlink-title">IMAGE TITLES</span>
          {imgView && (
            <div className="popup" onClick={() => setImgView(false)}>
                <h3 className="title">{ImgTitle}</h3>
              <img
                className="img"
                src={`http://localhost:8080/designer/images/${pathImg}`}
                alt="user-img"
              />
            </div>
          )}
        </div>

        <div className="img-bg">
          {data.length === 0 ? (
            <div className="heading-designer">NO DATA FOUND</div>
          ) : (
            data.map((img, index) => (
              <div className="data-box-image" key={index}>
                <div className="title" onClick={() => handleClick(img.PostImage,img.ImgTitle)}>
                  {img.ImgTitle}
                </div>
              </div>
            ))
          )}
        </div>
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
