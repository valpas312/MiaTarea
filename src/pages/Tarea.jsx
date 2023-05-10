import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Spinner, Text } from '@chakra-ui/react'
import { rosaClaro } from '../styles/utils/colores'

const Tarea = () => {

    const { tareaId } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['correccion'],
        queryFn: () => fetch("http://localhost:4000/correcciones")
        .then((res) => res.json())
    })

    console.log(data)

    //correccion filtrada
    const correcciones =  data?.filter((correccion) => Number(correccion.id) === Number(tareaId))

    console.log(correcciones)

  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="4rem"
    >
        {
            isLoading ? <Spinner/> : isError ? <Text>{error.messagge}</Text> : (
                correcciones.length === 0 ? <Text>No hay correcciones</Text> : (
                    correcciones.map((correccion) => (
                        <Box key={correccion.id}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                            bg={rosaClaro}
                            p="3rem"
                            borderRadius="1rem"
                        >
                            <Text fontWeight="bold">{correccion.titulo}</Text>
                            <Text>{correccion.descripcion}</Text>
                            <Text>{correccion.fecha}</Text>
                        </Box>
                    ))
                )
            )
        }
    </Box>
  )
}

export default Tarea