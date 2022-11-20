import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import theme from "./components/background.js"
import {NavigationBar} from "./components/navbar"
import {Home} from "./main/home"
import Fonts from "./components/font"
import {AboutMe} from "./main/aboutme"
import {Works} from "./main/works"
import {Gallery} from "./main/gallery"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FlareOn9 } from './main/flareon9.js';
import { NewFolder } from './main/newfolder.js';
import {WhatIsFlareOn} from "./main/whatisflareon";
import {Flaredle} from "./main/flaredle";
import {PixelPoker} from "./main/pixelpoker"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about/" element={<AboutMe/>} />
          <Route path="/works/" element={<Works/>} />
          <Route path="/gallery/" element={<Gallery/>} />    
          <Route path="works/flareon9" element={<FlareOn9/>}/>  
          <Route path="works/newfolder" element={<NewFolder/>}/>  
          <Route path="works/flareon9/readme" element={<WhatIsFlareOn/>}/> 
          <Route path="works/flareon9/01" element={<Flaredle/>}/>
          <Route path="works/flareon9/02" element={<PixelPoker/>}/>
        </Routes>
      </Router> 
    </ChakraProvider>
  );
}

export default App;
