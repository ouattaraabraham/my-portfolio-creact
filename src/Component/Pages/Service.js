import React from "react";
import styled from "styled-components";
import Navlink from "../Navigations/Navlink";
import Sliderwebsite from "../Sliderwebsite";
import Slidermobileapp from "../Slidermobileapp";
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'

const media={
  desktop1130:'@media(max-width:1030px)', 
  desktop1008:'@media(max-width:1008px)', 
  tablette768:'@media(max-width:768px)',
  portable650:'@media(max-width:650px)',
  portable550:'@media(max-width:550px)',
  portable420:'@media(max-width:420px)',
  portable380:'@media(max-width:380px)',
  portable300:'@media(max-width:300px)'

}

const Contenaire = styled.div`
  display: flex;
  height: 95vh;
  ${media.desktop1008} {
    display: block;
    height: 86vh;
    width: 99%;
  }
  ${media.tablette768} {
    display: block;
   
    width: 99%;
  }
`;

const DiveLeft = styled.div`
position: relactive;
border-radius: 10px;
width: 15%;
height: 100%;
background-color: #083aa9;
${media.desktop1008} {
  position: absolute;
  top: 0.1rem;
  width: 99%;
  height: 4rem;
  margin-left:.2rem ;
 
  margin-left: 0.3rem;
}
${media.tablette768} {
  position: absolute;
  top: 0.2rem;
  width: 99%;
  height: 4rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
${media.portable550} {
  margin-left:.1rem ;
  height: 3.5rem;
}
`;

const DiveRigth = styled.div`
position: relative;
border-radius: 10px;
margin-left: 2px;
height: 100%;
width:  83%;
background-color: #002e94;
${media.desktop1008} {
  width: 100%;
  height:100%;
  margin-top: 4.5rem;
  margin-left:.3rem ;
}
${media.tablette768} {
  margin-top: 4.8rem;
 
}
${media.portable550} {
  margin-left:.1rem ;
  margin-top: 4.4rem;
}
`;
const DivText = styled.div`
  position: relative;
  display:flex;

  margin-top:1rem ;
 

  ${media.desktop1008} {
    flex-direction:column;
    ;
  }
  div{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center ;
    text-align:center;
    margin:.2rem  ;
    padding:1rem;
  
    background-color:#e5ddda ;
    ${media.desktop1008} {
      margin:.1rem ;
      padding:0
    }
   
    img{
      width:60px ;
      ${media.desktop1008} {
        width:40px ;
      }
      ${media.portable380} {
        width:30px ;
      }
    }
    h1{
      color:#1a789d ;
      font-size:1.7rem;
      ${media.desktop1008} {
        font-size:1.7rem;
        padding:2px ;
      }
      ${media.portable550} {
        font-size:1.5rem;
     }
     ${media.portable300} {
      font-size:1rem;
   }
    }
  }
 
`;
const Divslider = styled.div`
  position: relative;
  margin-top:1rem ;
  background-color: #332f60;
  ${media.desktop1130} {
    margin-top:1rem 
  }
  ${media.desktop1008} {
    margin-top:5rem ;
  }
  ${media.tablette768} {
    tmargin-top:5rem ;
  }
 
  ${media.portable550} {
    margin-top:2rem ;
  }

  ${media.portable380} {
    margin-top:0rem ;
 }

    .img-app{
      display:flex;
      align-items:center ;
      .div-texte{
        text-align:center;
        h2{
          font-size: 1.8rem ;
          color:#98adb5 ;
          ${media.tablette768} {
            font-size: 1rem ; 
          }
          ${media.portable420} {
            font-size: .9rem ; 
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
          <div>
            <img src={logo1} className="img" alt='img logo'/>
          <h1>
          création de site internet responsive et applications mobile 
          </h1>
          </div>
          <div>
          <img src={logo2} className="img" alt='img logo'/>
          <h1>
          création de votre     marque  logo , carte de visite , affiche publicitaire .
          </h1>
          </div>
          <div>
          <img src={logo3} className="img" alt='img logo'/>
          <h1>
          booster vos pages réseau sociaux afin de maximiser vos vue 
          </h1>
          </div>
        </DivText>
        <Divslider>
        
            <div className="img-app ">
            <div className="div-texte">
              <h2>web</h2>
              <h2>Application</h2>
            </div>
            <Sliderwebsite/>
            </div>
            <div className="img-app ">
            <div className="div-texte">
              <h2>mobile</h2>
              <h2>Application</h2>
            </div>
            <Slidermobileapp/>
            </div>
            
        </Divslider>
      </DiveRigth>
    </Contenaire>
  );
};

export default Service;
