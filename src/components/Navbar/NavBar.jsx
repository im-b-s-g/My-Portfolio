import React from "react";
import "./NavBar.css";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";
 import {Link} from 'react-scroll'; 

function NavBar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id='NavBar'>
      <div className="n-left" style={{background: darkMode? 'black':'' }}>
        <div className="n-name" style={{color: darkMode? 'white':'' }}>Brahm</div>
       <Toggle/>
      </div>

        <div className="n-right" style={{background: darkMode? 'black':'' }}>
            <div className="n-list">
            <ul style={{listStyleType:'none'}} >
            <Link spy ={true} to='NavBar' smooth={true}>
               <li>Home</li></Link>
               <Link spy ={true} to='services' smooth={true}>
               <li>Services</li></Link>
               <Link spy ={true} to='Experience' smooth={true}>
                <li>Experience</li></Link>
                <Link spy ={true} to='portfolio' smooth={true}>
                <li>Portfolio</li></Link>
                <Link spy ={true} to='testimonial' smooth={true}>
                <li>Testimonials</li></Link>
            </ul>
            </div>
           < a href="https://www.linkedin.com/in/brahm-gaur">
            <button className="button n-button">Contact</button> </a>
        </div>
    </div>
  );
}

export default NavBar;
