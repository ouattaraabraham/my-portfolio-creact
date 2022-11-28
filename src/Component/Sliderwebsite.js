import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import web1 from './../assets/web1.png'
import web2 from './../assets/web2.png'
import web3 from './../assets/web3.png'
import web4 from './../assets/web4.png'
import web5 from './../assets/web5.png'
import web6 from './../assets/web6.png'


const media={
  desktop124:'@media(max-width:1024px)', 
  tablette:'@media(max-width:768px)',
  portable425:'@media(max-width:425px)'
} 

const Divcontenaire=styled.div`
 position:relative ;
 width:100%;
 height:100% ;
 background-color : #CACACA ; 

 .slick-slider {
  
  padding:5px ;
  .slick-prev, .slick-next {
    top:20%; 
  }
  
}

 .Divimg{
   position:relative;
    
    height:135px ;
    overflow:hidden ;
    
   img{
    position:relative ;
    width: 100% ;
    height: 95% ;
   
    object-fit:cover ;
    overflow:hidden ;
   }
 }
 
 .dOljQt{
  overflow:hidden ; 
}

`

const Sliderwebsite= () => {
    
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
    return (
        <Divcontenaire >
        <Slider {...settings}>
          <div className='Divimg'>
          <img src={web1} alt='web site'/>
         </div>
         <div className='Divimg'>
          <img src={web2} alt='web site'/>
         </div>
         <div className='Divimg'>
          <img src={web3} alt='web site'/>
         </div>
         <div className='Divimg'>
          <img src={web4} alt='web site'/>
         </div>
         <div className='Divimg'>
          <img src={web5} alt='web site'/>
         </div>
         <div className='Divimg'>
          <img src={web6} alt='web site'/>
         </div>
         </Slider>
        
      </Divcontenaire>
    );
};

export default Sliderwebsite;