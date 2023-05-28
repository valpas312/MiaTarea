import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Button, Spinner, Text } from '@chakra-ui/react'
import { amarillo, rosaClaro } from '../styles/utils/colores'
import { API_URL } from '../utils/API_URL'
import GenericBox from '../styles/GenericBox'

const Tarea = () => {

    const { tareaId } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tarea'],
        queryFn: () => fetch(`${API_URL}/correcciones/correccion/${tareaId}`)
        .then((res) => res.json())
    })

  return (
    <GenericBox
        fd="column"
        p="4rem"
    >
        {
            isLoading ? <Spinner/> : isError ? <Text>{error.messagge}</Text> : (
                data === null || data === undefined || data.length === 0 ? (
                    <>
                        <Text>Todavia hay correcciones para esta tarea</Text>
                        <Button as={Link} to={"/"} bg={amarillo} _hover={{shadow:"xl"}}>Volver</Button>
                    </>
                ) : (
                        <GenericBox key={data._id}
                            fd="column"
                            gap="1rem"
                            bg={rosaClaro}
                            p="3rem"
                            br="1rem"
                        >
                            <Text fontWeight="bold">{data.titulo}</Text>
                            <Text>{data.correccion}</Text>
                            <Text>{data.aclaraciones}</Text>
                            <Text>{data.fecha}</Text>
                            <Button as={Link} to={"/"} bg={amarillo} _hover={{shadow:"xl"}}>Volver</Button>
                        </GenericBox>
                )
            )
        }
    </GenericBox>
  )
}

export default Tarea