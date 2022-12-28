import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import temoin1 from "../assets/Ellipse 5.png";
import temoin2 from "../assets/Ellipse 6.png";
import temoin3 from "../assets/Ellipse 11.png";
import { BsEmojiLaughing,BsHandThumbsUpFill,BsHeartFill} from "react-icons/bs";



const Contenaire = styled.div`
  position: abolute;
  transform:translateX(12.5%) ;
  height:100% ;
  width:80% ;
 background-color: #cacaca;
    
 .card-wrapper{
 position:relative ;
  height:5rem ;
 
  text-align:center ;
  img{
   position:relative ;
   left:  40%  ; 
    width:5rem ;
    height:100% ;
    border-radius:100% ;
    object-fit:cover ;
   
  }
  h1{
      font-size:1rem ; 
      color:#124168 ;
  }

 }       
 
`;
const Slidertemoins = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }; 
  return (
    <Contenaire>
     <Slider {...settings}>
      <div className="card-wrapper">
      <img src={temoin1} alt="temoin" />
            <h1>
              Completement  satisfaite du resultat que j'attendais 
              tu est  le meilleurs mercie : <BsHeartFill />
            </h1>
       </div>
       <div className="card-wrapper">
       <img src={temoin2} alt="temoin" />
            <h1>
              chui émerveillé du trvail en temps que collaboratrice  .
              <BsEmojiLaughing />
            </h1>
             
       </div>
       <div className="card-wrapper">
       <img src={temoin3} alt="temoin" />
            <h1>
              je suis heureux de travailler avec toi tu est geniale  !
          
              <BsHandThumbsUpFill />
            </h1>
       </div>
       </Slider>
    </Contenaire>
  );
};

export default Slidertemoins;
