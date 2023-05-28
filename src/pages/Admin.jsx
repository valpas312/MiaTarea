import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../utils/API_URL"
import { Spinner, Text } from "@chakra-ui/react";
import CardTarea from "../components/CardTarea";
import GenericBox from "../styles/GenericBox";

const Admin = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tareas'],
    queryFn: () => fetch(`${API_URL}/tareas/`).then((res) => res.json()),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 5000,
  });

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
    </GenericBox>
  )
}

export default Admin