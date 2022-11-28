import React from "react";
import '../src/styles/style.css'
import { Route,  Routes } from "react-router-dom";
import Profile from './Component/Pages/Profile'  ;
import Service from './Component/Pages/Service' ;
import Competence from './Component/Pages/Competence' ;
import Mecontacter from './Component/Pages/Mecontacter' ;


function App() {
    return (
      <Routes >
        <Route path="/" element={<Profile/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/competence" element={<Competence/>}/>
        <Route path="/mecontacter" element={<Mecontacter/>}/>
      </Routes>

    )
  } ;
  
 
  
 

export default App;
