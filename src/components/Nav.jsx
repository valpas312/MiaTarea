import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { rosaFuerte, amarillo } from "../styles/utils/colores";
import { useContext } from "react";
import { UserContext } from "../App";

const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      bg={rosaFuerte}
      h="10vh"
      position="sticky"
      zIndex="999"
      gap="1rem"
      boxShadow={`0px 0px 10px 0px ${rosaFuerte}`}
    >
      <Button
        colorScheme="red"
        as={Link}
        to={"/login"}
        onClick={() => setUser([])}
      >
        Cerrar sesion
      </Button>
      <Button as={Link} to={"/"} background={amarillo}>
        Home
      </Button>
    </Flex>
  );
};

export default Nav;
