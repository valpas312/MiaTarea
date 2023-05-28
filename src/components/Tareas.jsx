import CardTarea from "./CardTarea"
import { useQuery } from "@tanstack/react-query"
import { Spinner, Text } from "@chakra-ui/react"
import ModalComponent from "../styles/ModalComponent"
import { useContext } from "react"
import { UserContext } from "../App"
import { API_URL } from "../utils/API_URL"
import GenericBox from "../styles/GenericBox"

const Tareas = () => {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tareas'],
        queryFn: () => fetch(`${API_URL}/tareas/${user.correo}`).then((res) => res.json()),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        refetchInterval: 1000,
    });

    const {data:data2} = useQuery({
        queryKey: ['usuario'],
        queryFn: () => fetch(`${API_URL}/usuarios/${user.correo}`)
        .then((res) => res.json())
    });

    if(data2 !== undefined){
        setUser(data2)
    }

  return (
    <GenericBox gap="1rem" fd="column">
    <GenericBox w="100%" gap="1rem" p="1rem" fw={"wrap"}>
        {
            isLoading ? <Spinner /> : isError ? <Text>{error.messagge}</Text> : (
                data === undefined || data.length === 0 ? <Text>Todavia no hay tareas pendientes ni terminadas</Text> : (data.map((tarea) => (
                    <CardTarea key={tarea._id} {...tarea} />
                )))
            )
        }
    </GenericBox>
        <ModalComponent />
    </GenericBox>
  )
}

export default Tareas