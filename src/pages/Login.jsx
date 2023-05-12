import { useContext } from "react";
import { UserContext } from "../App";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { amarillo, rosaClaro2 } from "../styles/utils/colores";
import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["usuarios"],
    queryFn: () =>
      fetch("http://localhost:4000/usuarios").then((res) => res.json()),
  });

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const buscarTipo = (correo) => {
    const usuario = data.find((usuario) => usuario.correo === correo);
    return usuario.tipo;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;
    //tipo de usuario
    const tipo = buscarTipo(correo);

    const usuario = {
      nombre,
      apellido,
      correo,
      contraseña,
      tipo,
    };

    data.find(
      (usuario) =>
        usuario.correo === correo && usuario.contraseña === contraseña
    )
      ? (setUser(usuario), navigate("/"))
      : alert("correo o contraseña incorrectos");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      gap="1rem"
    >
      <Heading>Inicia sesion</Heading>
      <FormControl
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        minW="40%"
        maxW="50%"
        p={4}
        borderRadius={8}
        bg={rosaClaro2}
      >
        <FormLabel>Nombre</FormLabel>
        <Input type="text" placeholder="Nombre" id="nombre" required />

        <FormLabel>Apellido</FormLabel>
        <Input type="text" placeholder="Apellido" id="apellido" required />

        <FormLabel>Correo</FormLabel>
        <Input type="email" placeholder="Correo" id="correo" required />

        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          placeholder="Contraseña"
          id="contraseña"
          required
        />

        <Button type="submit" bg={amarillo} _hover={{ shadow: "xl" }}>
          {isLoading
            ? "Cargando..."
            : isError
            ? error.message
            : "Iniciar sesion"}
        </Button>
      </FormControl>
      <Text>
        No tenes cuenta? <Link to={"/register"}>Registrate</Link>
      </Text>
    </Box>
  );
};

export default Login;
