import { useContext } from "react";
import { UserContext } from "../App";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text,
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { amarillo, rosaClaro2 } from "../styles/utils/colores";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../utils/API_URL";
import GenericBox from "../styles/GenericBox";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const toast = useToast();

  const navigate = useNavigate();
  
  const { mutate, isLoading } = useMutation({
      mutationKey: ["agrearUsuario"],
      mutationFn: (usuario) => 
         fetch(`${API_URL}/usuarios/register`, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
            "Content-Type": "application/json",
            },
        }),
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const correo = e.target.correo.value;
        const contraseña = e.target.contraseña.value;
        const tipo = "alumno";

    const usuario = {
        nombre,
        apellido,
        correo,
        contraseña,
        tipo,
    };

    mutate(usuario, {
        onSuccess: () => {
          setUser(usuario);
            toast({
                title: "Usuario creado",
                description: "El usuario se creó correctamente",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            navigate("/");
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: "Ocurrió un error al crear el usuario",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            console.log(error)
        },
    });

  };
  return (
    <GenericBox
      fd="column"
      w="100%"
      gap="1rem"
    >
      <Heading>Registrate</Heading>
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
        boxShadow={`0px 0px 10px 0px ${amarillo}`}
      >
        <FormLabel htmlFor="nombre" fontWeight="bold">
          Nombre
        </FormLabel>
        <Input type="text" placeholder="Nombre" id="nombre" required />

        <FormLabel htmlFor="apellido" fontWeight="bold">
          Apellido
        </FormLabel>
        <Input type="text" placeholder="Apellido" id="apellido" required />

        <FormLabel htmlFor="correo" fontWeight="bold">
          Correo
        </FormLabel>
        <Input type="email" placeholder="Correo" id="correo" required />

        <FormLabel htmlFor="contraseña" fontWeight="bold">
          Contraseña
        </FormLabel>
        <Input
          type="password"
          placeholder="Contraseña"
          id="contraseña"
          required
        />

        <Button type="submit" bg={amarillo} _hover={{ shadow: "xl" }}>
            {isLoading ? <Spinner /> : "Registrarse"}
        </Button>
      </FormControl>
      <Text>Ya tenes cuenta? </Text>
      <Button as={Link} to={"/login"}>
        Inicia sesión
      </Button>
    </GenericBox>
  );
};

export default Register;
