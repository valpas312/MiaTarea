import { ChakraProvider } from "@chakra-ui/react"
import Router from "./Router"

const App = () => {
  return (
    <ChakraProvider>
        <Router />
    </ChakraProvider>
  )
}

export default App