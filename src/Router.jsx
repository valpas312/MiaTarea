import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Tarea from "./pages/Tarea"
import useElement from "./hooks/useElement"
import Login from "./pages/Login"
import Register from "./pages/Register"

const Router = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={useElement(<Home/>, <Login/>)} />
            <Route path="/correcciones/:tareaId" element={useElement(<Tarea/>, <Login/>)} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router