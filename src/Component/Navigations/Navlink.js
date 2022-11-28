import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import imgprofil from "../../assets/ordi.jpg";
import {
  BsAward,
  BsGem,
  BsFillFileCheckFill,
  BsTelephonePlus,
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const media={
  desktop1024:'@media(max-width:1024px)',
  desktop1008:'@media(max-width:1008px)', 
  tablette780:'@media(max-width:780px)',
  tablette:'@media(max-width:768px)',
  tablette650:'@media(max-width:650px)',
  portable425:'@media(max-width:425px)'
}

const keyframesh1 = keyframes`

to{left:-180px;}
from{left:-10px;}
`;
const NavlinkContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${media.desktop1008}{
    bottom:5% ;
  }
 
`;
const Profilecontenaire = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 30%;
  ${media.desktop1008}{
    display:none;
  }
  ${media.portable425}{
    display:none ;
  }
  img {
    position: relative;
    box-shadow: 0 0 0 2px #61009a, 0 0 0 3px #005b9a, 0 0 0 2px #61009a;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    width: 80%;
    ${media.tablette}{
      width: 95%;
    }
  }

  h1 {
    position: relative;
    left: -180px;
    width: 500px;
    display: flex;
    text-align: center;
    font-size: 25px;
    top: 14px;
    animation: ${keyframesh1} 10s cubic-bezier(0, 0, 1, 1) infinite;
  }
  h1 > span {
    margin-left: 12px;
    color: #74c2e1;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  top: -65px;
  width: 100%;
  height: 40%;
  ${media.desktop1008}{
    top:35%; 
    height100% ;
    
  }
  ${media.portable425}{
    position: relative;
    top:0;
    width: 100%;
    height: 50px;
  }
  ul {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction:column ;
    align-items:center ;
    justify-content: space-around;

    ${media.desktop1008}{
      flex-direction:row;
    }
    ${media.portable425}{
      flex-direction:row;
    }
  }

  li {
    position: relative;
    display:flex;
    align-items:center ;
    width: 90%;
    height: 45px;
    border-radius: 20px;
    background-color: #74c2e1;
    list-style-type: none;
    ${media.desktop1024}{
     width: 150px;
     height: 40px;
     left: 0;
     border-radius: 50px;
   }
   ${media.tablette780}{
    width: 154px;
   }
 ${media.tablette650}{
  width:64px ;
  background-color:#083AA9 ;
 }
 ${media.portable425}{
  background-color: none;
}
    
  }

  li:hover {
    background-color:  #E1CEB5;
    transform: scale(0.9);
  }
 

  a {
    text-decoration: none;
    display:flex;
    align-itmes:center ;
    .icons {
      position: relative;
      font-size:30px ;
      margin: 0 2px 0 4px;
      ${media.desktop1024}{
        font-size:28px ;
      }
       ${media.tablette650}{
        
      }
    }
    .icons1{
       ${media.tablette650}{
        color:#E1CEB5 ;
      
      }
      
    }
    .icons2{
      ${media.tablette650}{
        color:#FFE7CC ;
      }
    }
     .icons3{
      ${media.tablette650}{
        color:#7895B2;
      }
    }
     .icons4{
       ${media.tablette650}{
        color:#B4CDE6 ;
      }
    }
   

    span {
      position: relative;
      
      
      font-size: 1.5rem;
      text-decoration: none;
      color: #3a3731;
      ${media.tablette780}{
       
       }
       ${media.tablette650}{
        display:none;
      }
    }
    .span-competence{
      ${media.desktop1024}{
     
      }

    }
  }
`;
const SociauxContainer = styled.div`
  position: relative;
  top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop1008}{
   display:none;
  }
  ${media.portable425}{
    display:none ;
  }
  .divicon {
    width: 40px;
    background-color: #74c2e1;
    border-radius: 50%;
    margin: 0.5rem;
    cursor: pointer;
    .icon {
      margin-top: 4px;
      margin-left: 5px;
    }
  }
  
`;
const Navlink = () => {
  return (
    <NavlinkContainer>
      <Profilecontenaire>
        <div>
          <img src={imgprofil} alt="imag" className="imgprofil" />
          <h1>
            {" "}
            <span>Ab-web design</span> <span>Ab-web design</span>{" "}
          </h1>
        </div>
      </Profilecontenaire>
      <ButtonContainer>
        <ul>
          <li>
            <NavLink to="/" className="navlinkbutton">
              <BsAward  className="icons icons1" />
              <span className="span-profil">Profil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="navlinkbutton">
              <BsGem  className="icons icons2" />
              <span className="span-service">service</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competence" className="navlinkbutton">
              <BsFillFileCheckFill  className="icons icons3" />
              <span className="span-competence">competence</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mecontacter" className="navlinkbutton">
              <BsTelephonePlus  className="icons icons4" />
              <span className="span-contacter">contacter</span>
            </NavLink>
          </li>
        </ul>
      </ButtonContainer>

      <SociauxContainer>
        <div className="divicon">
          <BsGem className="icon" size="30px" />
        </div>
        <div className="divicon">
          <BsGem className="icon" size="30px" />
        </div>
        <div className="divicon">
          <BsGem className="icon" size="30px" />
        </div>
      </SociauxContainer>
    </NavlinkContainer>
  );
};

export default Navlink;
