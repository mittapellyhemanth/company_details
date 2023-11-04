import React, { useContext } from "react";
import DetailsContext from "../../Context/CreateContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BsPersonCircle } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import "../../Styles/Navbar.css";

export default function NavbarScroll() {
  const {  flag } = useContext(DetailsContext);
 const designation = localStorage.getItem('designation')
 const Name = localStorage.getItem("userName")
  // console.log(personName, "p");

  let otherPageLinks = [];
  let homePageLinks = [];
  
  if (flag) {
    otherPageLinks = [
      { to: "#", userName: Name },
      
      // Add more links as needed, including the user's profile link
      { to: "/Logout", label: "Logout"},
    ];
   
  } else {
    homePageLinks = [
      { to: "/employee", label: "Employee" },
      { to: "/Admin", label: "Admin" },
      { to: "/superAdmin", label: "superAdmin" },
      // Add more links as needed
    ];
  }

  const links = [...homePageLinks, ...otherPageLinks]; // Combine both sets of links

  return (
    <>
    <div className="sticky">
    {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 navbar"
        >
          <Container fluid>
            <Navbar.Brand  className="nav-title">
              {flag  ?(<>
                <span className="designation">{designation}</span>
              </>
              ): "woohooweb"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {flag ? links[0].userName  : "woohooweb"}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 gap-2 ">
                  {links.map((link, index) =>
                    link.userName ? (
                     
                      <span   className="Name"><BsPersonCircle/> {Name}</span>
                    ) : (
                      <Link  key={index} to={link.to} className={flag ? "logout" :"link"}>
                        {
                          flag? <span><IoIosLogOut/>{link.label}</span>  : <span  >{link.label}</span> 
                        }
                      
                      </Link>
                    )
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
    
    </>
  );
}
