import { useContext } from "react";
import { UserContext } from "../App";
import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { amarillo, rosaClaro2 } from "../styles/utils/colores";

const Register = () => {
   // eslint-disable-next-line no-unused-vars
   const [user, setUser] = useContext(UserContext)

   const navigate = useNavigate()

   const handleSubmit = (e) => {
       e.preventDefault();
       const nombre = e.target.nombre.value;
       const apellido = e.target.apellido.value;
       const correo = e.target.correo.value;
       const contraseña = e.target.contraseña.value;
       setUser({ nombre, apellido, correo, contraseña });
       navigate("/");
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
       <Heading>Registrate</Heading>
       <FormControl
           as="form"
           onSubmit={handleSubmit}
           display="flex"
           flexDirection="column"
           justifyContent="center"
           alignItems="center"
           gap="1rem"
           minW="30%"
           maxW="70%"
           p={4}
           borderRadius={8}
           bg={rosaClaro2}
           boxShadow={`0px 0px 10px 0px ${amarillo}`}
       >
           <FormLabel>Nombre</FormLabel>
           <Input type="text" placeholder="Nombre" id="nombre" required />

           <FormLabel>Apellido</FormLabel>
           <Input type="text" placeholder="Apellido" id="apellido" required />

           <FormLabel>Correo</FormLabel>
           <Input type="email" placeholder="Correo" id="correo" required />

           <FormLabel>Contraseña</FormLabel>
           <Input type="password" placeholder="Contraseña" id="contraseña" required/>

           <Button type="submit" bg={amarillo} _hover={{shadow:"xl"}}>Iniciar sesión</Button>
       </FormControl>
       <Text>Ya tenes cuenta? <Link to={"/login"}>Inicia sesion</Link></Text>
   </Box>
 )
}

export default Register