import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Layout } from "./Layout"
import { login } from "../services/login"

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = () => {
  return(
    
    <Box minHeight='100vh' backgroundColor='#000000' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <Button colorScheme='teal' onClick={login}>Login</Button>
        </Center>
      </Box>
    </Box>
  )
}