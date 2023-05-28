import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../utils/API_URL"
import { Box, Heading, Text } from "@chakra-ui/react"
import FormCorreccion from "../components/FormCorreccion"

const Corregir = () => {

  // eslint-disable-next-line no-unused-vars
  const { tareaId } = useParams()

  console.log(tareaId)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['corregir'],
    queryFn: () => fetch(`${API_URL}/tareas/tarea/${tareaId}`).then((res) => res.json())    
  });


  return (<Box>
    <Heading>Corregir tarea</Heading>
    <Box>
    {
      isLoading ? <p>Cargando...</p> : isError ? <p>{error.message}</p> : (
        <Box>
          <Text>{data.titulo}</Text>
          <Text>{data.descripcion}</Text>
          <Text>{data.fecha}</Text>
          <Text>{data.estado}</Text>
          <Text>{data.correo}</Text>
        </Box>
      )
    }
    </Box>
    <FormCorreccion {...data} />
  </Box>
  )
}

export default Corregir