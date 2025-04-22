import { Center, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../api"

interface userData {
    email: string,
    password: string,
    name: string
  }

const Conta = () => {
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
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <CardInfo text='Informação de acesso' />
                <CardInfo text='Informação da conta' />
            </SimpleGrid>
        </Center>
    )
}

export default Conta;
