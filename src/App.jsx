import { MainDiv } from "./components/MainDiv.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./components/HomePage.jsx";
import { AboutUsPage } from "./components/AboutUsPage.jsx";
import { TareasPage } from "./components/TareasPage.jsx";
import { FormContact } from "./components/Form.jsx";
import * as React from 'react';
import { ChakraProvider, CSSReset, ColorModeScript, ColorModeProvider, useColorMode } from '@chakra-ui/react';
import { Box, Button, Text, Image, IconButton } from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';


function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
        
        <BrowserRouter>
          <div>
          <Box float="center">
            <Image  borderRadius='full'
  boxSize='150px' src="https://miro.medium.com/v2/resize:fit:1200/0*9WgIWHpgOEnUMJ8P.jpg"></Image>
           </Box>
            <Box w='100%' p={4} color='cornflowerblue' padding=''>
              <div>
                <Text textAlign='center'>
                  <Link to="/">
                    <Button m='3' color='white' background={"cornflowerblue"} _hover={{ background: 'aqua' }}>Home</Button>
                  </Link>
                  <Link to="/AboutUs" className="mr-3">
                    <Button m='3' color='white' background={"cornflowerblue"} _hover={{ background: 'aqua' }}>AboutUs</Button>
                  </Link>
                  <Link to="/MainDiv" className="mr-3">
                    <Button m='3' color='white' background={"cornflowerblue"} _hover={{ background: 'aqua' }}>Main</Button>
                  </Link>
                  <Link to="/Formulario">
                    <Button m='3' color='white' background={"cornflowerblue"} _hover={{ background: 'aqua' }}>Contacto</Button>
                  </Link>
                  <IconButton
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    aria-label={colorMode === 'light' ? 'Modo nocturno' : 'Modo diurno'}
                    colorScheme="teal"
                    variant="ghost"
                  />
                </Text>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage />}
                ></Route>
                <Route
                  path="/aboutus"
                  element={<AboutUsPage />}
                ></Route>
                <Route
                  path="/MainDiv"
                  element={<MainDiv />}
                ></Route>
                <Route
                  path="/Tareas"
                  element={<TareasPage />}
                ></Route>
                <Route
                  path="/Formulario"
                  element={<FormContact />}
                ></Route>
              </Routes>
            </Box>
          </div>
        </BrowserRouter>
  );
}

export default App;