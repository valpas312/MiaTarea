import { Button, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { amarillo } from "../styles/utils/colores";

// eslint-disable-next-line react/prop-types
const CardTarea = ({...props}) => {

  // eslint-disable-next-line react/prop-types
  const { id, titulo, descripcion, fecha, estado } = props

  const colorDelEstado = {
    Pendiente: "red",
    Terminada: "green",
  }

  return (
    <Card w="30%" bg="pink">
      <CardHeader>
        <Button as={Link} to={`/correcciones/${id}`} background={amarillo} >{titulo}</Button>
      </CardHeader>
      <CardBody>
        {descripcion}
      </CardBody>
      <CardFooter display="flex" alignItems="center" gap="1rem" >
        {fecha}
        <Button
          colorScheme={colorDelEstado[estado]}
        >
          {estado}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardTarea