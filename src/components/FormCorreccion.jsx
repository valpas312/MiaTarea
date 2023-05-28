import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query"
import { API_URL } from "../utils/API_URL"
import { useParams } from "react-router-dom"
import { formatDate } from "../utils/formatDate"

const FormCorreccion = ({...props}) => {

    const { tareaId } = useParams()

    // eslint-disable-next-line react/prop-types
    const { correo, titulo } = props

    const { mutate, isLoading, isError, error } = useMutation({
        mutationKey: ['corregir'],
        mutationFn: (correccion) =>
            fetch(`${API_URL}/correcciones/correccion`, {
                method: 'POST',
                body: JSON.stringify(correccion),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json())
    })

    const { mutate: mutateTarea } = useMutation({
        mutationKey: ['tarea'],
        mutationFn: (tarea) =>
            fetch(`${API_URL}/tareas/${tareaId}`, {
                method: 'PUT',
                body: JSON.stringify(tarea),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json())
    })

  return (
    <FormControl
        as="form"
        w="70%"
        onSubmit={(e) => {
            e.preventDefault()
            const correccion = {
                _id: tareaId,
                correo,
                titulo,
                correccion: e.target[0].value,
                aclaraciones: e.target[1].value,
                fecha: formatDate(new Date())
            }
            mutate(correccion)
            mutateTarea({estado: 'Terminada'})
        }}
    >
        <FormLabel>Correccion</FormLabel>
        <Textarea placeholder="Correccion" required as="input" />

        <FormLabel>Aclaraciones</FormLabel>
        <Input type="text" placeholder="Aclaraciones" />

        <Button type="submit">
            {
                isLoading ? 'Cargando...' : isError ? error.message : 'Enviar'
            }
        </Button>
    </FormControl>
  )
}

export default FormCorreccion