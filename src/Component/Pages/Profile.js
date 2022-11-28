import React from 'react';
import styled , { createGlobalStyle , keyframes } from "styled-components"
import Navlink from '../Navigations/Navlink';
import imgprofile from '../../assets/ordi.jpg' 

const media={
  desktop124:'@media(max-width:1024px)', 
  desktop1008:'@media(max-width:1008px)', 
  tablette768:'@media(max-width:768px)',
  portable650:'@media(max-width:650px)',
  portable550:'@media(max-width:550px)'
}
const StyleGlobal=createGlobalStyle`
*{
  box-sizing:border-box;
    margin: 0; 
    padding: 0 ;
   
}
*, ::before, ::after {
    box-sizing:border-box;
    margin:0;
    padding:0;
}
body{
    margin: 1rem auto ;
    max-width: 1200px ;

}

`
const Keyframesspan1=keyframes`
to{ opacity:1}
from{ opacity:0;}
`

const Keyframeimg=keyframes`

to{ box-shadow: 0 0 0 10px #74C2E1  ;}
from{box-shadow: 0 0 0 2px #61009a  ;}
`
const Keyframestext1=keyframes`
to{left:0 ; opacity:1}

`
const Keyframestext2=keyframes`
to{left:0 ; opacity:1}

`
const Contenaire=styled.div`
display: flex; 
height: 95vh ;
${media.desktop1008}{
  display:block ;
  height: 86vh ;
  width:99% ;
}

`
const Divelements=styled.div`
width: 100% ; 
position: relative; 
display:flex;
flex-direction:column ;
align-items:center ;
text-align:center ;
top: 15% ;
${media.desktop1008}{
  top: 3rem ; 
}

img{
  width : 300px ;
  border-radius:10px ;
  animation :${Keyframeimg} 6s infinite ;
  ${media.desktop1008}{
    width: 270px ; 
  }
   ${media.tablette768}{
    width: 240px ; 
  }
   ${media.portable650}{
    width: 210px ; 
  }
   ${media.portable550}{
    width: 210px ; 
  }
}

div{
  position:relative;

  
  h1{
     color:#74C2E1  ;
    margin:1rem 0 ;

  }
  h2{
   
   margin-top:5px;
     color:#74C2E1  ;
    }
    h2.txt1{
      position:relative ;
      left:-150px ;
      opacity:0;
      animation:${Keyframestext1} 4s 2s forwards ;
    }
    h2.txt2{
      position:relative ;
      left:-150px ;
      opacity:0;
      animation:${Keyframestext2} 4s 3s forwards ;
    }
   
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
height: 100% ;
background-color:  #002E94 ;
${media.desktop1008}{
  width: 100% ;
  heigth: 85% ;
  margin-top:4.5rem ;
  margin-left:.3rem;
}
`
const Profile = () => {
  return (
        <Contenaire>
            <StyleGlobal/>
               <DiveLeft>
                 <Navlink/>
               </DiveLeft>
               <DiveRigth>
                <Divelements>
                 <img src={imgprofile} alt='imageprofile'/>
                 <div>
                  <h1>
                    i'm  abraham dev
                  </h1>
                  <h2 className='txt1'>
                    web developeur 
                  </h2>
                  <h2 className='txt2'>
                    mobile developeur 
                  </h2>
                  <h1>
                    je suis un artiste avec des imagination debordante qui ne s'arrete jamais

                  </h1>
                 </div>
                 
                </Divelements>
               </DiveRigth>
        </Contenaire>
    );
};

export default Profile;