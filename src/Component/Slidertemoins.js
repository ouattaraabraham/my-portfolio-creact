import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import temoin from "../assets/temoin.jpg";

const Contenaire = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  top:5%;
  left:5% ;
  background-color: #cacaca;
  .divimg{
    position:relative;
    dislay:flex;
    align-items :center ;
    height:200px ;
    border:2px solid black ;
    
    img{
        position:relative ;
        width:100px ;
        height:100px ;
        border-radius:50% ;
        left:32% ;
         margin-top:0.2rem ;
    }
    h1{
        margin-top:0.2rem ;
        font-size:20px ;
    }
  }
`;
const Slidertemoins = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Contenaire>
      <Slider {...settings}>
        <div className="divimg">
          <img src={temoin} alt="temoin" />
          <h1>
          je suis satisfait du trvail en temps que collaboratrice 

          </h1>
        </div>
        <div className="divimg">
          <img src={temoin} alt="temoin" />
          <h1>
          le travailler avec toi devient encore plus superb vraiment mercie pour 
          tes creativité
          </h1>
        </div>
        <div className="divimg">
          <img src={temoin} alt="temoin" />
          <h1>
          je suis satisfait du trvail bbbbbbbbzjzjzjzkzkzkzkkkzzkzk
          </h1>
        </div>
        <div className="divimg">
          <img src={temoin} alt="temoin" />
          <h1>
          je suis emerveiller par votre travail heureuse de travailler avec toi mon champion 
          </h1>
        </div>
        <div className="divimg">
          <img src={temoin} alt="temoin" />
          <h1>
          très bon boulot vous etre un bon developpeur je vous
          admir beaucoup
          </h1>
        </div>
      </Slider>
    </Contenaire>
  );
};

export default Slidertemoins;
