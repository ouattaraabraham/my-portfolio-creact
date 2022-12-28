import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import web1 from './../assets/web1.jpg'
import web2 from './../assets/web2.jpg'
import web3 from './../assets/web3.jpg'
import web4 from './../assets/web4.jpg'
import web5 from './../assets/web5.jpg'
import web6 from './../assets/web6.jpg'


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

const Sliderwebsite= () => {
 
  const settings = {

      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 4000,
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