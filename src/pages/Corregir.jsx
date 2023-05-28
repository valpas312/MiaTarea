import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../utils/API_URL"
import { Heading, Text } from "@chakra-ui/react"
import FormCorreccion from "../components/FormCorreccion"
import GenericBox from "../styles/GenericBox"

const Corregir = () => {

  // eslint-disable-next-line no-unused-vars
  const { tareaId } = useParams()

  console.log(tareaId)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['corregir'],
    queryFn: () => fetch(`${API_URL}/tareas/tarea/${tareaId}`).then((res) => res.json())    
  });


  return (<GenericBox fd="column" gap="1rem">
    <Heading>Corregir tarea</Heading>
    <GenericBox>
    {
      isLoading ? <p>Cargando...</p> : isError ? <p>{error.message}</p> : (
        <GenericBox fd="column" gap="1rem">
          <Text>{data.titulo}</Text>
          <Text>{data.descripcion}</Text>
          <Text>{data.fecha}</Text>
          <Text>{data.estado}</Text>
          <Text>{data.correo}</Text>
        </GenericBox>
      )
    }
    </GenericBox>
    <FormCorreccion {...data} />
  </GenericBox>
  )
}

export default Corregir