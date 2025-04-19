import { useState, useEffect } from "react"
import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Layout } from "./Layout"
import { login } from "../services/login"
import { api } from "../api"
import { get } from "http"

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

interface userData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | userData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api
      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)

  return (

    <Box minHeight='100vh' backgroundColor='blue.600' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <Input placeholder="password" />
        <Center>
          <Button colorScheme='teal' onClick={() => login(email)}>Login</Button>
        </Center>
      </Box>
    </Box>
  )
}