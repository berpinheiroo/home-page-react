import { Box, Center, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../App"

export const Header = () => {
  const context = useContext(AppContext)
  console.log(context)

  return (
    <Box backgroundColor='orange'>
      <Center>
        <Text fontSize='3xl'>Dio Bank</Text>
      </Center>
    </Box>
  )
}