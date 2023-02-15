import { Navbar,Container,Nav, NavLink } from "react-bootstrap";
import { useState ,useEffect } from "react";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import 'animate.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
export const NavBar=()=>{
    const[activelink, setactivelink]=useState('home');
    const [scrolled,setscrolled]=useState(false);

useEffect(()=>{

    const onScroll=()=>{
        if (window.screenY >50){
  setscrolled (true);
    }

    else{
setscrolled(false);
    }
    }
window.addEventListener("scroll", onScroll);
return()=>window.removeEventListener("scroll", onScroll);

},[])

const onUpdateActiveLink =(value)=>{
    setactivelink(value);
}
    return(
        <Navbar expand="lg" bg="darker" className={scrolled? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activelink === 'home' ? "active-navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? "active-navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activelink === 'projects' ? "active-navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/menna-mohamed-abdelfatah-1b9088246/"> <img src={navIcon1} alt=""/></a>
                <a href="#"> <img src={navIcon2} alt=""/></a>
                <a href="#"> <img src={navIcon3} alt=""/></a>
            </div>
          <Nav.Link href="#connects" className={activelink === 'connects' ? "active-navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('connects')}> <button className="vvd" onClick={()=>console.log('connect')}>
                <span> Let's Connect</span>
            </button></Nav.Link> 
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}