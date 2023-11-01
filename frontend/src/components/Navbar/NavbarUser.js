import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../Styles/Navbar.css'
import { useContext } from 'react';
import DetailsContext from '../../Context/CreateContext';
import { BsPersonCircle } from "react-icons/bs";

export default function NavbarUser(){
  
  const {personName,personLogin,setPersonLogin,setPersonName} = useContext(DetailsContext);
let name = localStorage.getItem('userName')
name = name.split('@')[0]
setPersonName(name);
let personType = localStorage.getItem('personLogin');
setPersonLogin(personType);

  return (
    <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary navbar">
          <Container fluid>
            <Navbar.Brand  className='nav-title'>{personLogin }</Navbar.Brand>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Awesome
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href='#' className='link'><span className='logo'><BsPersonCircle/></span>{personName}</Nav.Link>
                  <Nav.Link href='/Logout' className='link'>Logout</Nav.Link>
                 </Nav>
                 </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}