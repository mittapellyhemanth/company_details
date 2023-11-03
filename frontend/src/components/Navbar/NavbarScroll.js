import React, { useContext } from "react";
import DetailsContext from "../../Context/CreateContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "../../Styles/Navbar.css";

export default function NavbarScroll() {
  const { personName, flag } = useContext(DetailsContext);
 
  // console.log(personName, "p");

  let otherPageLinks = [];
  let homePageLinks = [];
  if (flag) {
    otherPageLinks = [
      { to: "#", userName: personName },

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
            <Navbar.Brand href="/" className="nav-title">
              {flag ? links[0].userName : "woohooweb"}
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
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  {links.map((link, index) =>
                    link.userName ? (
                      ""
                    ) : (
                      <Link  key={index} to={link.to} className="link">
                        {link.label}
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
