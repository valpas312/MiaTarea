import CardTarea from "./CardTarea"
import { useQuery } from "@tanstack/react-query"
import { Box, Spinner, Text } from "@chakra-ui/react"
import ModalComponent from "../styles/ModalComponent"
import { useContext } from "react"
import { UserContext } from "../App"
import { API_URL } from "../utils/API_URL"

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

    console.log(data)

  return (
    <Box display="flex" gap="1rem" flexDirection="column" alignItems="center">
    <Box w="100%" display="flex" alignItems="center" justifyContent="center" gap="1rem" p="1rem" flexWrap={"wrap"}>
        {
            isLoading ? <Spinner /> : isError ? <Text>{error.messagge}</Text> : (
                data === undefined || data.length === 0 ? <Text>Todavia no hay tareas pendientes ni terminadas</Text> : (data.map((tarea) => (
                    <CardTarea key={tarea._id} {...tarea} />
                )))
            )
        }
    </Box>
        <ModalComponent />
    </Box>
  )
}

export default Tareas