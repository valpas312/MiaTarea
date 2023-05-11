import { Box, ChakraProvider } from "@chakra-ui/react";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
export const UserContext = createContext();

const App = () => {

  const [user, setUser] = useState({});

  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <Box bg="gray.200" h="100vh">
        <QueryClientProvider client={queryClient}>
          <UserContext.Provider value={ [user, setUser]}>
          <Router />
          </UserContext.Provider>
        </QueryClientProvider>
      </Box>
    </ChakraProvider>
  );
};

export default App;
