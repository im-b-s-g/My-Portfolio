import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png';
import Insta from '../../img/leetcode.png';
import Faceboo from '../../img/gfg.png';
import GitHub from '../../img/git.png';
const Footer = () => {
  return (
   <div className="footer" id="footer"> 
   <img src={wave} alt="" style={{width:"100%"}}/>
   <div className="f-content">
    <span>Brahmgaur17@gmail.com</span>
    <div className="f-icons">
      <a href="https://leetcode.com/imbsg/" target='blank'>
      <img src={Insta} alt="" height='60%' />
      </a>
      <a href="https://auth.geeksforgeeks.org/user/brahmgaur17/"target='blank'>
      <img src={Faceboo} alt="" height='110%'/>
      </a>
      <a href="https://github.com/im-b-s-g" target='blank'>
      <img src={GitHub} alt="" width='120%' height='90%'/>
      </a>
  
    </div>
   </div>
   </div>
  )
}

export default Footer
