import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/login"
import CadastroUser from "../pages/admin-pages/cadastro-user"
import CadastroCarro from "../pages/admin-pages/cadastro.carro"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/cadastro-user" element={<CadastroUser />} />
                <Route path="/cadastro-carro" element={<CadastroCarro />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes