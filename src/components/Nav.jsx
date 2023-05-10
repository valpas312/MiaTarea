import { Flex, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { rosaFuerte, amarillo } from "../styles/utils/colores"

const Nav = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center" bg={rosaFuerte} h="10vh" position="sticky" zIndex="999" gap="1rem">
        <Button as={Link} to={"/"} background={amarillo} >Home</Button>
    </Flex>
  )
}

export default Nav