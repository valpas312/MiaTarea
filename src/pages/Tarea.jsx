import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Spinner } from '@chakra-ui/react'

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
    <Box>
        {
            isLoading ? <Spinner/> : isError ? <p>{error.messagge}</p> : (
                correcciones.length === 0 ? <p>No hay correcciones</p> : (
                    correcciones.map((correccion) => (
                        <Box key={correccion.id}>
                            <p>{correccion.descripcion}</p>
                        </Box>
                    ))
                )
            )
        }
    </Box>
  )
}

export default Tarea