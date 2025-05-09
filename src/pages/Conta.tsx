import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../App"

interface userData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>()

    const context = useContext(AppContext)
    console.log(context)

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                        (<Center>
                            <Spinner size='xl' color="black" />
                        </Center>) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                                <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`} />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta;
