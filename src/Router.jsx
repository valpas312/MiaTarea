import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import AgregarTarea from "./pages/AgregarTarea"
import Tarea from "./pages/Tarea"

const Router = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/agregar-tarea" element={<AgregarTarea/>} />
            <Route path="/correcciones/:tareaId" element={<Tarea/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router