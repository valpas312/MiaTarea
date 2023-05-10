import CardTarea from "./CardTarea"
import { useQuery } from "@tanstack/react-query"
import { Box, Spinner } from "@chakra-ui/react"
import { BASE_URL } from "../utils/BASE_URL"
import ModalComponent from "../styles/ModalComponent"

const Tareas = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tareas'],
        queryFn: () => fetch(`${BASE_URL}/tareas`).then((res) => res.json()),
    });

  return (
    <Box display="flex" gap="1rem" flexDirection="column" alignItems="center">
    <Box w="100%" display="flex" alignItems="center" justifyContent="center" gap="1rem" p="1rem">
        {
            isLoading ? <Spinner /> : isError ? <p>{error.messagge}</p> : (
                data.length === 0 ? <p>Todavia no hay tareas pendientes ni terminadas</p> : (data.map((tarea) => (
                    <CardTarea key={tarea.id} {...tarea} />
                )))
            )
        }
    </Box>
        <ModalComponent />
    </Box>
  )
}

export default Tareas