import { Box, ChakraProvider } from "@chakra-ui/react"
import Router from "./Router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {

  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
    <Box bg="gray.200" h="100vh">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      </Box>
    </ChakraProvider>
  )
}

export default App