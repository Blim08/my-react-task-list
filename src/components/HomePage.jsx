import React from "react";
import { ChakraProvider, Center, Square, Circle, Flex, Box } from '@chakra-ui/react'


export const HomePage = () => {
  return (
    <ChakraProvider>
        <Center bg='blue ' h='100px' color='black'>
       <h2>TACKS LIST </h2> 
        </Center>
          <Flex bg='paleturquoise' h='100px' color='black'>
            Hello, welcome user to our app
          </Flex>
    </ChakraProvider>
  );
};