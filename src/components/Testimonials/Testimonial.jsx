import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Such a nice Logo for a fair price, I must say I loved it, Amazing!",
    },
    {
      img: profilePic2,
      review:
      "I am really impressed by the design and especially the way the page functions. So smooth, Great Work!",
    },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial"  style={{background: darkMode? 'rgba(255, 255, 255,.7)'  :'',border: darkMode? '5px solid var(--orange)':'' }}>
                <img src={client.img} alt="" />
                <span  style={{color: darkMode? 'black':'' }}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
