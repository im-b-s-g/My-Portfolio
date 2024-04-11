import React, { useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);
    
    const sendEmail = (e) => {
      e.preventDefault();


      <div id="contact"></div>
      emailjs.sendForm('service_cktyqda', 'template_ns59xsg', form.current, 'w5VzPYcOpsjltzhFC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesomes">
          <span style={{color: darkMode? 'white':'' }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blue s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref = {form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="send" className="button"/>
            <span>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1" style={{background:"lightblue"}}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
