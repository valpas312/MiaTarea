import { Flex, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="space-evenly" bg="pink.300" h="10vh" position="sticky" zIndex="999">
        <Button as={Link} to={"/"}>Home</Button>
        <Button as={Link} to={"/about"}>About</Button>
    </Flex>
  )
}

export default Nav