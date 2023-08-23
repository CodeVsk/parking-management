import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/login"
import DashboardUser from "../pages/dashboard-user"
import DashboardAdmin from "../pages/dashboard.admin"
import Page1 from "../pages/dashboard-user-pages/page1"
import Page2 from "../pages/dashboard-user-pages/page2"
import Page3 from "../pages/dashboard-user-pages/page3"
import CadastroUser from "../pages/dashboard-admin-pages/cadastro-user"
import CadastroCarro from "../pages/dashboard-admin-pages/cadastro.carro"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/dashboard-user" element={<DashboardUser />} />
                <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/cadastro-user" element={<CadastroUser />} />
                <Route path="/cadastro-carro" element={<CadastroCarro />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes