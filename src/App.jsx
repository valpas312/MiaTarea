import { ChakraProvider } from "@chakra-ui/react"
import Router from "./Router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {

  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App