import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Button, Spinner, Text } from '@chakra-ui/react'
import { amarillo, rosaClaro } from '../styles/utils/colores'
import { API_URL } from '../utils/API_URL'

const Tarea = () => {

    const { tareaId } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tarea'],
        queryFn: () => fetch(`${API_URL}/tareas/correccion/${tareaId}`)
        .then((res) => res.json())
    })

    console.log(data)

  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="4rem"
    >
        {
            isLoading ? <Spinner/> : isError ? <Text>{error.messagge}</Text> : (
                data.length === 0 ? (
                    <>
                        <Text>Todavia hay correcciones para esta tarea</Text>
                        <Button as={Link} to={"/"} bg={amarillo} _hover={{shadow:"xl"}}>Volver</Button>
                    </>
                ) : (
                        <Box key={data._id}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                            bg={rosaClaro}
                            p="3rem"
                            borderRadius="1rem"
                        >
                            <Text fontWeight="bold">{data.titulo}</Text>
                            <Text>{data.descripcion}</Text>
                            <Text>{data.fecha}</Text>
                            <Button as={Link} to={"/"} bg={amarillo} _hover={{shadow:"xl"}}>Volver</Button>
                        </Box>
                )
            )
        }
    </Box>
  )
}

export default Tarea