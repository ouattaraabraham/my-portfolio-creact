import React  from "react";
import styled from "styled-components";
import Navlink from "../Navigations/Navlink";
import Sliderwebsite from "../Sliderwebsite";
import Slidermobileapp from "../Slidermobileapp";




const media={
  desktop124:'@media(max-width:1024px)', 
  tablette:'@media(max-width:768px)',
  portable425:'@media(max-width:425px)'
} 


const Contenaire = styled.div`
  display: flex;
  height: 95vh;
  border-radius: 10px;
  ${media.portable425}{
    display:block ;
  }

`;


const DiveLeft = styled.div`
  position: relative;
  border-radius: 10px;
  width: 15%;
  heigth: 100%;
  background-color: #0000B5;
  ${media.portable425}{
      width: 100%;
      heigth: 15%;
    }
`;

const DiveRigth = styled.div`
  position: relative;
  border-radius: 10px;
  margin-left: 2px;
  width: 85%;
  height: 100%;
  margin-left:2px ;
  background-color:#0000B5;
  color: #74c2e1;
  ${media.portable425}{
    width: 100%;
    height: 85%;
    margin-top:2px ;
  }
`;
const DivText = styled.div`
  position: relative;
  height: 50%;
  width: 100% ;

`;
const DivDevice = styled.div`
  position: relative;
  height: 50%;
  width: 100% ;
  background-color: #2D31FA ;
 
  .container-imgweb {
    position: relative;
    height: 50%;
    width:100%;
    display:flex;
    align-items:center ;
    


    .div-text {
      position: relative; 
      text-align: center ;
 
    }
    .img-web {
      position: relative;
      width: 88%;
      height: 100%;
      background-color: green;
      }
      
    }
  }
  .container-imgmobile {
    position: relative;
    height: 50%;
    width:100%;
    display:flex;
    align-items:center ;
    


    .div-text {
      position: relative; 
      text-align: center ;
  
      h2{
        font-size:10px ;
      }
      
      
    }
    .img-mobile {
      position: relative;
      left:10px ;
      width: 83%;
      height: 95%;
      margin-left: 1rem;
      background-color: green;
      }
      
    }
  }
`;

const Service = () => {
  
  return (
    <Contenaire>
      <DiveLeft>
        <Navlink />
      </DiveLeft>
      <DiveRigth>
        <DivText>
          <h1>texte</h1>
        </DivText>
        <DivDevice>
          <div className="container-imgweb">
            <div className='div-text'>
              <h2>web</h2>
              <h2>application</h2>
            </div>
            <div className="img-web ">
            <Sliderwebsite/>
              
            </div>
          </div>
          <div className="container-imgmobile">
          <div className='div-text'>
              <h1>mobile</h1>
              <h2>application</h2>
            </div>
            <div className="img-mobile">
              <Slidermobileapp/>
            </div>
          </div>
        </DivDevice>
      </DiveRigth>
    </Contenaire>
  );
};

export default Service;
