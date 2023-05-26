import { Button, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { amarillo, rosaClaro } from "../styles/utils/colores";
import ModalDelete from "../styles/ModalDelete";

// eslint-disable-next-line react/prop-types
const CardTarea = ({...props}) => {

  // eslint-disable-next-line react/prop-types
  const { _id, titulo, descripcion, fecha, estado } = props

  const colorDelEstado = {
    Pendiente: "red",
    Terminada: "green",
  }


  return (
    <Card minW="40%" maxW="90%" bg={rosaClaro} _hover={{shadow:"xl"}} transition="ease-in-out .2s" >
      <CardHeader>
        <Button as={Link} to={`/correcciones/${_id}`} background={amarillo} >{titulo}</Button>
      </CardHeader>
      <CardBody>
        {// eslint-disable-next-line react/prop-types
        descripcion.length > 100 ? `${descripcion.slice(0, 100)}...` : descripcion}
      </CardBody>
      <CardFooter display="flex" alignItems="center" gap="1rem" >
        {fecha}
        <Button
          colorScheme={colorDelEstado[estado]}
        >
          {estado}
        </Button>
        <ModalDelete id={_id} />
      </CardFooter>
    </Card>
  )
}

export default CardTarea