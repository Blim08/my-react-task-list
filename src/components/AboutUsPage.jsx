import React from "react";
import { WrapItem, Center, Box, VStack, Container } from '@chakra-ui/react'

export const AboutUsPage = () => {
  return (
    <div>
          <Box bg='grey' w='100%' p={4} color='navy'>
            <Center color={"navy"} fontSize='xl'> ¿Qué es mi producto?</Center>
          </Box>
        <p>
          <WrapItem  h='50px' >
            <Box  bg='grey' w='100%' p={4} color='black'>
                <Center>
                  Tasks List es una plataforma web construida con la tecnologia React Js.
                </Center>
            </Box>
          </WrapItem>
        </p>
        <Box bg='grey' w='100%' p={4} color='black'>
            <h1><Center color={"navy"} fontSize='xl'> ¿Para que sirve? </Center></h1>
        </Box>
        <WrapItem  h='150px' bg='firebrick.200'>
            <Box  bg='grey' w='100%' p={4} color='black'>
            Esta plataforma nos brinda la oportunidad de gestionar 
            eficientemente todas las actividades que surgen en nuestra 
            rutina diaria de forma automatizada. Podremos registrar, modificar,
            eliminar y actualizar el progreso de nuestras tareas de manera conveniente.
            Esto nos permite crear nuestra propia lista de tareas y visualizar claramente 
            cuáles están pendientes y cuáles ya han sido completadas.     
            </Box>
        </WrapItem>
        <h2><Center color={"navy"} fontSize='xl'> Tecnologias usadas </Center></h2>
        <ul>
          <VStack>
            <Container maxW='md' bg='blue.600' color='white'>
              bootstrap
            </Container>
            <Container maxW='550px' bg='purple.600' color='white'>
             react js
            </Container>
             <Container maxW='container.sm' bg='green.400' color='white'>
              css
            </Container>
          </VStack>                 
      </ul>
    </div>
  )
};