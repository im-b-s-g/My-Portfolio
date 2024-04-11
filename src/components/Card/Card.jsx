import React from 'react'
import './Card.css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className = "card" style={{background: darkMode? 'rgba(255, 255, 255,.85)':'' }}>
      <img src={emoji} alt=""/>
      <span style={{color: darkMode? 'black':'' }}>{heading}</span>
      <span style={{color: darkMode? 'black':'' }}>{detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card