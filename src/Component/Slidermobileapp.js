import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import mobile1 from './../assets/mobile1.png'
import mobile2 from './../assets/mobile2.png'
import mobile3 from './../assets/mobile3.png'
import mobile4 from './../assets/mobile4.jpg'
import mobile5 from './../assets/mobile5.png'
import mobile6 from './../assets/mobile6.jpg'



const Divcontenaire=styled.div`
position:relative ;
width:100%;
height:100% ;
background-color : #CACACA ; 
overflow:hidden ;

.slick-slider {
 
 padding:5px ;
 .slick-prev, .slick-next {
   top:20%; 
 }
 
}
.slick-slide {
 margin: 0 8px;
}
.slick-list {
 margin: 0 -4px;
}
.Divimg{
  position:relative;
   
   height:100% ;
   overflow:hidden ;
   
  img{
   position:relative ;
   width: 100% ;
   height: 100% ;
  
   object-fit:cover ;
   overflow:hidden ;
  }
}

.dOljQt{
 overflow:hidden ; 
}

`

const Slidermobileapp= () => {
    
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };
    return (
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