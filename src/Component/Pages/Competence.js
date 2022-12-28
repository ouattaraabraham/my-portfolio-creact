import React from 'react';
import styled  from "styled-components"
import Navlink from '../Navigations/Navlink';
import {
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaSass,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const media={
  desktop124:'@media(max-width:1024px)', 
  desktop1008:'@media(max-width:1008px)', 
  tablette768:'@media(max-width:768px)',
  portable650:'@media(max-width:650px)',
  portable550:'@media(max-width:550px)',
  portable520:'@media(max-width:520px)',
  portable400:'@media(max-width:400px)',
  portable330:'@media(max-width:330px)',
  portable273:'@media(max-width:273px)',
  portable233:'@media(max-width:233px)'
}

const Contenaire=styled.div`
display: flex; 
height: 95vh ;
${media.desktop1008}{
  display:block ;
  height: 86vh ;
  width:99% ;
}

`;
const DiveLeft = styled.div`

position: relactive ;
border-radius:10px ;
width: 15% ;
height: 100% ;
background-color: #083AA9;
${media.desktop1008}{
  position:absolute ;
  top:0;
  width: 100% ;
  height: 3.4rem ;
  
}
`

const DiveRigth = styled.div`
position: relative ;
border-radius:10px ;
margin-left:2px ;
height: 100% ;
width:80% ;
background-color:  #002E94 ;
${media.desktop1008}{
  width: 100% ;
  heigth: 85% ;
  margin-top:3.6rem ;
}
.divcompetence{
   position : relative ;
   h1{
      margin-top:2rem ;
      margin-left:2rem ;
     color:#74c2e1 ;
     ${media.portable520}{
      font-size:1.5rem;
      
    }
   }
   p{
      
      width:12.1rem;
      height:2px;
      background-color:#74c2e1 ;
      ${media.portable520}{
        width:9rem;
        
      }
   }
  }
  .divicons {
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 1rem;
    padding: 1rem;
    margin-top:1rem;
    ${media.portable520}{
      grid-template-columns: auto auto auto;
     
    }
    ${media.portable400}{
     gap: .2rem;
    padding: .2rem;
      }
    
    .divicon {
      position: relative;
      display:flex;
      flex-direction:column ;
      align-items:center ;
      text-align: center;
      border: 2px solid #74c2e1;
      border-radius: 2px;
      background-color:#0c156e;

      .icons {
        position: relative;
        top: 10%;
        width: 33%;
        height: 60%;
      }
      .icon1 {
        color: beige;
      }
      h1{
        font-size:1rem ;
        position:relative;
        top:.4rem ;
        color:#74c2e1;
        ${media.portable650}{
          
        }
        ${media.portable400}{
        font-size:1.2rem ;
        }
        ${media.portable330}{
          top:3px;
          }
          ${media.portable273}{
            font-size:1rem;
            }
            ${media.portable233}{
            font-size:.8rem;
            }
      }
    }
  }
`
const Competence = () => {
  return (
        <Contenaire>
          
               <DiveLeft>
                 <Navlink/>
               </DiveLeft>
               <DiveRigth>
        <div className="divcompetence">
           <h1>
             COMPETENCE
             <p></p>
           </h1>
        </div>
        <div className="divicons">
          <div className="divicon">
            <FaHtml5 color='#F53C17' className="icons icon1" />
            <h1>HTML.</h1>
          </div>
          <div className="divicon">
            <FaCss3Alt color='#356AF0' className="icons icon2" />
            <h1>Css.</h1>
          </div>
          <div className="divicon">
            <FaJsSquare color='#F0E819' className="icons icon3" />
            <h1>JAVA-SCRIPT.</h1>
          </div>
          <div className="divicon">
            <FaSass color='#FA63C6' className="icons icon4" />
            <h1>Sass.</h1>
          </div>
          <div className="divicon">
            <FaReact color='#508FF5' className="icons icon5" />
            <h1>React.</h1>
          </div>
          <div className="divicon">
            <FaBootstrap color='#6E0AF0' className="icons icon7" />
            <h1>Bootstrap.</h1>
          </div>
          <div className="divicon">
            <FaFigma color='#760006' className="icons icon8" />
            <h1>Figma.</h1>
          </div>
          <div className="divicon">
            <FaNodeJs color='#FAF55D' className="icons icon9" />
            <h1>NodeJs.</h1>
          </div>
          <div className="divicon">
            <FaGithub color='' className="icons icon10" />
            <h1>Github.</h1>
          </div>
        </div>
      </DiveRigth>
      
        </Contenaire>
    );
};

export default Competence;