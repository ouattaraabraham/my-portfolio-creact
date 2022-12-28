import React from 'react';
import styled from "styled-components"
import Navlink from '../Navigations/Navlink';
import {FaWhatsapp,FaEnvelope} from 'react-icons/fa'
import Slidertemoins from '../Slidertemoins';


const media={
   desktop124:'@media(max-width:1024px)', 
   desktop1008:'@media(max-width:1008px)', 
   tablette768:'@media(max-width:768px)',
   portable650:'@media(max-width:650px)',
   portable550:'@media(max-width:550px)'
 }
const Contenaire=styled.div`
display: flex; 
height: 95vh ;
${media.desktop1008}{
  display:block ;
  height: 86vh ;
  width:99% ;
}

`
const DiveLeft = styled.div`
position: relactive ;
border-radius:10px ;
width: 15% ;
height: 100% ;
background-color: #083AA9;
${media.desktop1008}{
  position:absolute ;
  top:.2rem;
  width: 99% ;
  height: 4rem ;
  margin-top:.2rem;
  margin-left:.3rem;
  
}

`
const DiveRigth = styled.div`
position: relative ;
border-radius:10px ;
margin-left:2px ;
width:83% ;
height: 100% ;
background-color:  #002E94 ;
${media.desktop1008}{
  width: 100% ;
  heigth: 85% ;
  margin-top:4.5rem ;
  margin-left:.3rem;
}
  .divtop{
   position:relative;
   height:70% ;
   text-align:center ;
   .text{
      position:relative ;
      top:2rem;
      h1{
         color:#74c2e1;
      }
      P{
         position:relative ;
         left:50%;
         transform:translateX(-50%);
         width:16.3rem;
         height:5px ;
         background-color:#74c2e1 ;
      }
   }
      

  
   .contacter{
      position : relative ;
      top:3rem ;
      display:flex ;
      justify-content: center  ;
      .icons{
         position:relative;
         
         width:320px ;
         height:230px ;
         margin:10px ;
         background-color: #74C2E1 ;
         border-radius:10px ;
         ${media.tablette768}{
            width:50% ;
            height:10rem ;
         }
         ${media.portable650}{
            width:50% ;
            height:10rem ;
         }
         ${media.portable550}{
            width:50% ;
            height:10rem ;
         }
        
         .icon{
            position:relative;
            top:10px ;
            width:36%;
            height: 36% ;
            color: #2c6210;
            
         }
         h1{
            margin-top:15px ;
            font-size:20px ;
            word-wrap: break-word;
            color:#124168 ;
            
         }
         
      
      }
      
      
   }
   .icons:hover {
      transform: scale(1.1) ;
   
      cursor:pointer;
   }
     
     }
     .divbuttom{
     position: relative;
     height:30% ;
     background-color : #6d99b1;
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