import { Button, Box, Text } from '@chakra-ui/react'

export const ButtonDanger = ({ onClickClear, taskPending }) => {
  return (
    <div>
      <Box bg='darkturquoise' w='95%' p={4} color='white' padding='5' m="15">
        <Text textAlign='center' > Tu tienes {taskPending} tareas pendientes </Text>
       <Button  colorScheme='teal' size='xs' w="100%" onClick={onClickClear}>Borrar todo</Button>
    </Box>
    </div>
  )
} 