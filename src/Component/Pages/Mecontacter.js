import React from 'react';
import styled from "styled-components"
import Navlink from '../Navigations/Navlink';
import {FaWhatsapp,FaEnvelope} from 'react-icons/fa'
import Slidertemoins from '../Slidertemoins';

const Contenaire=styled.div`
display: flex; 
background-color: blue ;
height: 95vh ;
border-radius:10px ;

`
const DiveLeft = styled.div`
position: relactive ;
width: 15% ;
heigth: 100% ;
border-radius:10px ;
background-color: #0000B5 ;

`
const DiveRigth = styled.div`
position: relative ;
width: 85% ;
height: 100% ;
margin-left:2px ;
background-color: #0000B5 ;
  .divtop{
   position:relative;
   top:30px ;

   text-align:center ;
   .text{
      position:relative ;
      P{
         position:relative ;
         left:50%;
         transform:translateX(-50%);
         width:16.3rem;
         height:5px ;
         background-color: #CACACA ;
      }
   }
      

  
   .contacter{
      position : relative ;
      top:30px ;
      display:flex ;
      justify-content: center  ;
      .icons{
         position:relative;
         
         width:320px ;
         height:230px ;
         margin:10px ;
         background-color: #74C2E1 ;
         border-radius:10px ;
         .icon{
            position:relative;
            top:10px ;
            width:36%;
            height: 36% ;
            
         }
         h1{
            margin-top:15px ;
            font-size:20px ;
         }
      
      }
      
      
   }
   .icons:hover {
      transform: scale(1.1) ;
      background-color:#CACACA  ;
      cursor:pointer;
   }
     
     }
     .divbuttom{
      position:relative;
      margin-top:7.1rem;
      height:35%;
     background-color : #878787;
     }

   

`

const Mecontacter = () => {
    return (
        <Contenaire>
           <DiveLeft>
              <Navlink/>
           </DiveLeft>
           <DiveRigth>
                <div className='divtop'>
                 <div className='text'>
                  <h1>ME CONTACTER</h1>
                  <p></p>
                 </div>
                 <div className='contacter'>
                  <div className='icons'>
                     <FaWhatsapp className='icon watssap'/>
                     <h1>07 25 154 68 45</h1>
                  </div>
                  <div className='icons'>
                     <FaEnvelope className='icon email'/>
                     <h1>ouattara.abraham2019@gmail.com</h1>
                  </div>
                 
                 </div>
                 </div>
                 <div className='divbuttom'>
                  <Slidertemoins/>
                 </div>
           </DiveRigth>

        </Contenaire>
    );
};

export default Mecontacter;