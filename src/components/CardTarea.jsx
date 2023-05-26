import { Button, Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { amarillo, rosaClaro } from "../styles/utils/colores";
import ModalDelete from "../styles/ModalDelete";
import { useContext } from "react";
import { UserContext } from "../App"

// eslint-disable-next-line react/prop-types
const CardTarea = ({...props}) => {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)

  // eslint-disable-next-line react/prop-types
  const { _id, titulo, descripcion, fecha, estado, correo } = props

  const colorDelEstado = {
    Pendiente: "red",
    Terminada: "green",
  }

  return (
    <Card minW="40%" maxW="90%" bg={rosaClaro} _hover={{shadow:"xl"}} transition="ease-in-out .2s" >
      <CardHeader display="flex" alignItems="center" gap="1rem" >
        <Button as={Link} to={`/correcciones/${_id}`} background={amarillo} >{titulo}</Button>
        {
          user.tipo === "admin" ? (
            <Button as={Link} to={`/corregir/${_id}`} background={amarillo} >
              Corregir
            </Button>
          ) : null
        }
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
        {
          user.tipo === "admin" ? (
            <Text>{correo}</Text>
          ) : null
        }
      </CardFooter>
    </Card>
  )
}

export default CardTarea