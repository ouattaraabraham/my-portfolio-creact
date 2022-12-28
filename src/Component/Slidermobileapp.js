import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import mobile1 from './../assets/mobile1.jpg'
import mobile2 from './../assets/mobile2.jpg'
import mobile3 from './../assets/mobile3.jpg'
import mobile4 from './../assets/mobile4.jpg'
import mobile5 from './../assets/mobile5.jpg'
import mobile6 from './../assets/mobile6.jpg'


const media={
  desktop124:'@media(max-width:1024px)', 
  desktop1008:'@media(max-width:1008px)', 
  tablette768:'@media(max-width:768px)',
  portable650:'@media(max-width:650px)',
  portable550:'@media(max-width:550px)',
  portable420:'@media(max-width:420px)',
  portable380:'@media(max-width:380px)',
  portable250:'@media(max-width:250px)'
}
const Divcontenaire=styled.div`
 position:relative ;
 width:70%;
 left:1rem ;
 ${media.desktop1008}{
  width:70%;
}
${media.tablette768}{
  width:70%;
}

 ${media.portable650}{
  width:70%;
}
${media.portable550}{
  width:65%;
}
${media.portable380}{
  width:58%;
}
${media.portable250}{
  width:40%;
}

 .Divimg{
    
   img{
   
    ${media.tablette768}{
      width:150px ;
      height:100px ;
    }
    ${media.portable650}{
    
    }
    ${media.portable420}{
      width:130px ;
      height:100px ;
    }
   }
 }
 
 .dOljQt{
 
}
.slick-slider {
  margin:0 -15px;
}


`
const Slidermobileapp= () => {
 
  const settings = {

    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed:  7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
};
 return(
        <Divcontenaire >
        <Slider {...settings}>
          <div className='Divimg'>
          <img src={mobile1} alt='mobile site'/>
         </div>
         <div className='Divimg'>
          <img src={mobile2} alt='mobile site'/>
         </div>
         <div className='Divimg'>
          <img src={mobile3} alt='mobile site'/>
         </div>
         <div className='Divimg'>
          <img src={mobile4} alt='mobile site'/>
         </div>
         <div className='Divimg'>
          <img src={mobile5} alt='mobile site'/>
         </div>
         <div className='Divimg'>
          <img src={mobile6} alt='mobile site'/>
         </div>
         </Slider>
        
      </Divcontenaire>
    );
};

export default Slidermobileapp;