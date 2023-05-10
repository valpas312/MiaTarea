import Tarea from "./Tarea"
import { useQuery } from "@tanstack/react-query"
import { Box, Spinner } from "@chakra-ui/react"
import { BASE_URL } from "../utils/BASE_URL"

const Tareas = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tareas'],
        queryFn: () => fetch(`${BASE_URL}/tareas`).then((res) => res.json()),
    });

    console.log(data, isLoading, isError, error)
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="1rem" p="1rem">
        {
            isLoading ? <Spinner /> : isError ? <p>{error.messagge}</p> : (
                data.map((tarea) => (
                    <Tarea key={tarea.id} {...tarea} />
                ))
            )
        }
    </Box>
  )
}

export default Tareas