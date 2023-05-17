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
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../utils/API_URL";

const Login = () => {

  const toast = useToast();

  const { mutate, isError, isLoading, error } = useMutation({
    queryKey: ["usuarios"],
    mutationFn: (usuario) =>
      fetch(`${API_URL}/usuarios/login`,{
        method: "POST",
        body: JSON.stringify(usuario),
        
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;

    const usuario = {
      correo,
      contraseña,
    }; 

    mutate(usuario, {
      onSuccess: (data) => {
        setUser(data);
        navigate("/");
        toast({
          title: "Bienvenido",
          description: "Iniciaste sesion correctamente",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      },
      onError: (error) => {
        alert(error.message);
        toast({
          title: "Error",
          description: "No se pudo iniciar sesion",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      },
    });
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
