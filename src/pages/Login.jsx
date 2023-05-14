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
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { amarillo, rosaClaro2 } from "../styles/utils/colores";
import { useQuery } from "@tanstack/react-query";

const Login = () => {

  const toast = useToast();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["usuarios"],
    queryFn: () =>
      fetch("http://localhost:4000/usuarios").then((res) => res.json()),
  });

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  console.log(data)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;
    //tipo de usuario
    const tipo = data.filter((usuario) => usuario.correo === correo)[0].tipo;
    //id_usuario
    const id_usuario = data.filter((usuario) => usuario.correo === correo)[0].id_usuario;

    const usuario = {
      nombre,
      apellido,
      correo,
      contraseña,
      tipo,
      id_usuario
    };

    data.find(
      (usuario) =>
        usuario.correo === correo && usuario.contraseña === contraseña
    )
      ? (setUser(usuario), navigate("/"))
      : (
          toast({
            title: "Error de inicio de sesion",
            description: "Recorda respetar mayusculas y minusculas",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
      )
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
      <Heading
        as="h1"
        size="xl"
      >Inicia sesion</Heading>
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
        <FormLabel
          htmlFor="nombre"
          fontWeight="bold"
        >Nombre</FormLabel>
        <Input type="text" placeholder="Nombre" id="nombre" required />

        <FormLabel
          htmlFor="apellido"
          fontWeight="bold"
        >Apellido</FormLabel>
        <Input type="text" placeholder="Apellido" id="apellido" required />

        <FormLabel
          htmlFor="correo"
          fontWeight="bold"
        >Correo</FormLabel>
        <Input type="email" placeholder="Correo" id="correo" required />

        <FormLabel
          htmlFor="contraseña"
          fontWeight="bold"
        >Contraseña</FormLabel>
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
        No tenes cuenta?
      </Text>
      <Button as={Link} to={"/register"} >Registrate</Button>
    </Box>
  );
};

export default Login;
