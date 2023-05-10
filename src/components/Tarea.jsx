
import { Button, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Tarea = ({...props}) => {

  // eslint-disable-next-line react/prop-types
  const { titulo, descripcion, fecha, estado } = props

  return (
    <Card w="70%" bg="pink">
      <CardHeader>
        {titulo}
      </CardHeader>
      <CardBody>
        {descripcion}
      </CardBody>
      <CardFooter display="flex" alignItems="center" gap="1rem" >
        {fecha}
        <Button
          colorScheme={estado === "Pendiente" ? "red" : "green"}
        >
          {estado}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Tarea